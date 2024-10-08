import React, { createContext, useState, useContext, useRef } from "react";

// Definir el contexto
interface AudioPlayerContextType {
  audioUrl: string;
  audioTitle: string;
  audioImage: string;
  isPlaying: boolean;
  isVisible: boolean; // Nuevo estado para controlar la visibilidad
  setAudioData: (url: string, title: string, image: string) => void;
  play: () => void;
  pause: () => void;
  seekForward: (seconds: number) => void;
  seekBackward: (seconds: number) => void;
  closePlayer: () => void; // Nueva función para cerrar el reproductor
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
  const [isVisible, setIsVisible] = useState<boolean>(false); // Estado para visibilidad
  const audioRef = useRef<HTMLAudioElement>(null);

  const setAudioData = (url: string, title: string, image: string) => {
    setAudioUrl(url);
    setAudioTitle(title);
    setAudioImage(image);
    setIsVisible(true); // Muestra el reproductor
    setIsPlaying(true);
    if (audioRef.current) {
      audioRef.current.src = url;
      audioRef.current.play();
    }
  };

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const seekForward = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds;
    }
  };

  const seekBackward = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime -= seconds;
    }
  };

  const closePlayer = () => {
    setIsVisible(false); // Oculta el reproductor
    pause(); // Detiene la reproducción si está en curso
  };

  return (
    <AudioPlayerContext.Provider
      value={{
        audioUrl,
        audioTitle,
        audioImage,
        isPlaying,
        isVisible, // Añadir el estado de visibilidad
        setAudioData,
        play,
        pause,
        seekForward,
        seekBackward,
        closePlayer, // Añadir la función closePlayer
      }}
    >
      {children}
      {isVisible && <audio ref={audioRef} />}{" "}
      {/* Solo renderiza el audio si es visible */}
    </AudioPlayerContext.Provider>
  );
};

// Hook para usar el contexto en componentes
export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error(
      "useAudioPlayer must be used within an AudioPlayerProvider"
    );
  }
  return context;
};
