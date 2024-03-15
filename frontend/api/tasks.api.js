export const getBookRequest = async () => {
  try {
    const response = await fetch('http://localhost:8080/api/books');
    const data = await response.json();
    return data;
  } catch (error) {
    const returnError = console.log(error);
    return returnError;
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
