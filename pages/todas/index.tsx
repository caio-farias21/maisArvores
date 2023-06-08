import paginasValidas from "../../mocks/paginasValidas.json";
import { Capitalize, Limiter } from "../../utils/StringMethods";

export default function TodasAsArvores() {
  return (
    <>
      <div className="container py-5 my-5">
        <h1 className="fw-bold mb-3">Todas as árvores</h1>
        <div className="row d-flex justify-content-around gx-3">
          {paginasValidas.map((pagina) => (
            <>
              <div className="card mb-3 p-0" style={{ maxWidth: "540px" }}>
                <div className="row g-0 ">
                  <div
                    className="col-4 h-100"
                    style={{
                      background: `url(${pagina.imagem})`,
                      backgroundSize: "cover",
                    }}
                  ></div>
                  <div className="col-8">
                    <div className="card-body">
                      <h5 className="card-title">{Capitalize(pagina.nome)}</h5>
                      <div className="card-text">
                        <p className="text-wrap">
                          {Limiter(80, pagina.descricao)}
                        </p>
                        <small>Font: Wikipedia</small>
                      </div>
                      <a
                        className="btn btn-primary mt-3"
                        role="button"
                        id="btn-green"
                        href={`/${pagina.endpoint}`}
                      >
                        Saiba mais
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
}
