const addDuckEpicAction = (duck: Duck) => {
  return {
    type: "ADD_DUCK_EPIC",
    payload: { duck },
  };
};

const deleteDuck = (duckName: string) => {
  return {
    type: "DELETE_DUCK_EPIC",
    payload: { duckName },
  };
};

const updateDuck = (name: string, color: string | null) => {
  return {
    type: "UPDATE_DUCK_EPIC",
    payload: { name, color },
  };
};
export { addDuckEpicAction, deleteDuck, updateDuck };
