import HomeTree from "../../components/HomeTree";
import paginasValidas from "../../mocks/paginasValidas.json";
import { useRouter } from "next/router";
import Error from "../404";
import { BackgroundTemplate } from "../../components/BackgroundTemplate";
import { Tree } from "../../types/Tree";

export async function getStaticProps({ params }: any) {
  const object = await paginasValidas.find(
    (pagina) => pagina.endpoint === params.endpoint
  );
  const notFound = object ? false : true;
  return {
    props: {
      object,
    },
    notFound,
  };
}

export async function getStaticPaths() {
  return {
    fallback: true,
    paths: [],
  };
}

export default function TreeHomepage({
  object,
  notFound,
}: {
  object: Tree;
  notFound: boolean;
}) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <img
        className="img-fluid"
        src={BackgroundTemplate({ color: "#F6F6F6" })}
        style={{
          zIndex: -1,
          minHeight: "600px",
          objectFit: "cover",
          objectPosition: "center",
        }}
        alt="loading..."
      ></img>
    );
  }

  if (notFound) {
    return <Error />;
  }

  return <HomeTree treeObject={object} />;
}
