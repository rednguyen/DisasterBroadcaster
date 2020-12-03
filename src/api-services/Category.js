import ApiServices from "ApiServices";
import axios from "axios";

export default class CategoryServices extends ApiServices {
  url = () => `${this.base_url()}/category`;
}