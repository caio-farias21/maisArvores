import { Capitalize } from "../utils/StringMethods";
import { BackgroundTemplate } from "./BackgroundTemplate";
import { Tree } from "../types/Tree";

export default function HomeTree({ treeObject }: { treeObject: Tree }) {
  return (
    <>
      <div
        className="container-fluid pt-5"
        style={{
          background: `url(${BackgroundTemplate({
            color: treeObject.backgroundColor,
          })})`,
          zIndex: -1,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container py-5 row-cols-md-2 row-cols-1 row m-auto">
          <div className="w-50 col m-auto mb-3 mb-md-0">
            <img
              className="img-fluid rounded-5 shadow"
              src={treeObject.imagem}
              alt={treeObject.nome}
            />
          </div>
          <div className="col m-auto">
            <h1 className="fw-bold mb-5 text-center rounded text-white p-2 tree-name">
              {Capitalize(treeObject.nome)}
            </h1>
            <div className="row">
              <div className="col-8">
                <div className="mb-3">
                  <h3 className="fw-bold text-white m-0">Nome Científico</h3>
                  <span className="text-main-green fw-bold fs-4">
                    {treeObject.nomeCientifico}
                  </span>
                </div>
                <div className="mb-3">
                  <h3 className="fw-bold text-white m-0">Família</h3>
                  <span className="text-main-green fw-bold fs-4">
                    {treeObject.familia}
                  </span>
                </div>
              </div>
              <div className="col-3-md col-4 mx-0 my-auto">
                <button
                  className="btn text-white ratio ratio-1x1"
                  type="button"
                  id="btn-green"
                  data-bs-toggle="modal"
                  data-bs-target="#enderecos"
                >
                  <div className="d-flex align-items-center justify-content-center">
                    <div>
                      <span className="fw-bold" style={{ fontSize: "3em" }}>
                        {treeObject.enderecos.length}
                      </span>
                      <p className="fw-medium fs-6">Plantado(s)</p>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <hr className="d-none d-md-block" />
          </div>
        </div>
      </div>
      <div className="container py-5">
        <div>
          <h3 className="fw-bold text-green text-center text-md-start">
            Descrição
          </h3>
          <p className="fw-medium text-center text-md-start">
            {treeObject.descricao}
          </p>
        </div>
      </div>
      <div
        className="modal fade"
        id="enderecos"
        tabIndex={-1}
        aria-labelledby="enderecosLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="enderecosLabel">
                <span className="fw-bold text-green">Endereços de </span>
                <span className="fw-medium">{Capitalize(treeObject.nome)}</span>
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <ul>
                {treeObject.enderecos.map((endereco, idx) => (
                  <li key={idx}>
                    <p className="fw-bold mb-0">{endereco}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
