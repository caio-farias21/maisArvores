import Navbar from "../components/Navbar";

export default function Error() {
  return (
    <>
      <Navbar />
      <div className="not-found">
        <div>
          <h1 className="fw-bold text-center text-green col">
            <i className="bi bi-tree-fill me-2"></i>
            404
          </h1>
          <h4 className="text-center text-secondary col">
            Não há Árvores por aqui...
          </h4>
        </div>
      </div>
    </>
  );
}
