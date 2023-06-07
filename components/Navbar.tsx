const paginasValidas = [
  { nome: "PÁGINA INICIAL", endpoint: "" },
  { nome: "ÍNGA DE METRO", endpoint: "inga_de_metro" },
  { nome: "NEEM", endpoint: "neem" },
  { nome: "JAMBO VERMELHO", endpoint: "jambo_vermelho" },
  { nome: "JACARANDÁ BOCA DE SAPO", endpoint: "jacaranda_boca_de_sapo" },
  { nome: "JAMBO AMARELO", endpoint: "jambo_amarelo" },
  { nome: "PAU BRASIL", endpoint: "pau_brasil" },
  { nome: "PATA DE VACA", endpoint: "pata_de_vaca" },
  { nome: "ACÁCIA AMARELA", endpoint: "acacia_amarela" },
  { nome: "GRAVIOLA BRANCA", endpoint: "graviola_branca" },
  { nome: "CHORÃOZINHO", endpoint: "choraozinho" },
  { nome: "ÍNGA DE DEDO", endpoint: "inga_de_dedo" },
  { nome: "JACARANDÁ AMARELO", endpoint: "jacaranda_amarelo" },
];
const PAGINAS_A_MOSTRA = 3;

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg fw-bold">
        <div className="container-fluid">
          <img
            src="https://raw.githubusercontent.com/caio-farias21/maisArvores/main/static/logo.svg"
            className="p-2"
            width={60}
            alt="logo"
          />
          <a className="navbar-brand" href="#">
            <span className="align-middle text-wrap text-green d-none d-sm-block">
              Projeto Mais Árvores
            </span>
            <span className="align-middle text-wrap text-green d-block d-sm-none">
              Mais Árvores
            </span>
          </a>
          <span className="m-2 d-lg-block d-none">|</span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {paginasValidas.slice(0, PAGINAS_A_MOSTRA).map((pagina) => (
                <li className="nav-item mx-2">
                  <a className="nav-link" href={`/${pagina.endpoint}`}>
                    {pagina.nome[0].toUpperCase() +
                      pagina.nome.slice(1).toLowerCase()}
                  </a>
                </li>
              ))}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mais
                </a>
                <ul className="dropdown-menu">
                  {paginasValidas.slice(PAGINAS_A_MOSTRA).map((pagina) => (
                    <li>
                      <a className="dropdown-item" href={`/${pagina.endpoint}`}>
                        {pagina.nome[0].toUpperCase() +
                          pagina.nome.slice(1).toLowerCase()}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Procurar por espécie"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}
