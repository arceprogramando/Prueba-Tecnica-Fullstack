export const BookItem = ({ data }) => {
  const { title, author, category, publicationDate } = data;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4 text-gray-800 ">
      <h2 className="text-lg font-semibold mb-2">{title || 'Falto agregar titulo'}</h2>
      <p className="text-sm">{author || 'Falto agregar autor'}</p>
      <p className="text-xs text-gray-600 mt-2">{category || 'Falto agregar categoria'}</p>
      <p>{publicationDate || 'Falto agregar la fecha de Publicación'}</p>
    </div>
  );
};
