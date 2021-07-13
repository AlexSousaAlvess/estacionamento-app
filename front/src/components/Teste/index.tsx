import React from "react";

// import { Container } from './styles';

interface Props {
  handleChangeTeste: (e?: any) => void;
}
const Teste = ({ handleChangeTeste }: Props) => {
  return <input onChange={(e) => handleChangeTeste(e)} />;
};

export default Teste;
