import ApiServices from "./ApiServices";
import axios from "axios";

export default class DisasterServices extends ApiServices {
  url = () => `${this.base_url()}/disaster`;
}