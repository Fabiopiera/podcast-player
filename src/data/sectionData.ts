// src/data/sectionData.ts

import profileImage from "../assets/profile.png";

interface Section {
  sectionTitle: string;
  content: string;
}

interface SectionData {
  profile: {
    profileImage: string;
    userName: string;
  };
  sections: Section[];
}

const sectionData: SectionData = {
  profile: {
    profileImage: profileImage,
    userName: "Jhoan Pherez",
  },
  sections: [
    {
      sectionTitle: "Escuchar nuevamente",
      content: "Content for Listen Again section.",
    },
    {
      sectionTitle: "Similar a",
      content: "Content for Recommended Albums section.",
    },
    {
      sectionTitle: "Selección rápida",
      content: "Content for Quick Picks section.",
    },
    {
      sectionTitle: "Recomendados",
      content: "Content for Similar To section.",
    },
  ],
};

export default sectionData;
