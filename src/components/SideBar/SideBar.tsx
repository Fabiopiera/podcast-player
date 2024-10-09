import React from "react";
import styles from "./Sidebar.module.css";

interface SidebarProps {
  playlists: { title: string; description: string; imageUrl: string }[];
  onAddPlaylist: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ playlists, onAddPlaylist }) => {
  return (
    <div className={styles.sidebar}>
      <a href="/">
        <button className={styles["new-playlist-btn"]}>Inicio</button>
      </a>
      <button className={styles["new-playlist-btn"]} onClick={onAddPlaylist}>
        Playlist
      </button>

      <div className={styles.playlists}>
        {playlists.map((playlist, index) => (
          <div key={index} className={styles.playlistItem}>
            <img src={playlist.imageUrl} alt={playlist.title} />
            <h5>{playlist.title}</h5>
            <p>{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
