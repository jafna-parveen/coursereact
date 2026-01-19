const Institution = require("../models/institmodel");
exports.createInsti = async (req, res) => {
     
    try {
        console.log(req.body);
        const {institutionid,name,description,institutionType,location,address,country,contactNumber,email,website,logo,establishedYear,accreditation,courses,ratingAverage,totalStudents,isActive,createdAt} = req.body;
        const insti = await new Institution({
            institutionid,name,description,institutionType,location,address,country,contactNumber,email,website,logo,establishedYear,accreditation,courses,ratingAverage,totalStudents,isActive,createdAt});
        await insti.save();
        res.status(201).send("institution  added successfully");
    } catch (error) {
        res.status(500).send(error.message);
    }
};
 // get all courses
        exports.getAllInsti = async (req, res) => {
  try {
    const institution = await Institution.find();
    res.status(200).json(institution);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// get one course
exports.getInstiById = async (req, res) => {
  try {
    const institution = await Institution .findById(req.params.id);

    if (!course) {
      return res.status(404).send("insti not found");
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
// update course
exports.updateInsti = async (req, res) => {
  try {
    const updatedinstitution = await Institution.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedinstitution) {
      return res.status(404).send("insti not found");
    }

    res.status(200).json({
      message: "insti updated successfully",
      data: updatedinstitution
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
};



        
// delete course
exports.deleteInsti = async (req, res) => {
  try {
    const deletedInsti = await Institution.findByIdAndDelete(req.params.id);

    if (!deletedInsti) {
      return res.status(404).send("Insti not found");
    }

    res.status(200).send("insti deleted successfully");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
