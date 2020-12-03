import ApiServices from "ApiServices";
import axios from "axios";

export default class UserServices extends ApiServices {
  url = () => `${this.base_url()}/user`;

  // Sign Up is the parent's create function, this.url of child is used with that

  login = async (username, password) => {
    try {
      // user-authenticate
      return await axios.post(`${this.url()}-authenticate/`, {
        username: username,
        password: password,
      });
    } catch (error) {
      return this.handleError(error, {});
    }
  };

  logout = async () => {
    try {
      return await axios.post(`${this.base_url()}/logout/`);
    } catch (error) {
      return this.handleError(error, {});
    }
  };

  // postBody has email and answer like in APIs (SS4)
  passwordReset = async (postBody) => {
    try {
      return await axios.post(`${this.base_url()}/password-reset/`, postBody);
    } catch (error) {
      return this.handleError(error, {});
    }
  };
}

