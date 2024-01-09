import fs from "fs/promises";

export default function (req, res, next) {
  const data = req.body;

  !(data.title && data.categories && data.description)
    ? res.json({
        message:
          "Make sure your input include title,description and categories",
      })
    : data.title.length > 35
    ? res.json({ message: "Title must not be over 35 characters" })
    : data.description.length > 150
    ? res.json({ message: "Description must not exceed 150 characters" })
    : !Array.isArray(data.categories) || data.categories.length == 0
    ? res.json({
        message: "Categories must be an array with at least 1 value",
      })
    : null;

  next();
}
