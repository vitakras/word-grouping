import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { wordGroupFoldersState } from "../state/atoms";
import { getWordGroupFolder } from "../api/wordGroup";

export function LoadWordGroupFolders() {
  const setWordGroupFolders = useSetRecoilState(wordGroupFoldersState);

  const loadWordGroupFolders = async () => {
    const folders = await getWordGroupFolder();
    setWordGroupFolders(folders);
  };

  useEffect(() => {
    loadWordGroupFolders();
  }, []);

  return null;
}
