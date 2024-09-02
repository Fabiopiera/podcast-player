import React, { useState, useRef } from "react";
import Header from "./components/Header/Header";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import ListenAgain from "./components/ListenAgain/ListenAgain";
import QuickPicks from "./components/QuickPicks/QuickPicks";
import SimilarTo from "./components/SimilarTo/SimilarTo";
import sectionData from "./data/sectionData";
import Sidebar from "./components/SideBar/SideBar";
import RecomendedAlbums from "./components/RecommendedAlbums/RecommendedAlbums";
import UserName from "./components/UserName/UserName";
import PlaylistForm from "./components/PlayListForm/PlaylistForm";
import "./App.css"; // Asegúrate de tener este archivo para los estilos globales

const App: React.FC = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const [playlists, setPlaylists] = useState<
    { title: string; description: string; imageUrl: string }[]
  >([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleScroll = (sectionTitle: string, direction: "left" | "right") => {
    const section = sectionRefs.current[sectionTitle];
    if (section) {
      const scrollAmount = direction === "left" ? -200 : 200;
      section.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddPlaylist = () => {
    setPlaylists([...playlists, formData]);
    setFormData({ title: "", description: "", imageUrl: "" });
    setIsFormVisible(false);
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar
          playlists={playlists}
          onAddPlaylist={() => setIsFormVisible(true)}
        />
        <div className="content">
          {isFormVisible ? (
            <PlaylistForm
              formData={formData}
              onInputChange={handleInputChange}
              onAddPlaylist={handleAddPlaylist}
            />
          ) : (
            sectionData.sections.map((section, index) => (
              <div key={index}>
                <SectionHeader
                  profileImage={sectionData.profile.profileImage}
                  sectionTitle={section.sectionTitle}
                  onScrollLeft={() =>
                    handleScroll(section.sectionTitle, "left")
                  }
                  onScrollRight={() =>
                    handleScroll(section.sectionTitle, "right")
                  }
                >
                  {section.sectionTitle === "Recomendados" ? (
                    <span>Otro Contenido</span> // Contenido personalizado para "Recomendados"
                  ) : section.sectionTitle === "Selección rápida" ? (
                    <span></span> // Contenido personalizado para "Selección rápida" (eliminar todo lo personalizado de la seccion para que quede username por defecto)
                  ) : (
                    <UserName userName={sectionData.profile.userName} /> // Mostrar userName por defecto
                  )}
                </SectionHeader>
                <div
                  ref={(el) => (sectionRefs.current[section.sectionTitle] = el)}
                  className="scrollable-section"
                >
                  {section.sectionTitle === "Escuchar nuevamente" && (
                    <ListenAgain />
                  )}
                  {section.sectionTitle === "Selección rápida" && (
                    <QuickPicks />
                  )}
                  {section.sectionTitle === "Similar a" && <SimilarTo />}
                  {section.sectionTitle === "Recomendados" && (
                    <RecomendedAlbums />
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="app">
        <AudioPlayer />
      </div>
    </div>
  );
};

export default App;
