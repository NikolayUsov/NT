import "./popup.scss";

export const Popup = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      className={
        isOpen ? "popup__wrapper popup__wrapper--active" : "popup__wrapper"
      }
      onClick={() => setIsOpen(false)}
    >
      <div className="popup__content" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
