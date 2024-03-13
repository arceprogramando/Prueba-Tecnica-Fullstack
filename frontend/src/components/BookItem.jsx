export const BookItem = ({ data }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-4">
      <div className="text-gray-800">
        {data.title ? <h2 className="text-lg font-semibold mb-2">{data.title}</h2> : <p>Falto agregar titulo</p>}
        {data.author ? <p className="text-sm">{data.author}</p> : <p>Falto agregar autor</p>}
        {data.category ? <p className="text-xs text-gray-600 mt-2">{data.category}</p> : <p>Falto agregar categoria</p>}
        {data.publicationDate ? <p>Fecha de Publicacion: {data.publicationDate}</p> : <p>Falto agregar la fecha de Publicación</p>}
      </div>
    </div>
  );
};
