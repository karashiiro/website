import { Head } from "$fresh/runtime.ts";
import Container from "../../components/Container.tsx";
import Header from "../../components/Header.tsx";
import Layout from "../../components/Layout.tsx";

export default function HelloWorld() {
  const title = "Hello, world";
  return (
    <>
      <Head>
        <title>karashiiro - {title}</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <h2 class="text-2xl">{title}</h2>
          <div class="h-4" />
          <p></p>
        </Container>
      </Layout>
    </>
  );
}