"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const http_1 = require("http");
const path_1 = require("path");
function UI(options, context = process.cwd()) {
    return __awaiter(this, void 0, void 0, function* () {
        const { port = 3000 } = options || {};
        http_1.createServer(function (req, res) {
            const url = req.url;
            const indexPath = path_1.join(__dirname, "../../", "kunpeng-ui", "dist/index.html");
            fs_1.readFile(indexPath, function (err, data) {
                if (err) {
                    res.writeHead(404, {
                        "content-type": 'text/html;charset="utf-8"',
                    });
                    res.write("<h1>404错误</h1><p>你要找的页面不存在</p>");
                    res.end();
                }
                else {
                    res.writeHead(200, {
                        "content-type": 'text/html;charset="utf-8"',
                    });
                    res.write(data);
                    res.end();
                }
            });
        }).listen(port);
    });
}
exports.default = UI;
