import ApiServices from "./ApiServices";
import axios from "axios";

export default class NewsServices extends ApiServices {
  url = () => `${this.base_url()}/news`;

  // Get news with pagination
  getNewsPage = async (page) => {
    try {
      return await axios.get(`${this.url()}/?page=${page}`);
    } catch (error) {
      return this.handleError(error, []);
    }
  };

  // Get news by country
  getCountryNews = async (country_id) => {
    try {
      return await axios.get(`${this.url()}/?country=${country_id}`);
    } catch (error) {
      return this.handleError(error, []);
    }
  };
}