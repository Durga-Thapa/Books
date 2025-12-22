import { Book } from "../models/bookModels";

//create
export const createBook = async (req, res) => {
  try {
    const existingBook = await Book.find({ title: req.body.title });
    if (existingBook) {
      return res.status(409).json({ message: "Book title already exists" });
    }

    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//update

export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body);
    res.json(book);
  } catch (error) {
    res.json({ message: error.message });
  }
};
