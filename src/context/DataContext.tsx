// src/context/DataContext.tsx
import React, { createContext, useState, useEffect, ReactNode } from "react";

// Definir la estructura del dato que proporcionará el contexto
interface DataContextProps {
  thumbnails: Thumbnail[];
  loading: boolean;
}

interface Thumbnail {
  id: number;
  title: string;
  logo: string;
  url: string;
  duration: number;
  description: string;
}

// Crear el contexto
export const DataContext = createContext<DataContextProps | undefined>(
  undefined
);

// Crear el proveedor del contexto
export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [thumbnails, setThumbnails] = useState<Thumbnail[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.audioboom.com/audio_clips");
        const data = await response.json();

        const thumbnailsData = data.body.audio_clips.map((clip: any) => ({
          id: clip.channel.id,
          title: clip.channel.title,
          logo: clip.channel.urls.logo_image.original,
          url: clip.urls.high_mp3, // Cambiado para obtener la URL del audio
          duration: clip.duration,
          description: clip.description,
        }));

        setThumbnails(thumbnailsData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ thumbnails, loading }}>
      {children}
    </DataContext.Provider>
  );
};
