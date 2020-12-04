import ApiServices from "./ApiServices";
import axios from "axios";

export default class PostServices extends ApiServices {
  url = () => `${this.base_url()}/post`;

  
  filterPosts = (response) => {
    return this.handleResponse(
      response,
      filter(
        response.data,
        ({ content }) =>
          content.length > 0
      )
    );
  };

  getAllPosts = async () => {
    try {
      return this.filterPosts(await axios.get(`${this.url()}/`));
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  // Get posts with pagination
  getPosts = async (page) => {
    try {
      return this.filterPosts(await axios.get(`${this.url()}/?page=${page}`));
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  // Get all posts of the logged in user
  getUserPosts = async () => {
    try {
      return this.filterPosts(
        await axios.get(`${this.url()}/?personal`)
      );
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  // Get posts by country
  getCountryPosts = async (country_id) => {
    try {
      return this.filterPosts(
        await axios.get(`${this.url()}/?country=${country_id}`)
      );
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  // toggleUpvote = async (userId, contentId) => {
  //   try {
  //     return await axios.patch(`${this.url()}/${contentId}/?upvote=${userId}`);
  //   } catch (error) {
  //     return this.handleError(error, {});
  //   }
  // };
}