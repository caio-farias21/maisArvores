import HomeTree from "../../components/HomeTree";
import paginasValidas from "../../mocks/paginasValidas.json";
import { useRouter } from "next/router";
import Error from "../404";
import { MainBackground } from "../../components/MainBackground";

export async function getStaticProps({ params }) {
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

export default function Tree({ object, notFound }) {
  const router = useRouter();

  if (router.isFallback) {
    return <MainBackground color={"#F6F6F6"} />;
  }

  if (notFound) {
    return <Error />;
  }

  return <HomeTree treeObject={object} />;
}
