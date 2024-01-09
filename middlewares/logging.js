import fs from "fs/promises";

async function logging(req, res, next) {
  try {
    const text = `IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}\n`;
    await fs.appendFile("logs.txt", text);
    console.log(text);
  } catch {
    await fs.appendFile(
      "logs.txt",
      `\nLogging Error on IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`
    );
  }
  next();
}

export default logging;
