import Axios from "axios";
import { RestUrls } from "./URLs";

export class RestDataSource {
    
    getData = (dataType) => this.sendRequest("get", RestUrls[dataType]);

    sendRequest = (method, url) => Axios.request({method, url});
}
