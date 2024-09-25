import React from "react";
import styles from "./PlaylistForm.module.css";

interface PlaylistFormProps {
  formData: { title: string; description: string; imageUrl: string };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onAddPlaylist: () => void;
}

const PlaylistForm: React.FC<PlaylistFormProps> = ({
  formData,
  onInputChange,
  onAddPlaylist,
}) => {
  return (
    <div className={styles.playlistForm}>
      <div className={styles.formInputs}>
        <h2 className={styles.header}>Crea tu playlist</h2>
        <input
          type="text"
          name="title"
          placeholder="Título"
          value={formData.title}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Descripción"
          value={formData.description}
          onChange={onInputChange}
        />
        <input
          type="text"
          name="imageUrl"
          placeholder="Imagen URL"
          value={formData.imageUrl}
          onChange={onInputChange}
        />
        <button
          onClick={onAddPlaylist}
          disabled={
            !formData.title || !formData.description || !formData.imageUrl
          }
        >
          Agregar playlist
        </button>
      </div>
      <div className={styles.preview}>
        <h3>Vista previa</h3>
        <img src={formData.imageUrl} alt="Preview" />
        <h4>{formData.title}</h4>
        <p>{formData.description}</p>
      </div>
    </div>
  );
};

export default PlaylistForm;
