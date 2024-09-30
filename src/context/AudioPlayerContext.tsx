import React, { createContext, useState, useContext } from "react";

// Definir el contexto
interface AudioPlayerContextType {
  audioUrl: string;
  setAudioUrl: (url: string) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | undefined>(
  undefined
);

// Proveedor del contexto
export const AudioPlayerProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [audioUrl, setAudioUrl] = useState<string>("");

  return (
    <AudioPlayerContext.Provider value={{ audioUrl, setAudioUrl }}>
      {children}
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
