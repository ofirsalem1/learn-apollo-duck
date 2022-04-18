import { useState } from "react";
import { addDuckEpicAction } from "../actions/ducksAction";
import { useDispatch } from "react-redux";

const AddDuck = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState<string>("");
  const [color, setColor] = useState<string>("");

  const handleClick = async () => {
    dispatch(addDuckEpicAction({ name, color }));
  };

  return (
    <tr>
      <td>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQecK5PjyGZuiZI-4rMSgl2QslwfPrJLKgQjQ&usqp=CAU"
          alt=""
        />
      </td>
      <td>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </td>

      <td>
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </td>
      <td>
        <button className="add" onClick={handleClick}>
          ADD
        </button>
      </td>
    </tr>
  );
};

export default AddDuck;
