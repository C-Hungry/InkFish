import config from "../config/config";
import { getToken } from "../libs/util";

var ApiServicePlugin = {};

ApiServicePlugin.install = function (Vue) {
  Vue.prototype.$service = {
    get: function (url, data) {
      url = config.baseUrl + url;
      return this.fetch(url, data, "GET", true);
    },
    post: function (url, data) {
      url = config.baseUrl + url;
      return this.fetch(url, data, "POST", true);
    },
    fetch: (url, data, type, hasError) => {
      type = type.toUpperCase();
      return new Promise((resolve, reject) => {
        let dataStr = "";
        let sendData = {};
        Object.keys(data).forEach(key => {
          if (typeof (data[key]) == "object") {
            sendData = data[key];
          }
          else {
            dataStr += key + "=" + data[key] + "&";
          }

          if (dataStr !== "") {
            dataStr = dataStr.substring(0,dataStr.lastIndexOf("&"));
            url = url + "?" + dataStr;
          }

          let requestObj;
          if (window.XMLHttpRequest) {
            requestObj = new XMLHttpRequest();
          }
          else {
            requestObj = new ActiveXObject();
          }

          const token = getToken("token");
          const uid = getToken("uid"); 

          requestObj.open(type, url, true);
          requestObj.setRequestHeader("Accept","application/json");
          requestObj.setRequestHeader("Content-type","application/json");
          requestObj.setRequestHeader("Token",token);
          requestObj.setRequestHeader("Uid",uid);
          requestObj.send(sendData);
          
          requestObj.onreadystatechange = () => {
            if (requestObj.readyState == 4) {
              let obj = requestObj.response;
              if (typeof obj !== "obj") {
                obj = JSON.stringify(obj);
              }
              if (requestObj.status == 200) {
                resolve(obj);
              }
              else {
                console.log(obj);
                reject(obj);
              }
            }
          }

        })
      });
    }
  }
}

export default ApiServicePlugin;