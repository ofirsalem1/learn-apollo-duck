import { createStore, applyMiddleware } from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { rootReducer } from "./reducers/rootReducer";
import { fetchDucksEpic } from "./epics/fetchDucksEpic";
import { addDuckEpic } from "./epics/addDuckEpic";
import { deleteDuckEpic } from "./epics/deleteDuckEpic";
import { updateDuckEpic } from "./epics/updateDuckEpic";
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer, applyMiddleware(epicMiddleware));

const rootEpic = combineEpics(
  fetchDucksEpic,
  addDuckEpic,
  deleteDuckEpic,
  updateDuckEpic
);

epicMiddleware.run(rootEpic);

export { store };
