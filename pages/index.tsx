export default function Home() {
  return (
    <>
      <img
        src={
          "https://raw.githubusercontent.com/caio-farias21/maisArvores/main/public/static/hero.svg"
        }
        className="img-fluid w-100 d-none d-md-block"
        alt="hero"
      />
      <img
        src={
          "https://raw.githubusercontent.com/caio-farias21/maisArvores/main/public/static/heroMobile.svg"
        }
        className="img-fluid w-100 d-block d-md-none"
        alt="hero"
      />
      <div className="container py-5 mb-5">
        <h1 className="fw-bold text-green text-md-start text-center">Sobre</h1>
        <p className="text-wrap fw-medium text-md-start text-center">
          Este site tem como objetivo, monitorar e informar a população sobre o
          progresso do processo de arborização da cidade de Campos Belos -
          Goiás.
        </p>
      </div>
    </>
  );
}
