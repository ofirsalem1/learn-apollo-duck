import axios from "axios";
import { ofType } from "redux-observable";
import { map, mergeMap, Observable, tap } from "rxjs";

const deleteDuck = async (duckName: string) => {
  await axios.post(
    "http://localhost:3001/graphql",
    {
      query: `mutation ($name: String!) {
                removeDuck(name: $name) {   
                  name
                  color
                }
              }`,
      variables: {
        name: duckName,
      },
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

export const deleteDuckEpic = (action$: Observable<any>) =>
  action$.pipe(
    ofType("DELETE_DUCK_EPIC"),
    tap((action) => console.log(action)),
    mergeMap(({ payload }) => deleteDuck(payload.duckName).then(() => payload)),
    map((payload) => ({
      type: "DELETE_DUCK",
      payload: { duckName: payload.duckName },
    }))
  );
