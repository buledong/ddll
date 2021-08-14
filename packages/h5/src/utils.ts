import parser from "ua-parser-js";
const uaParse = (() => {
  // try {
  const ua = navigator.userAgent;
  return parser(ua);
  // } catch {
  //   return {};
  // }
})();
const browserName = uaParse?.browser?.name;
const browserVersion = uaParse?.browser?.version;
export { uaParse, browserName, browserVersion };
