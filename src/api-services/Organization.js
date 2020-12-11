import ApiServices from "./ApiServices";

export default class OrganizationServices extends ApiServices {
  url = () => `${this.base_url()}/organization`;
}