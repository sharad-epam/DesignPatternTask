import "./styles/main.scss";
import { createNews } from "./view";

const requestWrapper = ({ url, type, body }) => {
  let config = {
    method: type,
    url
  };
  if (body) {
    body = JSON.stringify(body);
    config = {
      ...config,
      body
    };
  } else {
    config = {
      ...config
    };
  }
  return fetch(url, config)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(error =>
      import("./ErrorSingleton").then(module =>
        module.chainPromiseError.error(
          "Error trying to fetch News Data!" + error.message
        )
      )
    );
};
export const getFactory = props =>
  requestWrapper({ url: props.proxy.url, type: "GET" }).then(data =>
    createNews(data)
  );

export const postFactory = props =>
  requestWrapper({ url: props.proxy.url, type: "POST", body });

export const updateFactory = props =>
  requestWrapper({ url: props.proxy.url, type: "PUT", body });

export const deleteFactory = props =>
  requestWrapper({ url: props.proxy.url, type: "DELETE", body });
