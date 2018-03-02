let util = {

};
util.title = function (title) {
    window.document.title = title;
};

export default util;

/**
 * 存储用户信息
 */
export const saveUserInfo = info => {
    if (typeof info !== "string") {
        info = JSON.stringify(info);
    }
    window.sessionStorage.setItem("userInfo",info);
}

/**
 * 获取用户信息
 */
export const getUserInfo = info => {
    return JSON.stringify(window.sessionStorage.getItem("userInfo"));
}

/**
 * 删除用户存储数据
 */
export const removeUserInfo = info => {
    window.sessionStorage.removeItem("userInfo")
}

/**
 * 获取用户信息中的token
 */
export const getToken = key => {
    if (document.cookie.length) {
        let start = document.cookie.indexOf(key + "=");
        if (start != -1) {
            start = start + key.length + 1;
            let end = document.cookie.indexOf(";",start);
            if (end == -1) {
                end = document.cookie.length;
            }
            return unescape(document.cookie.substring(start,end));
        }
    }
    else {
        return "";
    }
}