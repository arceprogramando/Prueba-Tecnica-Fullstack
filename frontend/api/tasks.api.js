export const getBookRequest = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/books');
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error al hacer fetching a la data');
  }
};

export const deleteBookRequest = async (id) => {
  try {
    const response = await fetch(`http://localhost:8080/api/books/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
};

export const postBookRequest = async (formData) => {
  try {
    const response = await fetch('http://localhost:8080/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      return { success: true };
    } else if (response.status === 409) {
      return { error: '409' };
    }
  } catch (error) {
    return { error: 'Error al enviar los datos' };
  }
};
