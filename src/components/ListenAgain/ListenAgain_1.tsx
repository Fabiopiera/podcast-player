import React, { useEffect, useState } from "react";
import "./ListenAgain.css";

interface Thumbnail {
  id: number;
  title: string;
  logo: string;
  url: string;
  duration: number;
}

const ListenAgain: React.FC = () => {
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]); // Estado para almacenar los datos de la API
  const [loading, setLoading] = useState(true); // Estado para manejar la carga

  // Paso 2: Llamada a la API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.audioboom.com/audio_clips"); // URL de la API
        const data = await response.json(); // Transformar la respuesta a JSON
        console.log(data); // Mostrar los datos en la consola para verificar

        // Mapeamos los datos de la API a nuestro estado
        const thumbnailsData = data.body.audio_clips.map((clip: any) => ({
          //id: clip.channel.id,
          title: clip.channel.title,
          logo: clip.channel.urls.logo_image.original, // La imagen del logo
          url: clip.urls.high_mp3, // high_mp3 para el audio
          duration: clip.duration,
        }));

        setThumbnails(thumbnailsData); // Guardamos los datos en el estado
        setLoading(false); // Cambiamos el estado de carga
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false); // Detener el estado de carga incluso en caso de error
      }
    };

    fetchData(); // Ejecutar la función
  }, []); // Ejecutar solo al montar el componente

  // Renderizado condicional durante la carga
  if (loading) {
    return <div>Cargando...</div>;
  }

  // Paso 3: Renderizar los datos de la API
  return (
    <div className="listen-again">
      <div className="thumbnails">
        {thumbnails.map((thumbnail) => (
          <div key={thumbnail.id} className="thumbnail">
            <a href={thumbnail.url} target="_blank" rel="noopener noreferrer">
              <img src={thumbnail.logo} alt={thumbnail.title} />
            </a>
            <div className="thumbnail-info">
              <p className="title">{thumbnail.title}</p>
              <p className="duration">
                Duración: {thumbnail.duration.toFixed(1)} min
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListenAgain;
