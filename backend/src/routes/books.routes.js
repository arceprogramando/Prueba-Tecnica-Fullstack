import { Router } from 'express';
import BooksModel from '../model/books.models.js';

const router = Router();

router.get('/', async (_, res) => {
  try {
    const getBooks = await BooksModel.find();
    if (getBooks.length === 0) {
      return res.status(404).json({ message: 'No se encontraron libros' });
    }
    return res.status(200).json(getBooks);
  } catch (error) {
    return res.status(500).json({ error: 'Error al traer los libros' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { title, author, publicationDate, category } = req.body;

    if (!title) {
      return res.status(400).json({ error: 'Falta el título del libro' });
    }
    if (!author) {
      return res.status(400).json({ error: 'Falta el autor del libro' });
    }
    if (!publicationDate) {
      return res.status(400).json({ error: 'Falta la fecha de publicación del libro' });
    }
    if (!category) {
      return res.status(400).json({ error: 'Falta la categoría del libro' });
    }

    const newBook = await BooksModel.create(req.body);

    return res.status(201).json({ message: 'Libro creado exitosamente', book: newBook });
  } catch (error) {
    return res.status(500).json({ error: 'Error al crear el libro', message: error.message });
  }
});

export default router;