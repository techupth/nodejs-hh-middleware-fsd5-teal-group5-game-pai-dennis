import { Router } from "express";

const assignmentValidation = Router();

assignmentValidation.use(function (req, res, next) {
  if (req.method === "POST" || req.method === "PUT") {
    const content = req.body;
    let messageList = [];
    let check = 0;

    if (content.title.length > 35) {
      messageList.push("Title must not be over 35 characters");
      check = 1;
    }

    if (content.description.length > 150) {
      messageList.push("Description must not exceed 150 characters");
      check = 1;
    }

    if (!Array.isArray(content.categories) || content.categories.length <= 0) {
      messageList.push("Categories must be an array with at least 1 value");
      check = 1;
    }

    if (check === 1) {
      const showText = messageList.reduce((acc, item, index) => {
        acc = acc + item;
        if (index != messageList.length - 1) {
          acc = acc + ", ";
        }
        return acc;
      }, "");

      return res.json({ message: showText });
    }
  }

  next();
});

export default assignmentValidation;
