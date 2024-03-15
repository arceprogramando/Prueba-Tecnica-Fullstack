import { useState } from 'react';
import { postBookRequest } from '../../api/tasks.api';
import { Toaster, toast } from 'sonner';

export const CreateBookForm = ({ onAddBook }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    publicationDate: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await postBookRequest(formData);
      if (response.success) {
        const newBook = { ...formData };
        onAddBook(newBook);
        setFormData({
          title: '',
          author: '',
          category: '',
          publicationDate: '',
        });
        toast.success('Libro Creado Satisfactoriamente');
      } else if (response.error === '409') {
        toast.error('No se puede enviar un libro con título repetido');
      } else {
        toast.error('Error al enviar los datos');
      }
    } catch (error) {
      toast.error('Error al enviar los datos');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster richColors />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="author">Author:</label>
          <input type="text" id="author" name="author" value={formData.author} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="publicationDate">Publication Date:</label>
          <input type="date" id="publicationDate" name="publicationDate" value={formData.publicationDate} onChange={handleChange} required />
        </div>
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>
    </>
  );
};
