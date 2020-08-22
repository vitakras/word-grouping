import React, { Fragment } from "react";
import { AddWorkGroupFolder } from "../components/add-word-group-folder";
import WordGroupList from "../components/word-group";
import { LoadWordGroupFolders } from "../components/load-word-group-folders";

export const ListWordGroupScreen = () => (
  <Fragment>
    <LoadWordGroupFolders />
    <AddWorkGroupFolder />
    <WordGroupList />
  </Fragment>
);
