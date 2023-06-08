import paginasValidas from "../mocks/paginasValidas.json";
import { Capitalize } from "../utils/StringMethods";
import { ReplaceSpecialCaracters } from "../utils/ReplaceSpecialCaracters";

const PAGINAS_A_MOSTRA = 3;
let arvores = [];

paginasValidas.forEach((pagina) => {
  arvores.push(pagina.nome);
});

export default function Navbar() {
  if (typeof window !== "undefined") {
    const search = document.getElementById("search-box") as HTMLInputElement;
    const listGroupSearch = document.getElementById("list-group-search-trees");
    window.addEventListener("scroll", () => {
      const navbar = document.getElementById("navbar");
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
    window.addEventListener("click", () =>
      listGroupSearch.classList.add("d-none")
    );
    search.addEventListener("keyup", () => {
      listGroupSearch.classList.remove("d-none");
      const searchString = search.value
        ? ReplaceSpecialCaracters(search.value.toLowerCase().trim())
        : null;

      const arvoresFiltradas = arvores.filter((arvore) => {
        return ReplaceSpecialCaracters(arvore)
          .toLowerCase()
          .includes(searchString);
      });
      listGroupSearch.innerHTML = "";
      arvoresFiltradas.forEach((arvore) => {
        const li = document.createElement("a");
        li.classList.add("list-group-item", "list-group-item-action");
        li.href =
          "/" +
          paginasValidas.find((pagina) => pagina.nome === arvore).endpoint;
        li.innerHTML = Capitalize(arvore);
        listGroupSearch.appendChild(li);
      });
    });
  }
  return (
    <>
      <nav
        className={"navbar navbar-expand-lg fw-bold bg-transparent fixed-top"}
        id="navbar"
      >
        <div className="container-fluid">
          <a href="/">
            <img
              src={
                "https://raw.githubusercontent.com/caio-farias21/maisArvores/main/public/static/logo.svg"
              }
              className="p-2"
              width={60}
              alt="logo"
            />
          </a>
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
            onClick={() => {
              const navbar = document.getElementById("navbar");
              if (window.scrollY == 0) {
                navbar.classList.toggle("bg-white");
                navbar.classList.toggle("bg-transparent");
                navbar.classList.toggle("shadow");
              }
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">
                  {"Página inicial"}
                </a>
              </li>
              {paginasValidas.slice(0, PAGINAS_A_MOSTRA).map((pagina, idx) => (
                <li className="nav-item mx-2" key={idx}>
                  <a className="nav-link" href={`/${pagina.endpoint}`}>
                    {Capitalize(pagina.nome)}
                  </a>
                </li>
              ))}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle mx-2"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Mais
                </a>
                <ul className="dropdown-menu">
                  {paginasValidas.slice(PAGINAS_A_MOSTRA).map((pagina, idx) => (
                    <li key={idx}>
                      <a className="dropdown-item" href={`/${pagina.endpoint}`}>
                        {Capitalize(pagina.nome)}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li className="nav-item mx-2">
                <a className="nav-link" href={"/todas"}>
                  {"Ver todas"}
                </a>
              </li>
            </ul>
            <form className="d-flex d-none" role="search" id="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Procurar por espécie"
                autoComplete="off"
                aria-label="Search"
                id="search-box"
              />
              <div
                className="list-group position-absolute mt-5"
                id="list-group-search-trees"
              ></div>
            </form>
            <button
              className="btn btn-primary text-white me-3 d-none d-lg-block"
              onClick={() =>
                document.getElementById("search").classList.toggle("d-none")
              }
            >
              <i className="bi bi-search me-2"></i>
              <span>Procurar</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
