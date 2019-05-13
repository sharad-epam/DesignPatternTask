import { getFactory, postFactory, updateFactory, deleteFactory } from "./api";
const dataFactory = props => {
  switch (props.type) {
    case "get":
      return getFactory(props);
    case "post":
      return postFactory(props);
    case "put":
      return updateFactory(props);
    case "delete":
      return deleteFactory(props);
    default:
      return Promise.resolve();
  }
};

export const api = props => dataFactory(props);
