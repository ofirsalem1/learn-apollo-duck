import axios from "axios";
import { ofType } from "redux-observable";
import { map, mergeMap, Observable } from "rxjs";

const updateDuck = async ({ name, color }: Duck) => {
  await axios.post(
    "http://localhost:3001/graphql",
    {
      query: `mutation ($name: String!, $newColor: Colors!) {
              updateDuck(name: $name, newColor: $newColor) {   
                  name
                  color
                }
              }`,
      variables: {
        name: name,
        newColor: color,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const updateDuckEpic = (action$: Observable<any>) =>
  action$.pipe(
    ofType("UPDATE_DUCK_EPIC"),
    mergeMap(({ payload }) =>
      updateDuck({ name: payload.name, color: payload.color }).then(
        () => payload
      )
    ),
    map((payload) => ({
      type: "UPDATE_DUCK",
      payload: { name: payload.name, color: payload.color },
    }))
  );
