import fs from "fs/promises";

export default async function logging(req, res, next) {
  try {
    const text = `\nIP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl} `;

    await fs.appendFile("data/logsfile.txt", text);
  } catch {
    await fs.appendFile(
      "data/logsfile.txt",
      `\nLogging error on IP: ${req.ip}, Method: ${req.method}, Endpoint: ${req.originalUrl}`
    );
  }
  next();
}
