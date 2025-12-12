const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");
const validate = require("../middlewares/validate");
const { createUserSchema, updateUserSchema } = require("../validations/user.validation");

// Create user
router.post("/create", validate(createUserSchema), controller.createUser);

// List all users
router.get("/list", controller.getUsers);

// Get user by ID
router.get("/:id", controller.getUser);

// Update user
router.put("/:id", validate(updateUserSchema), controller.updateUser);

// Delete user
router.delete("/:id", controller.deleteUser);

module.exports = router;
