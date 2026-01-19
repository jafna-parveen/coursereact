const express = require("express");
const router = express.Router();
const courseController = require("../controllers/course");

// CREATE
router.post("/add-course", courseController.createCourse);

// READ
router.get("/courses", courseController.getAllCourses);
router.get("/courses/:id", courseController.getCourseById);

// UPDATE
router.patch("/courses/:id", courseController.updateCourse);

// DELETE
router.delete("/courses/:id", courseController.deleteCourse);

module.exports = router;
