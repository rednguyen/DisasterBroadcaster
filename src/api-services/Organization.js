import ApiServices from "ApiServices";
import axios from "axios";

export default class OrganizationServices extends ApiServices {
  url = () => `${this.base_url()}/organization`;
}