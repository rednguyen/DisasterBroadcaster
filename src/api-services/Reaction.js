import ApiServices from "ApiServices";
import axios from "axios";

export default class ReactionServices extends ApiServices {
  url = () => `${this.base_url()}/reaction`;
}