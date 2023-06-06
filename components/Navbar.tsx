export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-xxl navbar-light">
      <div className="container-fluid">
        <div id="logo">
          <a>
            <img src="" className="img-fluid" alt="logo" />
          </a>
        </div>
        <a className="navbar-brand font-bold">Projeto Mais Árvores</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end text-center"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                PÁGINA INICIAL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="inga">
                ÍNGA DE METRO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="neem">
                NEEM
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="jambo">
                JAMBO VERMELHO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="jacaranda_b">
                JACARANDÁ BOCA DE SAPO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="jambo_a">
                JAMBO AMARELO
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pau_brasil">
                PAU BRASIL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="pata">
                PATA DE VACA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="acacia">
                ACÁCIA AMARELA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="graviola">
                GRAVIOLA BRANCA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="choraozinho">
                CHORÃOZINHO
              </a>
            </li>
            <li className="nav-item dropstart">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDarkDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                MAIS
              </a>
              <ul
                className="dropdown-menu dropdown-menu-dark"
                aria-labelledby="navbarDarkDropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="inga_d">
                    Ingá de Dedo
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="jacaranda_a">
                    Jacarandá Amarelo
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
