// App.tsx
import React, { useRef } from "react";
import Header from "./components/Header/Header";
import SectionHeader from "./components/SectionHeader/SectionHeader";
import AudioPlayer from "./components/AudioPlayer/AudioPlayer";
import ListenAgain from "./components/ListenAgain/ListenAgain";
import QuickPicks from "./components/QuickPicks/QuickPicks";
import SimilarTo from "./components/SimilarTo/SimilarTo";
import sectionData from "./data/sectionData";
import Sidebar from "./components/SideBar/SideBar";
import RecomendedAlbums from "./components/RecommendedAlbums/RecommendedAlbums";
import "./App.css"; // Asegúrate de tener este archivo para los estilos

const App: React.FC = () => {
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleScroll = (sectionTitle: string, direction: "left" | "right") => {
    const section = sectionRefs.current[sectionTitle];
    if (section) {
      const scrollAmount = direction === "left" ? -200 : 200;
      section.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="app">
      <Header />
      <div className="main-content">
        <Sidebar />
        <div className="content">
          {sectionData.sections.map((section, index) => (
            <div key={index}>
              <SectionHeader
                profileImage={sectionData.profile.profileImage}
                userName={sectionData.profile.userName}
                sectionTitle={section.sectionTitle}
                onScrollLeft={() => handleScroll(section.sectionTitle, "left")}
                onScrollRight={() =>
                  handleScroll(section.sectionTitle, "right")
                }
              />
              <div
                ref={(el) => (sectionRefs.current[section.sectionTitle] = el)}
                className="scrollable-section"
              >
                {section.sectionTitle === "Escuchar nuevamente" && (
                  <ListenAgain />
                )}
                {section.sectionTitle === "Selección rápida" && <QuickPicks />}
                {section.sectionTitle === "Similar a" && <SimilarTo />}
                {section.sectionTitle === "Recomendados" && (
                  <RecomendedAlbums />
                )}
                {/* Aquí puedes agregar otros componentes de sección según sea necesario */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="app">
        <AudioPlayer />
      </footer>
    </div>
  );
};

export default App;
