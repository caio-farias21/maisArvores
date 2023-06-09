import logoApoio from "../mocks/logoApoio.json";

export default function Footer() {
  return (
    <footer className="border-top py-3 bg-white">
      <div className="container-fluid container-md row d-flex m-auto justify-content-around align-middle">
        <div className="fw-bold fs-4 align-middle text-green col-4 col-md mb-3 mb-md-0 d-flex align-items-center justify-content-center justify-content-md-start">
          Apoio
          <span className="fw-bold ms-5 d-none d-md-inline">|</span>
        </div>
        <div className="col-10 row row-md-cols-2 d-flex justify-content-center">
          {logoApoio.map((object, idx) => (
            <div
              className=" col-lg-2 col-md-3 col-sm-5 col-10 d-flex align-items-center m-auto"
              key={idx}
            >
              <img
                src={object.src}
                alt={object.alt}
                className="img-fluid p-2"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
