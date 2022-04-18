import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import AddDuck from "./AddDuck";
import DeleteDuck from "./DeleteDuck";
import FilterDucks from "./FilterDucks";
import UpdateDuck from "./UpdateDuck";

function App() {
  const ducksArr = useSelector((state: State) => state.ducks);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "FETCH_DUCKS_EPIC" });
  }, []);

  return (
    <div className="App">
      <h1 className="header"> Ducks List</h1>
      <FilterDucks />
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Color</th>
            <th>Control</th>
          </tr>
        </thead>
        <tbody>
          {ducksArr &&
            ducksArr.map((duck: Duck, i: number) => (
              <tr key={i}>
                <td>
                  <img
                    src="https://st.depositphotos.com/3141391/4001/v/600/depositphotos_40012049-stock-illustration-rubber-duck.jpg"
                    alt=""
                  />
                </td>
                <td>{duck.name}</td>
                <td>{duck.color}</td>
                <td>
                  <DeleteDuck duckName={duck.name} />
                  <UpdateDuck duckName={duck.name} />
                </td>
              </tr>
            ))}
          <AddDuck />
        </tbody>
      </table>
    </div>
  );
}

export default App;
