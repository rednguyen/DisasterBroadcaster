import ApiServices from "./ApiServices";
import axios from "axios";

export default class ReactionServices extends ApiServices {
  url = () => `${this.base_url()}/reaction`;

  getByUserPost = async (user, post) => {
    try {
      return await axios.get(`${this.url()}/?user=${user}&post=${post}`);
    } catch (error) {
      return this.handleError(error, {});
    }
  };
}