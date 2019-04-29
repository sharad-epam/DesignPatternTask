import { getFactory, postFactory, updateFactory, deleteFactory } from "./api";
class dataFactory {
  constructor(props) {
    if (props.type === "get") {
      return new getFactory(props);
    } else if (props.type === "post") {
      return new postFactory(props);
    } else if (props.type === "put") {
      return new updateFactory(props);
    } else if (props.type === "delete") {
      return new deleteFactory(props);
    }
  }
}

export const api = props => new dataFactory(props);
