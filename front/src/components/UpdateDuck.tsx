import { useDispatch } from "react-redux";
import { updateDuck } from "../actions/ducksAction";

interface IUpdateDuckProps {
  duckName: string;
}

const UpdateDuck = ({ duckName }: IUpdateDuckProps) => {
  const dispatch = useDispatch();

  const handleClick = async () => {
    const selectedColor = prompt("Enter new color");
    dispatch(updateDuck(duckName, selectedColor));
  };

  return (
    <button className="update" onClick={handleClick}>
      UPDATE{" "}
    </button>
  );
};

export default UpdateDuck;
