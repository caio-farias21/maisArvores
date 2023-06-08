import { Capitalize } from "../utils/StringMethods";
import { MainBackground } from "./MainBackground";

interface TreeObject {
  nome: string;
  endpoint: string;
  imagem: string;
  descricao: string;
  nomeCientifico: string;
  familia: string;
  enderecos: string[];
  backgroundColor: string;
}

interface HomeTreeProps {
  treeObject: TreeObject;
}

export default function HomeTree({ treeObject }: HomeTreeProps) {
  return (
    <>
      <MainBackground color={treeObject.backgroundColor} />
      <div className="container my-5 py-5 position-absolute start-50 top-0 translate-middle-x">
        <div className="row-cols-md-2 row-cols-1 row">
          <div className="w-50 col m-auto mb-3 mb-md-0">
            <img
              className="img-fluid rounded-5 shadow"
              src={treeObject.imagem}
              alt={Capitalize(treeObject.nome)}
            />
          </div>
          <div className="col m-auto">
            <h1 className="fw-bold mb-5 text-center rounded text-white p-2 tree-name">
              {Capitalize(treeObject.nome)}
            </h1>
            <div className="row g-0">
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
                  className="btn btn-primary ratio ratio-1x1 d-flex"
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
            <hr className="pb-5 d-none d-md-block" />
          </div>
        </div>
      </div>
      <div className="container my-5 py-5">
        <div>
          <h3 className="fw-bold text-main-green">Descrição</h3>
          <p className="fw-medium">{treeObject.descricao}</p>
        </div>
      </div>
      <div
        className="modal fade"
        id="enderecos"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
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
