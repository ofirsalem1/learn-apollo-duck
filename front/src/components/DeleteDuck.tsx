import axios from "axios";
import { useDispatch } from "react-redux";
import { deleteDuck } from "../actions/ducksAction";

interface IDeleteDuckProps {
  duckName: string;
}

const DeleteDuck = ({ duckName }: IDeleteDuckProps) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    dispatch(deleteDuck(duckName));
  };
  return (
    <button className="delete" onClick={handleClick}>
      DELETE
    </button>
  );
};

export default DeleteDuck;
