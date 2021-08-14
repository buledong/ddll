import parser from "ua-parser-js";
const plat = (() => {
  const ua = navigator.userAgent;
  return parser(ua);
})();
export { plat };
