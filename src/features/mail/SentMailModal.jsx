import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchAsyncSendEmail,
  setOpenModal,
  resetOpenModal,
  selectModal,
} from "./emailSlice";

const SentMailModal = () => {
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);
  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={async () => {
          await dispatch(resetOpenModal);
        }}
      >
        <h1>JJJJJ</h1>
        <button
          onClick={async () => {
            await dispatch(resetOpenModal());
          }}
        >
          close
        </button>
      </Modal>
    </>
  );
};

export default SentMailModal;
