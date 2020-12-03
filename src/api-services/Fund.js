import ApiServices from "ApiServices";
import axios from "axios";

export default class FundServices extends ApiServices {
  url = () => `${this.base_url()}/fund`;
}