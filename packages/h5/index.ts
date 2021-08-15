import * as vite from "vite";
const run = () => {
  return new Promise((res) => {
    vite.createServer().then((app) => {
      // console.log(app.config);
      app.listen(3000).then((runConfig) => {
        res(runConfig);
      });
    });
  });
};
export { run };
