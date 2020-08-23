import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { selectedNameState, wordGroupFoldersState } from "../state/atoms";
import { useMoveName } from "../hooks/moveName";

export const MoveName = () => {
  const history = useHistory();
  const moveName = useMoveName();
  const selectedName = useRecoilValue(selectedNameState);
  const wordGroupFolders = useRecoilValue(wordGroupFoldersState);
  const [folderName, setFolderName] = useState(selectedName.folderName);

  useEffect(() => {
    // Prevent going to this page on first visit
    if (selectedName.folderName === undefined) {
      history.push("/");
    }
  }, []);

  const title = `${selectedName.folderName}/${selectedName.name}`;

  const moveFolderHandler = () => {
    moveName({
      name: selectedName.name,
      from: selectedName.folderName,
      to: folderName,
    });
    history.push("/");
  };

  return (
    <Box style={{ margin: "10px" }}>
      <Typography>{title}</Typography>
      <Autocomplete
        id="combo-box-demo"
        options={Object.keys(wordGroupFolders)}
        getOptionLabel={(option) => option}
        style={{ width: 300 }}
        onSelect={(event) => setFolderName(event.target.value)}
        renderInput={(params) => (
          <TextField {...params} label="Combo box" variant="outlined" />
        )}
      />
      <Button variant="contained" color="primary" onClick={moveFolderHandler}>
        Move
      </Button>
    </Box>
  );
};
