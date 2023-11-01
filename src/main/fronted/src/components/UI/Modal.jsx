import { css } from "@emotion/css";
import React from "react";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClick} className={backdrop} />;
};

const ModalOverlay = (props) => {
  return <div className={modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <>
      {ReactDom.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById("overlays")
      )}
      {ReactDom.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById("overlays")
      )}
    </>
  );
};
export default Modal;

const backdrop = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`;

const modal = css`
  position: fixed;
  top: 20vh;
  left: 50%;
  max-width: 700px;
  width: 40%;
  margin: 0 auto;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;

const move = css`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;
