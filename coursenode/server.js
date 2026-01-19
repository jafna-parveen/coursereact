const express = require("express");
const path = require("path");

require("dotenv").config();
require("./src/config/db");

const course = require("./src/routes/course");
const institution = require("./src/routes/instirouter");
const role = require("./src/routes/role");
const subcat = require("./src/routes/subcategory");

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

/* ✅ SERVE UPLOADED IMAGES */
app.use(
  "/uploads",
  express.static(path.join(__dirname, "src/uploads"))
);

/* ✅ API ROUTES */
app.use("/api", course);
app.use("/api", institution);
app.use("/api", role);
app.use("/api", subcat);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
