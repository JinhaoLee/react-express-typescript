import app from "./app";

// port is now available to the Node.js runtime
// as if it were an environment variable
const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
  console.log("\x1b[36m%s\x1b[0m", "Express server listening on port " + PORT);
});
