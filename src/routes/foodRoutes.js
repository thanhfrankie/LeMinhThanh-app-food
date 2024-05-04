import express from "express";
import {
  addRate,
  createFood,
  getFood,
  getLikeOfRestaurant,
  getLikeOfUser,
  getRateOfRestaurant,
  getRateOfUser,
  likeRestaurant,
} from "../controllers/foodController.js";
import { protect } from "../controllers/tokenController.js";

const foodRouter = express.Router();

foodRouter.get("/get-food", getFood);
foodRouter.post("/create-food", createFood);
// XỬ LÝ LIKE NHÀ HÀNG ----------------------
foodRouter.post("/like", protect, likeRestaurant); // Xử lý like nhà hàng (like, unlike)

foodRouter.get("/getLikeOfRestaurant/:res_id", getLikeOfRestaurant); // lấy danh sách like theo nhà hàng
foodRouter.get("/getLikeOfUser/:user_id", getLikeOfUser); // lấy danh sách like theo user

// XỬ LÝ ĐÁNH GIÁ NHÀ HÀNG ----------------------
foodRouter.post("/addRate", protect, addRate); // Xử lý thêm đánh giá
foodRouter.get("/getRateOfRestaurant/:res_id", getRateOfRestaurant); // lấy danh sách đánh giá theo nhà hàng
foodRouter.get("/getRateOfUser/:user_id", getRateOfUser); // lấy danh sách đánh giá theo user
export default foodRouter;
// yarn sequelize-auto -h localhost -d db_food1 -u root -x 1234 -p 3306 --dialect mysql -o ./src/models -l esm
