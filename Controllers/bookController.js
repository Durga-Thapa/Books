
//create 
export const CreateBook=async(req, res)=>{
try {
    const book=await Book.create(req.body)
    res.status(201).json(book)
} catch (error) {
    if (error.code===11000){
        return res.status(400).json({
            message:"Book title already exists"
        })
    }
    res.status(500).json({message:error.message})
}
}

