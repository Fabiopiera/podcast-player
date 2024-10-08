import React, { createContext, useState, useContext, useRef } from "react";

// Definir el contexto
interface AudioPlayerContextType {
  audioUrl: string;
  audioTitle: string;
  audioImage: string;
  isPlaying: boolean;
  isVisible: boolean;
  setAudioData: (url: string, title: string, image: string) => void;
  play: () => void;
  pause: () => void;
  seekForward: (seconds: number) => void;
  seekBackward: (seconds: number) => void;
  closePlayer: () => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

// Proveedor del contexto
export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [audioUrl, setAudioUrl] = useState<string>("");
  const [audioTitle, setAudioTitle] = useState<string>("");
  const [audioImage, setAudioImage] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Función para configurar los datos del audio y reproducirlo
  const setAudioData = (url: string, title: string, image: string) => {
    setAudioUrl(url);
    setAudioTitle(title);
    setAudioImage(image);
    setIsVisible(true); // Mostrar el reproductor

    // Verificar que el ref del audio esté disponible antes de reproducir
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true); // Cambia el estado a "playing" después de que empieza a reproducirse
        })
        .catch((err) => {
          console.error("Error al reproducir el audio:", err);
        });
    }
  };

  // Función para reproducir
  const play = () => {
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error("Error al intentar reproducir:", err);
        });
    }
  };

  // Función para pausar
  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  // Adelantar el audio
  const seekForward = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  // Retroceder el audio
  const seekBackward = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime -= seconds;
    }
  };

  // Cerrar el reproductor, pero no pausar automáticamente
  const closePlayer = () => {
    setIsVisible(false); // Oculta el reproductor
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        audioUrl,
        audioTitle,
        audioImage,
        isPlaying,
        isVisible,
        setAudioData,
        play,
        pause,
        seekForward,
        seekBackward,
        closePlayer,
      }}
    >
      {children}
      {/* Renderiza el elemento <audio> siempre, pero controlando la visibilidad */}
      <audio ref={audioRef} style={{ display: isVisible ? "block" : "none" }} />
    </AudioPlayerContext.Provider>
  );
};

// Hook para usar el contexto en otros componentes
export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error(
      "useAudioPlayer must be used within an AudioPlayerProvider"
    );
  }
  return context;
};
