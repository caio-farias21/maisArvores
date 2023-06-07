import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const navColor = "rgb(78, 162, 232)";
const primaryColor = "";
const secondaryColor = "";

export default function Home() {
  return (
    <>
      <Navbar bgColor={navColor} />
      <img
        src={
          "https://raw.githubusercontent.com/caio-farias21/maisArvores/main/public/static/hero.svg"
        }
        className="img-fluid w-100"
        alt="hero"
      />
      <main className="container">
        <h1 className="fw-bold">Sobre</h1>
        <p className="text-wrap">
          Este site tem como objetivo, monitorar e informar a população sobre o
          progresso do processo de arborização da cidade de Campos Belos -
          Goiás.
        </p>
      </main>
      <Footer />
    </>
  );
}
