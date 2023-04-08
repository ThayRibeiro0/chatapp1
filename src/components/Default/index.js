import React from "react";
import * as C from "./styles";
import { MdMessage } from "react-icons/md";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>ChatApp1</C.Title>
      <C.Info>
        Envie e receba mensagens Offline.
      </C.Info>
    </C.Container>
  );
};

export default Default;