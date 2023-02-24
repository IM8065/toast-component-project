import React from "react";
import {useEscapeKey} from "../../hooks/useEscapeKeyHook";

export const ToastsContext = React.createContext();
function ToastProvider({children}) {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(handleDismiss);

  function handleDismiss() {
    setToasts([]);
  }

  let value = {
    message,
    setMessage,
    variant,
    setVariant,
    toasts,
    setToasts,
  };
  return (
    <ToastsContext.Provider value={value}>{children}</ToastsContext.Provider>
  );
}

export default ToastProvider;
