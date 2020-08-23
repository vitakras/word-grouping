import React, { Fragment } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import FolderIcon from "@material-ui/icons/Folder";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import DescriptionIcon from "@material-ui/icons/Description";

import { wordGroupFoldersState, selectedNameState } from "../state/atoms";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export const Folder = ({ name, items = [] }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const setSelectedName = useSetRecoilState(selectedNameState);
  const history = useHistory();

  const handleClick = () => {
    setOpen(!open);
  };

  const FolderItems = items.map((item) => {
    // This is probably a code smell and will be harder to test
    const moveFolderItem = () => {
      setSelectedName({
        name: item,
        folderName: name,
      });
      history.push(`/move/${item}`);
    };

    return (
      <ListItem
        key={item}
        button
        className={classes.nested}
        onClick={moveFolderItem}
      >
        <ListItemIcon>
          <DescriptionIcon />
        </ListItemIcon>
        <ListItemText primary={item} />
      </ListItem>
    );
  });

  return (
    <Fragment>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {open ? <FolderOpenIcon /> : <FolderIcon />}
        </ListItemIcon>
        <ListItemText primary={name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {FolderItems}
        </List>
      </Collapse>
    </Fragment>
  );
};

export default function WordGroupList() {
  const classes = useStyles();
  const workGroupFolders = useRecoilValue(wordGroupFoldersState);

  const folder = Object.keys(workGroupFolders).map((key) => (
    <Folder key={key} name={key} items={workGroupFolders[key]} />
  ));

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      className={classes.root}
    >
      {folder}
    </List>
  );
}
