const Course  = require("../models/course")

exports.createCourse = async (req, res) => {
    
    
    try {
        console.log(req.body);
        const { title, description, category, subcategory, difficultyLevel, skillsCovered,provider, institutionid,location, mode,duration,  amount,ratingAverage,totalEnrollments,  startDate,endDate, certificateProvided,prerequisites,syllabus,thumbnail, isActive,createdAt
        } = req.body;



        const course = await new Course({
            title,
            description,
            category,
            subcategory,
            difficultyLevel,
            skillsCovered,
            provider,
            institutionid,
            location,
            mode,
            duration,
            amount,
            ratingAverage,
            totalEnrollments,
            startDate,
            endDate,
            certificateProvided,
            prerequisites,
            syllabus,
            thumbnail,
            isActive,
            createdAt

        });
        await course.save();
        res.status(201).send("course added successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};

        // get all courses
        exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// get one course
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);

    if (!course) {
      return res.status(404).send("Course not found");
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// update course
exports.updateCourse = async (req, res) => {
  try {
    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedCourse) {
      return res.status(404).send("Course not found");
    }

    res.status(200).json({
      message: "Course updated successfully",
      data: updatedCourse
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};



        
// delete course
exports.deleteCourse = async (req, res) => {
  try {
    const deletedCourse = await Course.findByIdAndDelete(req.params.id);

    if (!deletedCourse) {
      return res.status(404).send("Course not found");
    }

    res.status(200).send("Course deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
