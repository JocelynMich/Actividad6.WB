"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var usuarios_controller_1 = require("../usuarios/usuarios.controller");
var userRouter = express_1.default.Router();
userRouter.get('/', usuarios_controller_1.userController.getUsers);
userRouter.get('/:id', usuarios_controller_1.userController.getUserById);
exports.default = userRouter;
