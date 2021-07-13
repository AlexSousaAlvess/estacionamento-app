import React from "react";
import Button from "@material-ui/core/Button";

interface Props {
  tipo?: string;
  // tipo?: "primary" | "secondary " | "disabled" | "link";
  value: string;
  link?: string;
  handleAddTask: () => any;
}

const ButtonUI = (props: Props) => {
  const { tipo, value, link, handleAddTask } = props;

  switch (tipo) {
    case "primary":
      return (
        <Button
          variant="contained"
          color={tipo}
          onClick={handleAddTask}
          style={{
            display: "block",
            margin: "10px 0",
          }}
        >
          {value}
        </Button>
      );
    case "secondary":
      return (
        <Button
          variant="contained"
          color={tipo}
          onClick={handleAddTask}
          style={{
            display: "block",
            margin: "10px 0",
          }}
        >
          {value}
        </Button>
      );
    case "disabled":
      return (
        <Button
          variant="contained"
          disabled
          onClick={handleAddTask}
          style={{
            display: "block",
            margin: "10px 0",
          }}
        >
          {value}
        </Button>
      );
    case "link":
      return (
        <Button
          variant="contained"
          color="primary"
          href={link}
          onClick={handleAddTask}
          style={{
            display: "block",
            margin: "10px 0",
          }}
        >
          {value}
        </Button>
      );
    default:
      return (
        <Button
          variant="contained"
          onClick={handleAddTask}
          style={{
            display: "block",
            margin: "10px 0",
          }}
        >
          {value}
        </Button>
      );
  }
};

export default ButtonUI;
