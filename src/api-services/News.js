import ApiServices from "./ApiServices";
import axios from "axios";

export default class NewsServices extends ApiServices {
  url = () => `${this.base_url()}/news`;

  // Check if news's text length is not 0
  filterNews = (response) => {
    return this.handleResponse(
      response,
      filter(
        response.data,
        ({ content }) =>
          content.length > 0
      )
    );
  };

  getAllNews = async () => {
    try {
      return this.filterNews(await axios.get(`${this.url()}/`));
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  // Get news with pagination
  getNews = async (page) => {
    try {
      return this.filterNews(await axios.get(`${this.url()}/?page=${page}`));
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  // Get news by country
  getCountryNews = async (country_id) => {
    try {
      return this.filterNews(
        await axios.get(`${this.url()}/?country=${country_id}`)
      );
    } catch (error) {
      return this.handleError(error, []);
    }
  };
}