import ApiServices from "./ApiServices";
import axios from "axios";

export default class PostServices extends ApiServices {
  url = () => `${this.base_url()}/post`;

  // Get posts with pagination
  getPostsPage = async (page) => {
    try {
      return await axios.get(`${this.url()}/?page=${page}`);
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  // Get posts by country
  getCountryPosts = async (country_id) => {
    try {
      return await axios.get(`${this.url()}/?country=${country_id}`);
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  getUserPosts = async (token) => {
    try {
      return await axios.post(`${this.url()}/own_post/`, token);
    } catch (error) {
      return this.handleError(error, {});
    }
  }
}