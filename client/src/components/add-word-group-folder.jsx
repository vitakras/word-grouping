import React, { useState } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useCreateFolder } from "../hooks/createFolder";

export const AddWorkGroupFolder = () => {
  const [value, setValue] = useState("");
  const createFolder = useCreateFolder();

  const createFolderHandler = () => {
    createFolder(encodeURI(value));
    setValue("");
  };

  return (
    <Box style={{ margin: "10px" }}>
      <TextField
        id="standard-basic"
        label="Folder Name"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
      <Button variant="contained" color="primary" onClick={createFolderHandler}>
        Create Folder
      </Button>
    </Box>
  );
};
