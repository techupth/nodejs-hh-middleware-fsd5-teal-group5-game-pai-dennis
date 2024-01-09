import express from "express";
import bodyParser from "body-parser";
import assignmentRouter from "./apps/assignments.js";
import logging from "./middlewares/logging.js";
import validateAssignmentData from "./middlewares/assignmentValidation.js";

const app = express();
const port = 4000;

// use middleware

app.use(bodyParser.json());
app.use(logging);
app.use(validateAssignmentData);
app.use("/assignments", assignmentRouter);

app.listen(port, () => {
  console.log(`Server is running at the port ${port}`);
});
