import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./table.scss";

export default function Table() {
  const orderList = useSelector((state) => {
    return state.table.orderData;
  });

  return (
    <div className="table__wrapper">
      <div className="table__buttons">
        <Link className="table__link" to={"/"}>
          Traiding
        </Link>
        <Link className="table__link" to={"/archive"}>
          Archive
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>Side</th>
            <th>Price</th>
            <th>Instrument</th>
            <th>Volume</th>
            <th>Timestamp</th>
          </tr>
        </thead>

        <tbody>
          {orderList.map((item, index) => (
            <tr key={index}>
              <td
                className={
                  item.side === "table__buy" ? "table__green" : "table__red"
                }
              >
                {item.side.toString().toUpperCase()}
              </td>
              <td>{item.price}</td>
              <td>{item.instrument}</td>
              <td>{item.volume}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
