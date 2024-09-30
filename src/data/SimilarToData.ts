// src/data/ListenAgainData.ts
import image1 from "../assets/images/album1.png";
import image2 from "../assets/images/album2.jpg";
import image3 from "../assets/images/album3.jpg";
import image4 from "../assets/images/album4.png";
import image5 from "../assets/images/album5.jpg";
import image6 from "../assets/images/album6.jpg";
import image7 from "../assets/images/album7.webp";
import image8 from "../assets/images/album7.webp";
import image9 from "../assets/images/album7.webp";

interface Thumbnail {
  image: string;
  title: string;
  artist: string;
}

const listenAgainData: Thumbnail[] = [
  { image: image6, title: "Soda Stereo", artist: "Gustavo Ceratti" },
  { image: image7, title: "Imagine Dragons", artist: "Dan Reynolds" },
  { image: image5, title: "Genesis", artist: "Phill Collins" },
  {
    image:
      "https://hips.hearstapps.com/es.h-cdn.co/hares/images/cultura/ocio/portadas-de-discos-y-de-albums-de-musica-mas-importantes-del-s.xx/the-dark-side-of-the-moon-pink-floyd-1973/4247827-1-esl-ES/the-dark-side-of-the-moon-pink-floyd-1973.jpg?resize=980:*",
    title: "PINK FLOYD",
    artist: "David Gilmour",
  },
  { image: image3, title: "Euphoria", artist: "coco" },
  { image: image1, title: "P A H M", artist: "Ryan Jones" },
  { image: image2, title: "NITESKY", artist: "Cassia" },
  { image: image9, title: "Imagine Dragons", artist: "Dan Reynolds" },
  { image: image4, title: "STARBOY", artist: "The Weeknd" },
];

export default listenAgainData;
