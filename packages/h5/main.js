"use strict";
exports.__esModule = true;
exports.run = void 0;
var vite = require("vite");
var run = function () {
    return new Promise(function (res) {
        vite.createServer().then(function (app) {
            // console.log(app.config);
            app.listen(3000).then(function (runConfig) {
                res(runConfig);
            });
        });
    });
};
exports.run = run;
run();
