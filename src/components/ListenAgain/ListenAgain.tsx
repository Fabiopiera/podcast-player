import React, { useContext } from "react"; // Importamos React y el hook useContext para acceder a contextos
import { DataContext } from "../../context/DataContext"; // Importamos el contexto DataContext
import { useAudioPlayer } from "../../context/AudioPlayerContext"; // Importamos el contexto AudioPlayerContext
import "./ListenAgain.css"; // Importamos los estilos CSS específicos para el componente

// Definimos una interfaz Thumbnail para tipar las propiedades de las miniaturas (thumbnails)
interface Thumbnail {
  url: string; // URL del audio
  logo: string; // Logo o imagen de la miniatura
  title: string; // Título del audio
  description?: string; // Descripción opcional del audio (otra propiedad)
  duration?: number; // Duración opcional del audio en segundos
}

// Definimos el componente funcional ListenAgain
const ListenAgain: React.FC = () => {
  // Usamos el hook useAudioPlayer para obtener funciones y estados del reproductor de audio
  const { setAudioData, audioUrl, isPlaying, pause } = useAudioPlayer();

  // Usamos el hook useContext para acceder a los datos del contexto DataContext
  const dataContext = useContext(DataContext);

  // Verificamos si el contexto de datos está disponible
  if (!dataContext) {
    return <div>Error: DataContext no está disponible</div>; // Mostramos un error si el contexto no se encuentra
  }

  // Extraemos las miniaturas y el estado de carga del contexto de datos
  const { thumbnails, loading } = dataContext;

  // Si los datos aún están cargando, mostramos un mensaje de carga
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Manejo de clic en la tarjeta (thumbnail)
  const handleCardClick = (thumbnail: Thumbnail) => {
    // Si la URL del audio actual coincide con la miniatura seleccionada y el audio se está reproduciendo, lo pausamos
    if (audioUrl === thumbnail.url && isPlaying) {
      pause(); // Llama a la función pause para detener la reproducción
    } else {
      // Si se selecciona un nuevo audio, establecemos los datos (URL, título y logo) del nuevo audio
      setAudioData(thumbnail.url, thumbnail.title, thumbnail.logo);
    }
  };

  // Renderizamos el componente
  return (
    <div className="listen-again">
      {" "}
      {/* Contenedor principal del componente */}
      <div className="thumbnails">
        {" "}
        {/* Contenedor para las miniaturas (thumbnails) */}
        {/* Mapeamos sobre las miniaturas (thumbnails) y renderizamos una tarjeta (thumbnail) para cada una */}
        {thumbnails.map((thumbnail) => (
          <div
            key={thumbnail.url} // Usamos la URL como clave única para cada miniatura
            className="thumbnail" // Clase CSS para el estilo de la miniatura
            onClick={() => handleCardClick(thumbnail)} // Llamamos a handleCardClick cuando se hace clic en una miniatura
          >
            <img src={thumbnail.logo} alt={thumbnail.title} />{" "}
            {/* Mostramos la imagen/logo de la miniatura */}
            {audioUrl === thumbnail.url && isPlaying && (
              <div className="play-icon">▶</div> // Mostrar el ícono de play
            )}
            <div className="thumbnail-info">
              {" "}
              {/* Contenedor para la información de la miniatura */}
              <p className="title">{thumbnail.title}</p>{" "}
              {/* Título del audio */}
              <p className="subtitle">•{thumbnail.description}</p>{" "}
              {/* Descripción del audio (opcional) */}
              <p className="duration">
                {/* Calculamos y mostramos la duración en minutos y segundos, si está disponible */}
                ♫ {Math.floor(thumbnail.duration! / 60)} min{" "}
                {/* Math.floor para redondear minutos */}
                {Math.floor(thumbnail.duration! % 60)} sec{" "}
                {/* Redondeo para los segundos */}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListenAgain; // Exportamos el componente para que pueda ser usado en otras partes de la aplicación
