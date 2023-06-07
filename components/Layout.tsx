import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="container my-3">{children}</main>
      <Footer />
    </>
  );
}
