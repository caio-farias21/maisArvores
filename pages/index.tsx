import Navbar from "../components/Navbar";

const navColor = "rgb(78, 162, 232)";
const primaryColor = "";
const secondaryColor = "";

export default function Home() {
  return (
    <>
      <Navbar bgColor={navColor} />
      <img
        src={
          "https://raw.githubusercontent.com/caio-farias21/maisArvores/main/public/static/hero.svg"
        }
        className="img-fluid w-100"
        alt="hero"
      />
    </>
  );
}
