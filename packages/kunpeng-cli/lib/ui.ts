import { readFile } from "fs";
import { createServer } from "http";
import { join } from "path";

type Options = {
  host: string;
  port: number;
};

export default async function UI(options: Options, context = process.cwd()) {
  const { port = 3000 } = options || {};
  createServer(function (req, res) {
    const url = req.url;
    const indexPath = join(
      __dirname,
      "../../",
      "kunpeng-ui",
      "dist/index.html"
    );
    readFile(indexPath, function (err, data) {
      if (err) {
        res.writeHead(404, {
          "content-type": 'text/html;charset="utf-8"',
        });
        res.write("<h1>404错误</h1><p>你要找的页面不存在</p>");
        res.end();
      } else {
        res.writeHead(200, {
          "content-type": 'text/html;charset="utf-8"',
        });
        res.write(data);
        res.end();
      }
    });
  }).listen(port);
}
