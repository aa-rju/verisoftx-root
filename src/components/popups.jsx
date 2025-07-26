// popups
import React, {useEffect} from "react";

const Popup = ({ type, message, show, onClose }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  const bgColor = type === "error" ? "red" : "green";

  return (
    <div
      className="notification_popup"
      style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        backgroundColor: bgColor,
        color: "white",
        padding: "10px 30px 10px 10px",
        borderRadius: "10px",
        zIndex: 9999,
        display: "block",
        minWidth: "200px"
      }}
    >
      {message}
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "5px",
          right: "8px",
          background: "none",
          border: "none",
          color: "white",
          fontWeight: "bold",
          fontSize: "16px",
          cursor: "pointer"
        }}
        aria-label="Close"
      >
        x
      </button>
    </div>
  );
};

export default Popup;