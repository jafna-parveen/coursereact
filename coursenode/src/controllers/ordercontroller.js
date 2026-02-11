const Order = require("../models/order");

exports.createOrder = async (req, res) => {
  try {
    const { student, course, institution,price, status, action } = req.body;

    const order = await Order.create({
      student,
      course,
      institution,
      price,
      status,
      action
    });
    
     const populatedOrder = await Order.findById(order._id)
      .populate("student", "studentname -_id")
  .populate("course", "courseName -_id")
      .populate("institution", "name -_id")

    res.status(201).json({
      success: true,
      data:  populatedOrder
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
exports.getInstitutionOrders = async (req, res) => {
  try {
    const institutionId = req.params.id;

    const orders = await Order.find({
      institution: institutionId,
      isActive: true
    })
      .populate("student", "studentname -_id")
      .populate("course", "courseName -_id");

    res.status(200).json({
      success: true,
      totalOrders: orders.length,
      data: orders
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ isActive: true });

    res.status(200).json({
      success: true,
      count: orders.length,
      data: orders
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);

    if (!order || !order.isActive) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found"
      });
    }

    res.status(200).json({
      success: true,
      data: order
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

