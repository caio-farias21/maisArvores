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
          Este site tem como objetivo, monitorar e informar a população local
          sobre o progresso do processo de arborização da cidade de Campos Belos
          - Goiás.
          <img
            className="img-fluid ms-2"
            style={{ width: "1.5em", borderRadius: "2px" }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_Goi%C3%A1s.svg/1280px-Flag_of_Goi%C3%A1s.svg.png"
          ></img>
        </p>
      </div>
    </>
  );
}
