import { Capitalize } from "../utils/StringMethods";
import MainBackground from "./MainBackground";

interface TreeObject {
  nome: string;
  endpoint: string;
  imagem: string;
  descricao: string;
  nomeCientifico: string;
  familia: string;
  enderecos: string[];
}

interface HomeTreeProps {
  backgroundColor: string;
  /* primaryColor: string;
  secondaryColor: string; */
  treeObject: TreeObject;
}

export default function HomeTree({
  backgroundColor,
  /* primaryColor,
  secondaryColor, */
  treeObject,
}: HomeTreeProps) {
  return (
    <>
      <MainBackground color={backgroundColor} />
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col">
            <img
              className="img-fluid rounded"
              src={treeObject.imagem}
              alt={Capitalize(treeObject.nome)}
            />
          </div>
          <div className="col">
            <h1 className="fw-bold text-white mb-5 text-center">
              {Capitalize(treeObject.nome)}
            </h1>
            <div className="row g-5">
              <div className="col-8">
                <div className="mb-3">
                  <h3 className="fw-bold text-white">Nome Científico</h3>
                  <span className="text-main-green fw-bold fs-4">
                    {treeObject.nomeCientifico}
                  </span>
                </div>
                <div className="mb-3">
                  <h3 className="fw-bold text-white">Família</h3>
                  <span className="text-main-green fw-bold fs-4">
                    {treeObject.familia}
                  </span>
                </div>
              </div>
              <div className="col-4">
                <button
                  className="btn btn-primary ratio ratio-1x1"
                  id="btn-green"
                >
                  <span className="fs-1 fw-bold">...</span>
                </button>
              </div>
            </div>
            <hr className="pb-5" />
            <div className="mt-5 pt-5">
              <h3 className="fw-bold text-main-green">Descrição</h3>
              <p className="fw-medium">{treeObject.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
