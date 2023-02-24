import React from "react";

import Button from "../Button";

import ToastShelf from "../ToastShelf/ToastShelf";

import styles from "./ToastPlayground.module.css";

import {ToastsContext} from "../ToastProvider/ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const toastsObj = React.useContext(ToastsContext);
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          let toastObj = {
            id: Math.random(),
            message: toastsObj.message,
            variant: toastsObj.variant,
          };

          let updatedToasts = [...toastsObj.toasts, toastObj];

          toastsObj.setToasts(updatedToasts);
          toastsObj.setMessage("");
          toastsObj.setVariant("notice");
        }}
      >
        <div className={styles.controlsWrapper}>
          <div className={styles.row}>
            <label
              htmlFor="message"
              className={styles.label}
              style={{alignSelf: "baseline"}}
            >
              Message
            </label>
            <div className={styles.inputWrapper}>
              <textarea
                id="message"
                className={styles.messageInput}
                value={toastsObj.message}
                onChange={(e) => {
                  toastsObj.setMessage(e.target.value);
                }}
              />
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label}>Variant</div>
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              {VARIANT_OPTIONS.map((el) => {
                return (
                  <label key={el} htmlFor={`variant-${el}`}>
                    <input
                      id={`variant-${el}`}
                      type="radio"
                      name="variant"
                      value={el}
                      checked={el === toastsObj.variant}
                      onChange={(event) => {
                        toastsObj.setVariant(event.target.value);
                      }}
                    />
                    {el}
                  </label>
                );
              })}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.label} />
            <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
              <Button>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
