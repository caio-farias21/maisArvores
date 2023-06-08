import paginasValidas from "../../mocks/paginasValidas.json";
import { Capitalize, Limiter } from "../../utils/StringMethods";

export default function TodasAsArvores() {
  return (
    <>
      <div className="container py-5 my-5">
        <h1 className="fw-bold mb-3">Todas as árvores</h1>
        <div className="row">
          {paginasValidas.map((pagina) => (
            <>
              <div className="card m-3 me-5 p-0" style={{ maxWidth: "540px" }}>
                <div className="row g-0">
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
                        <p>{Limiter(95, pagina.descricao)}</p>
                        <small>Font: Wikipedia</small>
                      </div>
                      <button className="btn btn-primary mt-3">
                        Saiba mais
                      </button>
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
