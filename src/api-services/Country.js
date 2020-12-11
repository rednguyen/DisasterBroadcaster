import ApiServices from "./ApiServices";

export default class CountryServices extends ApiServices {
  url = () => `${this.base_url()}/country`;
}