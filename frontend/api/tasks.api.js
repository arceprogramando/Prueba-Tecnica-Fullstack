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
