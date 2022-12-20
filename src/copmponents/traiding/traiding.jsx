import { useEffect, useState } from "react";
import Time from "../time/time";
import { Popup } from "../popup/popup";
import Price from "../price/price";
import Select from "../select/select";
import Volume from "../volume/volume";
import { currency } from "../../const";
import { randomInterval } from "../../helpers/randomRange";
import { addItem } from "../../redux/sliceTable";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";
import "./traiding.scss";

const options = Object.keys(currency);

export default function Traiding() {
  const dispatch = useDispatch();

  const [activeOption, setactiveOption] = useState(options[0]);

  const { min, max } = currency[activeOption];
  const [price, setPrice] = useState(randomInterval(min, max).toFixed(4));

  const [volume, setVolume] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [orderValues, setOrderValues] = useState();

  useEffect(() => {
    const { min, max } = currency[activeOption];
    const interval = setInterval(() => {
      setPrice(randomInterval(min, max).toFixed(4));
    }, 500);
    return () => clearInterval(interval);
  }, [activeOption]);

  function calculateSpread() {
    const fixPrice = (+price)
      .toFixed(4)
      .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, "$1");

    const fixSpread = currency[activeOption].spread
      .toFixed(4)
      .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, "$1");

    const fixRes = (parseFloat(fixPrice) - parseFloat(fixSpread))
      .toFixed(4)
      .replace(/([0-9]+(\.[0-9]+[1-9])?)(\.?0+$)/, "$1");

    return parseFloat(fixRes);
  }

  function handleactiveOption(aP) {
    const { min, max } = currency[aP];
    aP !== activeOption && setactiveOption(aP);
    setPrice(randomInterval(min, max).toFixed(4));
  }

  function handleSubmitOrder() {
    if (!orderValues) return;
    dispatch(
      addItem({
        side: orderValues.type,
        price: orderValues.price,
        instrument: activeOption,
        volume: parseFloat(volume),
        time: dayjs(new Date()).format("YYYY.MM.DD H:mm"),
      })
    );
    setIsOpen(false);
    setVolume("");
  }

  return (
    <div className="trading__wrapper">
      <div className="trading__buttons">
        <Link className="trading__link" to={"/"}>
          TRAIDING
        </Link>
        <Link className="trading__link" to={"/archive"}>
          ARCHIVE
        </Link>
      </div>
      <Time />
      <Select
        options={options}
        activeOption={activeOption}
        setactiveOption={handleactiveOption}
      />
      <div className="trading__prices">
        <Price
          type="buy"
          price={parseFloat(price)}
          setOrderValues={setOrderValues}
          setIsOpen={setIsOpen}
        />
        <Price
          type="sell"
          price={calculateSpread()}
          setIsOpen={setIsOpen}
          setOrderValues={setOrderValues}
        />
      </div>
      <Popup isOpen={isOpen} setIsOpen={setIsOpen}>
        {orderValues && (
          <>
            <b className={orderValues.type === "buy" ? "green" : "red"}>
              {orderValues.type} {orderValues.price}
            </b>
            <b>{activeOption}</b>
            <Volume value={volume} onChange={setVolume} />
            <div className="trading__buttons">
              <button
                className="trading__link"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </button>{" "}
              <button className="trading__link" onClick={handleSubmitOrder}>
                OK
              </button>
            </div>
          </>
        )}
      </Popup>
    </div>
  );
}
