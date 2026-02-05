const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.cookies.token; // ✅ SAME cookie name

    if (!token) {
      return res.status(401).send("Access denied. No token provided");
    }

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.user = decoded.id;  // ✅ THIS WAS MISSING
    req.role = decoded.role;

    next();
  } catch (error) {
    res.status(401).send("Invalid or expired token");
  }
};
