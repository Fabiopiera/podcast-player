import React from "react";
import Header from "./components/Header/Header";
import ListenAgain from "./components/ListenAgain/ListenAgain";
import QuickPicks from "./components/QuickPicks/QuickPicks";
import RecommendedAlbums from "./components/RecommendedAlbums/RecommendedAlbums";
import SimilarTo from "./components/SimilarTo/SimilarTo";
import PlaybackBar from "./components/PlaybackBar/PlaybackBar";

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <ListenAgain />
      <QuickPicks />
      <RecommendedAlbums />
      <SimilarTo />
      <PlaybackBar />
    </div>
  );
};

export default App;
