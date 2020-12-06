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

  // Get all posts of the logged in user
  getUserPosts = async () => {
    try {
      return await axios.get(`${this.url()}/?personal`);
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
}