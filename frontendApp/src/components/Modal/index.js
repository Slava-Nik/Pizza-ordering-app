import React from "react";
import PropTypes from "prop-types";
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

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  isVisible: PropTypes.bool.isRequired,
  animationType: PropTypes.oneOf(["zoom", "opacity"]),
  animationTimeout: PropTypes.number,
  className: PropTypes.string,
};

Modal.defaultProps = {
  animationType: "opacity",
  animationTimeout: 200,
  className: "",
};


export default Modal;
