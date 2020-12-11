import ApiServices from "./ApiServices";

export default class CommentServices extends ApiServices {
  url = () => `${this.base_url()}/comment`;
}