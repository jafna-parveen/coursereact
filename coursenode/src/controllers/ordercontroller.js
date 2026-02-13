const Order = require("../models/order");

// ================= CREATE ORDER =================
exports.createOrder = async (req, res) => {
  try {
    const { student, course, institution, price, status } = req.body;

    const order = await Order.create({
      student,
      course,
      institution,
      price,
      status
    });

    const populatedOrder = await Order.findById(order._id)
      .populate("student", "studentname -_id")
      .populate("course", "courseName -_id")
      .populate("institution", "name -_id");

    res.status(201).json({
      success: true,
      data: populatedOrder
    });

  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// ================= GET INSTITUTION ORDERS =================
exports.getInstitutionOrders = async (req, res) => {
  try {
    const institutionId = req.params.id;

    const orders = await Order.find({
      institution: institutionId,
      isActive: true
    })
      .populate("student", "studentname -_id")
      .populate("course", "courseName -_id")
      .sort({ createdAt: -1 });

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

// ================= GET ALL =================
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find({ isActive: true })
      .populate("student", "studentname -_id")
      .populate("course", "courseName -_id")
      .populate("institution", "name -_id")
      .sort({ createdAt: -1 });

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

// ================= GET SINGLE =================
exports.getSingleOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("student", "studentname -_id")
      .populate("course", "courseName -_id")
      .populate("institution", "name -_id");

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

// ================= UPDATE =================
exports.updateOrder = async (req, res) => {
  try {
    const { status, price } = req.body;

    const order = await Order.findByIdAndUpdate(
      req.params.id,
      { status, price },
      { new: true, runValidators: true }
    )
      .populate("student", "studentname -_id")
      .populate("course", "courseName -_id");

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
