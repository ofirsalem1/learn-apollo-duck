const initialState: State = {
  ducks: [],
};

const rootReducer = (state: State = initialState, action: IAction) => {
  switch (action.type) {
    case "GET_DUCKS_FROM_DB":
      return { ducks: action.payload.ducks };
    case "ADD_DUCK":
      return { ducks: [...state.ducks, action.payload.duck] };
    case "DELETE_DUCK":
      const filteredDucks = state.ducks.filter(
        (duck: Duck) => duck.name !== action.payload.duckName
      );
      return { ducks: filteredDucks };
    case "UPDATE_DUCK":
      const duckIndex = state.ducks.findIndex(
        (duck: Duck) => duck.name === action.payload.name
      );
      state.ducks[duckIndex].color = action.payload.color;
      return { ducks: [...state.ducks] };
    default:
      return state;
  }
};

export { rootReducer };
