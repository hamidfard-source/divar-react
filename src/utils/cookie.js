// const setCookie = tokens => {
//     document.cookie = `accessToken=${tokens.accessToken}; max-age=${1 * 24 * 60 * 60}`
//     document.cookie = `refreshToken=${tokens.refreshToken}; max-age=${30 * 24 * 60 * 60}`
// }

const setCookie = (value, days) => {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    var expires = "; expires=" + date.toGMTString();
  } else {
    var expires = "";
  }
  document.cookie = "accessToken=" + value.accessToken + expires + ";";
  document.cookie = "refreshToken=" + value.refreshToken + expires + ";";
};

const getCookie = (cookieName) => {
  return document.cookie
    .split(";")
    .find((token) => token.trim().split("=")[0] === cookieName)
    ?.split("=")[1];
};

const eraseCookie = () => {
  // return document.cookie.split(";").find((token)=>token.trim()===cookieName)
  setCookie("", -1);
  // document.cookie = "accessToken=" + "" + "; expires=" + (-1 * 24 * 60 * 60 * 1000)
};

export { setCookie, getCookie, eraseCookie };
