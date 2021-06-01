var express = require('express');
var router = express.Router();
var commonCtrl = require("../controllers/commonCtrl")

// app.route('/tasks')
//     .get(todoList.list_all_tasks)
//     .post(todoList.create_a_task);
router.get("/",commonCtrl.HomePage);

router.get("/signup",commonCtrl.signupPage);
// router.post("/signup",commonCtrl.addAction);

router.post("/addAction",commonCtrl.addAction);
router.get("/listUser" , commonCtrl.listUserPage);
router.get("/delete/:userId",commonCtrl.deleteUser)

module.exports= router;