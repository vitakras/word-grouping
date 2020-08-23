import { useSetRecoilState } from "recoil";

import { moveNameToNewFolder } from "../api/wordGroup";
import { wordGroupFoldersState, notificationState } from "../state/atoms";

export function useMoveName() {
  const setWordGroupFolders = useSetRecoilState(wordGroupFoldersState);
  const setNotification = useSetRecoilState(notificationState);

  const moveFolder = async ({ name, from, to }) => {
    const folders = await moveNameToNewFolder({ name, from, to });
    setWordGroupFolders(folders);
    setNotification(`Successfully Moved ${name} from ${from} to ${to}`);
  };

  return moveFolder;
}
