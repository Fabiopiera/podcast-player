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
  genero?: string;
}

const listenAgainData: Thumbnail[] = [
  {
    image: "https://static.qobuz.com/images/covers/nb/xi/gmf9o5fchxinb_600.jpg",
    title: "Lost Frecuencies",
    artist: "Tom Gregory",
    genero: "Electro",
  },
  { image: image2, title: "NITESKY", artist: "Cassia", genero: "house" },
  { image: image3, title: "Euphoria", artist: "coco" },
  { image: image4, title: "STARBOY", artist: "The Weeknd" },
  { image: image5, title: "Genesis", artist: "Phill Collins", genero: "Retro" },
  { image: image6, title: "Soda Stereo", artist: "Gustavo Ceratti" },
  { image: image7, title: "Imagine Dragons", artist: "Dan Reynolds" },
  { image: image8, title: "Imagine Dragons", artist: "Dan Reynolds" },
  { image: image9, title: "Imagine Dragons", artist: "Dan Reynolds" },
];

export default listenAgainData;
