import { useSetRecoilState } from "recoil";

import { createWordGroupFolder } from "../api/wordGroup";
import { wordGroupFoldersState, notificationState } from "../state/atoms";

export function useCreateFolder() {
  const setWordGroupFolders = useSetRecoilState(wordGroupFoldersState);
  const setNotification = useSetRecoilState(notificationState);

  const createFolder = async (name) => {
    if (name.length === 0) {
      return;
    }

    const folders = await createWordGroupFolder(name);
    console.log(folders);
    setWordGroupFolders(folders);
    setNotification(`Successfully Added ${name}`);
  };

  return createFolder;
}
