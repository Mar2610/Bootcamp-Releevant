import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import Avatar from "@mui/material/Avatar";
import { useEffect } from "react";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box } from "@mui/system";

export default function BookList() {
  const [checked, setChecked] = React.useState([1]);
  const [resume, setResume] = React.useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  useEffect(function () {
    async function bookResume() {
      const response = await fetch("http://localhost:3001/getBooks");
      const datas = await response.json();
      setResume(datas);
    }
    bookResume();
  }, []);

  console.log(resume);

  return (
    <Box sx={{justifyContent: "center"}}>
    <List
      dense
      sx={{ width: "100%", bgcolor: "background.paper", border: 1 }}
    >
      {resume?.map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            secondaryAction={
              <IconButton>
                <DeleteIcon></DeleteIcon>
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={`/static/images/avatar/${value + 1}.jpg`}
                />
              </ListItemAvatar>
              <ListItemText id={labelId} primary={value.idCart} />
              <ListItemText id={labelId} primary={value.userName} />
              <ListItemText id={labelId} primary={value.startDate} />
              <ListItemText id={labelId} primary={value.endDate} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    </Box>
  );
}
