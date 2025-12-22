import express from "express"
import { bookListing, createBook, getBookById, updateBook } from "../Controllers/bookController.js"

const router=express.Router();

router.post("/", createBook)
router.post('/:id', updateBook)
router.post('/:id', getBookById)
router.get('/', bookListing)

export default router;