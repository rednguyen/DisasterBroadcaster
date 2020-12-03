import ApiServices from "ApiServices";
import axios from "axios";

export default class CommentServices extends ApiServices {
  url = () => `${this.base_url()}/comment`;
}