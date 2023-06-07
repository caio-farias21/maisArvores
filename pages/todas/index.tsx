import paginasValidas from "../../mocks/paginasValidas.json";

export default function TodasAsArvores() {
  return (
    <>
      <div className="container py-5 my-5">
        <h1 className="fw-bold mb-3">Todas as árvores</h1>
        <div className="row">
          {paginasValidas.map((pagina) => (
            <div className="col-12 col-md-6 col-lg-4 mb-3">
              <div className="card">
                <img
                  src={pagina.imagem}
                  className="card-img-top"
                  alt={pagina.nome}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {pagina.nome[0].toUpperCase() +
                      pagina.nome.slice(1).toLowerCase()}
                  </h5>
                  <a href={"/" + pagina.endpoint} className="btn btn-primary">
                    Saiba mais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
