const navColor = "rgb(78, 162, 232)";
const primaryColor = "";
const secondaryColor = "";

export default function Home() {
  if (typeof window !== "undefined") {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        navbar.classList.add("bg-white");
        navbar.classList.remove("bg-transparent");
        navbar.classList.add("shadow");
      } else {
        navbar.classList.remove("bg-white");
        navbar.classList.add("bg-transparent");
        navbar.classList.remove("shadow");
      }
    });
  }
  return (
    <>
      <img
        src={
          "https://raw.githubusercontent.com/caio-farias21/maisArvores/main/public/static/hero.svg"
        }
        className="img-fluid w-100"
        alt="hero"
      />
      <div className="container py-5 mb-5">
        <h1 className="fw-bold">Sobre</h1>
        <p className="text-wrap">
          Este site tem como objetivo, monitorar e informar a população sobre o
          progresso do processo de arborização da cidade de Campos Belos -
          Goiás.
        </p>
      </div>
    </>
  );
}
