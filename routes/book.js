import express from "express";
import * as bookController from "../controllers/book.js";

const router = express.Router();

router.get("/",bookController.getAllBooks)
router.get("/:id",bookController.getBookById)
router.delete("/",bookController.deleteBook)
router.put("/",bookController.updateBook)
router.post("/",bookController.addBook)

export default router;