import { api_domain } from "./settings";
import axios from "axios";

export default class ApiServices {
  base_url = () => `${api_domain}`;

  url = () => `${this.base_url()}PLEASE_OVERRIDE_THIS`;

  list = async () => {
    try {
      return await axios.get(`${this.url()}/`);
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  create = async (postBody) => {
    try {
      return await axios.post(`${this.url()}/`, postBody);
    } catch (error) {
      return this.handleError(error, {});
    }
  };

  retrieve = async (id) => {
    try {
      return await axios.get(`${this.url()}/${id}/`);
    } catch (error) {
      return this.handleError(error, {});
    }
  };

  partial_update = async (id, patchBody) => {
    try {
      return await axios.patch(`${this.url()}/${id}/`, patchBody);
    } catch (error) {
      return this.handleError(error, {});
    }
  };

  destroy = async (id) => {
    try {
      return await axios.delete(`${this.url()}/${id}/`);
    } catch (error) {
      return this.handleError(error, {});
    }
  };

  handleResponse = (response, data) => {
    return {
      ...response,
      data,
    };
  };

  handleError = (error, data) => {
    if (error.response) {
      console.log(error.response.data);
      return {
        ...error.response,
        data,
      };
    } else {
      console.log(error);
      return {
        data,
      };
    }
  };
}
