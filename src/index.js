module.exports = function check(str, bracketsConfig) {
    let strArr = str.split("");
    let strArrOriginal = strArr.slice();
    while (strArr.length >= 1) {
        for (let i = 0; i < strArr.length; i++) {
            for (let k = 0; k < bracketsConfig.length; k++) {
                if (strArr[i] == bracketsConfig[k][0]) {
                    if (strArr[i + 1] == bracketsConfig[k][1]) {
                        strArr.splice(i, 2);
                        break;
                    } else if (strArr[i + 1] == undefined) {
                        return false;
                    }
                }
            }
        }
        if (strArr.length == strArrOriginal.length) {
            return false;
        }
        strArrOriginal = strArr.slice();
    }
    if (strArr.length == 0) {
        return true;
    } else {
        return false;
    }
};