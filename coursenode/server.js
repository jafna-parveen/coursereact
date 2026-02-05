const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser"); // ✅ ADD THIS
const cors = require("cors")

require("dotenv").config();
require("./src/config/db");


const course = require("./src/routes/course");
const institution = require("./src/routes/instirouter");
const role = require("./src/routes/role");
const subcat = require("./src/routes/subcategory");

const app = express();
const port = process.env.PORT || 5000;
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));

app.use(express.json());
app.use(cookieParser()); 

/*  SERVE UPLOADED IMAGES */
app.use(
  "/uploads",
  express.static(path.join(__dirname, "src/uploads"))
);

/*  API ROUTES */
app.use("/api", course);
app.use("/api", institution);
app.use("/api", role);
app.use("/api", subcat);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
