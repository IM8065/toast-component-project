import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import {ToastsContext} from "../ToastProvider/ToastProvider";

function ToastShelf() {
  const toastsObj = React.useContext(ToastsContext);
  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
      {toastsObj.toasts.map((element) => {
        return (
          <li key={element.id} className={styles.toastWrapper}>
            <Toast id={element.id} variant={element.variant}>
              {element.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
