import paginasValidas from "../mocks/paginasValidas.json";
import { Capitalize, ReplaceSpecialCaracters } from "../utils/StringMethods";

const PAGINAS_A_MOSTRA = 3;
const NUMERO_MAX_DE_ARVORES_POR_PESQUISA = 5;

function searchTree() {
  const search = document.getElementById("search-box") as HTMLInputElement;
  const listGroupSearch = document.getElementById(
    "list-group-search-trees"
  ) as HTMLDivElement;

  search.addEventListener("keyup", () => {
    listGroupSearch.classList.add("show");
    const searchString = ReplaceSpecialCaracters(
      search.value.toLowerCase().trim()
    );

    type finalResult = {
      nome: string;
      nomeCientifico?: string;
      familia?: string;
      endpoint?: string;
    };
    const arvoresFiltradas = [] as Array<finalResult>;
    paginasValidas.forEach((pagina) => {
      const finalResult = {} as finalResult;
      const nome = ReplaceSpecialCaracters(pagina.nome.toLowerCase().trim());
      const familia = ReplaceSpecialCaracters(
        pagina.familia.toLowerCase().trim()
      );
      const nomeCientifico = ReplaceSpecialCaracters(
        pagina.nomeCientifico.toLowerCase().trim()
      );
      if (searchString) {
        if (nome.includes(searchString)) {
          finalResult["nome"] = nome;
          finalResult["endpoint"] = pagina.endpoint;
        }
        if (nomeCientifico.includes(searchString)) {
          finalResult["nomeCientifico"] = nomeCientifico;
          finalResult["endpoint"] = pagina.endpoint;
          if (!finalResult["nome"]) finalResult["nome"] = nome;
        }
        if (familia.includes(searchString)) {
          finalResult["familia"] = familia;
          finalResult["endpoint"] = pagina.endpoint;
          if (!finalResult["nome"]) finalResult["nome"] = nome;
        }
        if (Object.keys(finalResult).length > 0)
          arvoresFiltradas.push(finalResult);
      }
    });

    listGroupSearch.innerHTML = "";
    if (arvoresFiltradas.length > 0)
      arvoresFiltradas
        .slice(0, NUMERO_MAX_DE_ARVORES_POR_PESQUISA)
        .forEach((arvore, idx) => {
          const li = document.createElement("a");
          const familia = arvore.familia ? "Família: " + arvore.familia : "";
          const nomeCientifico = arvore.nomeCientifico
            ? "Nome Científico: " + arvore.nomeCientifico
            : "";
          li.classList.add("dropdown-item");
          li.href = "/tree/" + arvore.endpoint;
          li.innerHTML = `
          <p class="fw-medium m-0">${Capitalize(arvore.nome)}</p>
          <small class="text-secondary d-block">${nomeCientifico}</small>
          <small class="text-secondary d-block">${familia}</small>
          `;
          listGroupSearch.appendChild(li);
          if (
            idx < arvoresFiltradas.length - 1 &&
            idx < NUMERO_MAX_DE_ARVORES_POR_PESQUISA - 1
          ) {
            const li = document.createElement("hr");
            li.classList.add("dropdown-divider");
            listGroupSearch.appendChild(li);
          }
        });
    else if (searchString == "") {
      listGroupSearch.classList.remove("show");
    } else {
      listGroupSearch.innerHTML = `<li><a class="dropdown-item disabled">Não encontrado...</a></li>`;
    }
  });

  window.addEventListener("click", () =>
    listGroupSearch.classList.remove("show")
  );
}

function scrollSpy() {
  window.addEventListener("scroll", () => {
    const navbar = document.getElementById("navbar") as HTMLDivElement;
    if (window.scrollY > 0) {
      navbar.classList.add("bg-white-nav");
      navbar.classList.remove("bg-transparent");
      navbar.classList.add("shadow");
    } else {
      navbar.classList.remove("bg-white-nav");
      navbar.classList.add("bg-transparent");
      navbar.classList.remove("shadow");
    }
  });
}

export default function Navbar() {
  if (typeof window !== "undefined") {
    searchTree();
    scrollSpy();
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
              const navbar = document.getElementById(
                "navbar"
              ) as HTMLDivElement;
              if (window.scrollY == 0) {
                navbar.classList.toggle("bg-white-nav");
                navbar.classList.toggle("shadow");
                navbar.classList.toggle("bg-transparent");
              }
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0" id="main-navbar">
              <li className="nav-item mx-2">
                <a className="nav-link" href="/">
                  {"Página inicial"}
                </a>
              </li>
              {paginasValidas.slice(0, PAGINAS_A_MOSTRA).map((pagina, idx) => (
                <li className="nav-item mx-2" key={idx}>
                  <a className="nav-link" href={`/tree/${pagina.endpoint}`}>
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
                      <a
                        className="dropdown-item"
                        href={`/tree/${pagina.endpoint}`}
                      >
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
            <div
              className="d-none dropdown me-lg-2 mb-lg-0 mb-3"
              role="search"
              id="search"
            >
              <input
                className="form-control"
                type="search"
                placeholder="Procurar por espécie"
                autoComplete="off"
                aria-label="Search"
                id="search-box"
                aria-expanded="false"
                autoCorrect="off"
              />
              <ul
                className="dropdown-menu w-100"
                id="list-group-search-trees"
              ></ul>
            </div>
            <button
              className="btn text-white mb-3 mb-lg-0 me-lg-3"
              id="btn-green"
              onClick={() => {
                const search = document.getElementById(
                  "search"
                ) as HTMLFormElement;
                search.classList.toggle("d-none");
                if (window.innerWidth < 728) {
                  document
                    .getElementById("main-navbar")
                    ?.classList.toggle("d-none");
                }
                document
                  .getElementById("search-icon")
                  ?.classList.toggle("bi-search");
                document
                  .getElementById("search-icon")
                  ?.classList.toggle("bi-x-lg");
              }}
            >
              <i className="bi bi-search me-2" id="search-icon"></i>
              <span>Procurar</span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
