import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CardUI from "../CardUI";

let data = new Date();

interface Props {
  list: { name: string; description: string }[];
}
const ListUI = (props: Props) => {
  const { list } = props;
  return (
    <>
      {list.map((item) => {
        return (
          <List component="nav" aria-label="list tasks">
            <ListItem>
              <ListItemText primary={item.name} />
              <ListItemText primary={item.description} />
              <ListItemText
                primary={`${data.getDate()}/${data.getMonth()}/${data.getFullYear()}`}
              />
            </ListItem>
          </List>
        );
      })}
    </>
  );
};

export default ListUI;
