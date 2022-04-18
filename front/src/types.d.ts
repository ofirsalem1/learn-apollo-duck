interface Duck {
  name: string;
  color: string;
}

interface IAction {
  type: string;
  payload?: any;
}
interface State {
  ducks: Duck[];
}
