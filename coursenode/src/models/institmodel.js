const mongoose = require("mongoose");

const { Schema } = mongoose;

const institutionSchema = new Schema({
  name: { type: String, required: true },
  description: String,
//   institutionType: String,
//   location: String,
//   address: String,
//   country: String,
//   contactNumber: String,
//   email: String,
//   website: String,
//   logo: String,
//   establishedYear: Number,
//   accreditation: String,
//   courses: [{ type: Schema.Types.ObjectId, ref: "Course" }],
//   ratingAverage: { type: Number, default: 0 },
//   totalStudents: { type: Number, default: 0 },
//   isActive: { type: Boolean, default: true },
//   createdAt: { type: Date, default: Date.now }
});

    
    const Institution = mongoose.model("Institution", institutionSchema);
    module.exports = Institution;
    