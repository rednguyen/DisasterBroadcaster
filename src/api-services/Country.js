import ApiServices from "ApiServices";
import axios from "axios";

export default class CountryServices extends ApiServices {
  url = () => `${this.base_url()}/country`;
}