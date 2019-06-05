import app from "./app";
import fs from "fs";
import https from "https";

// port is now available to the Node.js runtime
// as if it were an environment variable
const PORT = process.env.SERVER_PORT;
const privateKey = fs.readFileSync(__dirname + "/../server.key", "utf8");
const certificate = fs.readFileSync(__dirname + "/../server.crt", "utf8");
const credentials = { key: privateKey, cert: certificate };

https.createServer(credentials, app).listen(PORT, () => {
  console.log(
    "\x1b[36m%s\x1b[0m",
    `Server listening on https://localhost:${PORT} \u{1F602}`
  );
});
