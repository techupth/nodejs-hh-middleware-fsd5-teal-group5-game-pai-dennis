export default function validateAssignmentData(req, res, next) {
  const { title, description, categories } = req.body;
  if (req.method === "POST" || req.method === "PUT") {
    // title มีความยาวไม่เกิน 35 ตัวอักษร
    if (title.length > 35) {
      return res.json({
        message: `Title must not be over 35 characters`,
      });
    }
    // description มีความยาวไม่เกิน 35 ตัวอักษร
    if (description.length > 150) {
      return res.json({
        message: `Description must not be exceeded 150 characters`,
      });
    }
    // Categories ไม่ใช่ Array หรือเป็น Array ที่เป็น Empty Array
    if (
      !Array.isArray(categories) ||
      categories.length === 0 ||
      categories[0].length === 0
    ) {
      return res.json({
        message: `Categories must be an array with at least 1 value`,
      });
    } else {
      next();
    }
  }
  next();
}
