import React from "react";

import Typography from "@material-ui/core/Typography";

interface Props {
  children: {};
  tipo?: string;
}

const TxtUI = (props: Props) => {
  const { children, tipo } = props;

  return (
    <>
      {tipo === "h1" ? (
        <Typography variant="h1">{children}</Typography>
      ) : (
        <Typography variant="h3">{children}</Typography>
      )}
    </>
  );
};
export default TxtUI;
