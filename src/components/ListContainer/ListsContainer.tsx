import { FC } from "react";
import { IList } from "../../types";
import List from "../List/List";
import ActionButton from "../ActionButton/ActionButton";
import { listsConatiner } from "./ListsContainer.css";

type TListContainerProps = {
  boardId: string;
  lists: IList[];
};

const ListContainer: FC<TListContainerProps> = ({ lists, boardId }) => {
  return (
    <div className={listsConatiner}>
      {lists.map((list) => (
        <List key={list.listId} list={list} boardId={boardId} />
      ))}
      <ActionButton boardId={boardId} listId={""} list />
    </div>
  );
};

export default ListContainer;
