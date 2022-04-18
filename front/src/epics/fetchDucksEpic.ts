import { ofType } from "redux-observable";
import { map, mergeMap, Observable } from "rxjs";
import axios from "axios";

const getData = async () => {
  const res = await axios.post("http://localhost:3001/graphql", {
    query: `
              query  {
                getAllDucks {
                    name
                    color 
                  } 
              }        
              `,
  });
  return res;
};
export const fetchDucksEpic = (action$: Observable<any>): Observable<any> =>
  action$.pipe(
    ofType("FETCH_DUCKS_EPIC"),
    mergeMap(getData),
    map((res) => ({
      type: "GET_DUCKS_FROM_DB",
      payload: { ducks: res.data.data.getAllDucks },
    }))
  );
