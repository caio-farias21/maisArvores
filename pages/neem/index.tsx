import HomeTree from "../../components/HomeTree";
import paginasValidas from "../../mocks/paginasValidas.json";

export default function IngaDeMetro() {
  return (
    <>
      <HomeTree
        backgroundColor="#606C5D"
        treeObject={paginasValidas.find((pagina) => pagina.endpoint === "neem")}
      />
    </>
  );
}
