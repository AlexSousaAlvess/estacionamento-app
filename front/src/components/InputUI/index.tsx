import React from "react";

import TextField from "@material-ui/core/TextField";

interface Props {
  tipo?: string;
  label: string;
  nome?: string;
  value?: string;
  altura?: string;
  largura?: string;
  multiplasLinhas?: boolean;
  handleChangeText?: (e: any) => any;
}

const InputUI = (props: Props) => {
  const {
    tipo,
    nome,
    label,
    value,
    altura,
    largura,
    multiplasLinhas,
    handleChangeText,
  } = props;

  switch (tipo) {
    case "outlined":
      return (
        <TextField
          label={label}
          name={nome}
          value={value}
          variant={tipo}
          multiline={multiplasLinhas}
          style={{
            width: largura,
            height: altura,
            display: "block",
            margin: "10px 0",
          }}
          onChange={handleChangeText}
        />
      );
    case "filled":
      return (
        <TextField
          label={label}
          name={nome}
          value={value}
          variant={tipo}
          multiline={multiplasLinhas}
          style={{
            width: largura,
            height: altura,
            display: "block",
            margin: "10px 0",
          }}
          onChange={handleChangeText}
        />
      );
    default:
      return (
        <TextField
          label={label}
          name={nome}
          value={value}
          variant="standard"
          multiline={multiplasLinhas}
          style={{
            width: largura,
            height: altura,
            display: "block",
            margin: "10px 0",
          }}
          onChange={handleChangeText}
        />
      );
  }
};
export default InputUI;
