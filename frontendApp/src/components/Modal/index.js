import React from "react";
import { CSSTransition } from "react-transition-group";
import "./style.scss";

function Modal(props) {
  const {
    children,
    isVisible,
    animationType,
    animationTimeout,
    className,
  } = props;
  return (
    <div className={`modal ${className} ${!isVisible ? "hidden" : ""}`}>
      <CSSTransition
        in={isVisible}
        timeout={100}
        classNames="opacity"
        appear
        unmountOnExit
      >
        <div className="modal__overlay" />
      </CSSTransition>

      <CSSTransition
        in={isVisible}
        timeout={animationTimeout}
        classNames={animationType}
        appear
        unmountOnExit
      >
        <div className="modal__content">
          {children}
        </div>
      </CSSTransition>
    </div>
  );
}


export default Modal;
