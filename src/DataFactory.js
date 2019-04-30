import { getFactory, postFactory, updateFactory, deleteFactory } from "./api";
const dataFactory = props => {
  switch (props.type) {
    case "get":
      return new getFactory(props);
    case "post":
      return new postFactory(props);
    case "put":
      return new updateFactory(props);
    case "delete":
      return new deleteFactory(props);
    default:
      return Promise.resolve();
  }
};

export const api = props => new dataFactory(props);
