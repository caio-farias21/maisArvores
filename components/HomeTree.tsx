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
            <h1 className="fw-bold">{Capitalize(treeObject.nome)}</h1>
            <div>
              <h3 className="fw-bold">Nome Científico</h3>
              <span>{treeObject.nomeCientifico}</span>
            </div>
            <div>
              <h3 className="fw-bold">Família</h3>
              <span>{treeObject.familia}</span>
            </div>
            <div>
              <p>{treeObject.descricao}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
