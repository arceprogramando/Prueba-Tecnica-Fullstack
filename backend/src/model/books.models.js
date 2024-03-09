import mongoose from 'mongoose';

const booksCollection = 'books';

const booksSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publication_date: {
    type: Date,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

const ProductsModel = mongoose.model(booksCollection, booksSchema);

export default ProductsModel;
