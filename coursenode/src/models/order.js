const mongoose = require("mongoose");

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    student: {
      type: Schema.Types.ObjectId,
      ref: "Student",
      required: true
    },

    course: {
      type: Schema.Types.ObjectId,
      ref: "Course",
      required: true
    },

    institution: {
  type: mongoose.Schema.Types.ObjectId,
  ref: "Institution",
  required: true
},


    price: {
      type: Number,
      required: true,
      min: 1
    },

    status: {
      type: String,
      enum: ["pending", "paid", "cancelled"],
      default: "pending"
    },

    isActive: {
      type: Boolean,
      default: true
    }
  },
  { timestamps: true }
);


module.exports = mongoose.model("Order", orderSchema);
