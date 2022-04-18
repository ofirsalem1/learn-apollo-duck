import { ofType } from "redux-observable";
import { map, mergeMap, Observable } from "rxjs";
import axios from "axios";

const addDuck = async ({ name, color }: Duck) => {
  await axios.post(
    "http://localhost:3001/graphql",
    {
      query: `mutation ($name: String!, $color: Colors!) {
              addDuck(name: $name, color: $color) {   
                name
                color
              }
            }`,
      variables: {
        name: name,
        color: color,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const addDuckEpic = (actions$: Observable<any>): Observable<any> =>
  actions$.pipe(
    ofType("ADD_DUCK_EPIC"),
    mergeMap(({ payload }) => addDuck(payload.duck).then(() => payload)),
    map((payload: any) => ({
      type: "ADD_DUCK",
      payload: { duck: payload.duck },
    }))
  );
