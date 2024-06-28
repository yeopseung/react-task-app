import { ChangeEvent, FC, useState } from "react";
import { FiCheck } from "react-icons/fi";
import { icon, input, sideForm } from "./SideForm.css";
import { useTypedDispatch } from "../../../hooks/redux";
import { addBoard } from "../../../store/slices/boardsSlice";
import { v4 as uuidv4 } from "uuid";
import { addLog } from "../../../store/slices/loggerSlice";

type TSideForm = {
  inputRef: React.RefObject<HTMLInputElement>;
  setIsFormOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideForm: FC<TSideForm> = ({ inputRef, setIsFormOpen }) => {
  const [inputText, setInputText] = useState<string>("");
  const dispatch = useTypedDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleBlur = () => {
    setIsFormOpen(false);
  };

  const handleMouseOut = () => {
    if (inputText) {
      dispatch(
        addBoard({
          board: { boardId: uuidv4(), boardName: inputText, lists: [] },
        })
      );

      dispatch(
        addLog({
          logId: uuidv4(),
          logMessage: `게시판 등록 ${inputText}`,
          logAuthor: "User",
          logTimestamp: String(Date.now()),
        })
      );
    }
  };

  return (
    <div className={sideForm}>
      <input
        className={input}
        ref={inputRef}
        type="text"
        placeholder="새로운 게시판 등록하기"
        value={inputText}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <FiCheck className={icon} onMouseOut={handleMouseOut} />
    </div>
  );
};

export default SideForm;
