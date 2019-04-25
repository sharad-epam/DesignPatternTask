import getFactory from "./api";
class dataFactory {
  constructor(props) {
    if (props.type === "get") {
      return new getFactory(props);
    }
  }
}

export const api = props => new dataFactory(props);
