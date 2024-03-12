import { Router } from 'express';
import BooksModel from '../model/books.models.js';
import formatDate from '../utils/changeDate.js';

const router = Router();

router.get('/', async (_, res) => {
  try {
    const getBooks = await BooksModel.find();
    if (getBooks.length === 0) {
      return res.status(404).json({ message: 'No se encontraron libros' });
    }

    const formattedBooks = getBooks.map((book) => ({
      ...book.toJSON(),
      publicationDate: formatDate(book.publicationDate),
    }));

    return res.status(200).json(formattedBooks);
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

router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, author, publicationDate, category } = req.body;
    const updates = {};

    if (title) {
      updates.title = title;
    }
    if (author) {
      updates.author = author;
    }
    if (publicationDate) {
      updates.publicationDate = publicationDate;
    }
    if (category) {
      updates.category = category;
    }

    const updatedBook = await BooksModel.findByIdAndUpdate(id, updates, { new: true });

    if (!updatedBook) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }

    return res.status(200).json({ message: 'Libro actualizado exitosamente', book: updatedBook });
  } catch (error) {
    return res.status(500).json({ error: 'Error al actualizar el libro', message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await BooksModel.findByIdAndDelete(id);

    if (!deletedBook) {
      return res.status(404).json({ error: 'Libro no encontrado' });
    }

    return res.status(200).json({ message: 'Libro eliminado correctamente', book: deletedBook });
  } catch (error) {
    return res.status(500).json({ error: 'Error al eliminar el libro', message: error.message });
  }
});

export default router;
