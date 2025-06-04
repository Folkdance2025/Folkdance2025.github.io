import heroImage from "../assets/hero.jpg";
import { useTranslation } from "react-i18next";

function Hero() {
  const { t } = useTranslation();

  return (
    <section
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "150px 20px",
        textAlign: "center",
        position: "relative",
      }}
    >
      <h1
        style={{
          fontSize: "4rem",
          fontWeight: "bold",
          color: "white",
          textShadow: "4px 4px 10px black",
        }}
      >
        2025金門世界民俗舞蹈觀光藝術祭
      </h1>

      <p
        style={{
          fontSize: "2rem",
          color: "white",
          textShadow: "3px 3px 8px black",
        }}
      >
        舞動世界，傳承文化
      </p>

      <p
        style={{
          fontSize: "1.8rem",
          margin: "1.5rem 0",
          color: "white",
          textShadow: "3px 3px 8px black",
        }}
      >
        2025年8月22日至24日
      </p>

      
    </section>
  );
}

export default Hero;
