const express=require("express")
const router=express.Router();
const studentcontroller=require("../controllers/studentcontroller")

// =================================
//          register STUDENT
// =================================
router.post("/register", studentcontroller.registerStudent);


// =================================
//          READ STUDENT
// =================================
router.get('/getstudent/:id',studentcontroller.findStudent)


// =================================
//         UPDATE STUDENT
// =================================
router.put('/updatestudent/:id',studentcontroller.updateStudent)


// =================================
//          DELETE STUDENT
// =================================
router.delete('/deletestudent/:id',studentcontroller.deleteStudent)

// =================================
//          LOGIN STUDENT
// =================================
router.post("/login", studentcontroller.loginStudent);
module.exports =router