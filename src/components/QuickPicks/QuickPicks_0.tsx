import React from "react";
import quickPicksData from "../../data/QuickPicksData";
import "./QuickPicks.css";

const QuickPicks: React.FC = () => {
  return (
    <div className="quick-picks">
      <div className="thumbnails">
        {Array.from({ length: Math.ceil(quickPicksData.length / 4) }).map(
          (_, columnIndex) => (
            <div className="column" key={columnIndex}>
              {quickPicksData
                .slice(columnIndex * 4, columnIndex * 4 + 4)
                .map((pick, index) => (
                  <div key={index} className="thumbnail">
                    <img
                      src={pick.image}
                      alt={pick.title}
                      className="thumbnail-image"
                    />
                    <div className="thumbnail-info">
                      <p className="title">{pick.title}</p>
                      <p className="artist">{pick.artist}</p>
                    </div>
                  </div>
                ))}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default QuickPicks;
