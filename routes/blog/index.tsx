import { Head } from "$fresh/runtime.ts";
import Container from "../../components/Container.tsx";
import Header from "../../components/Header.tsx";
import Layout from "../../components/Layout.tsx";
import Link from "../../components/Link.tsx";
import List from "../../components/List.tsx";

export default function HelloWorld() {
  const title = "Blog";
  return (
    <>
      <Head>
        <title>karashiiro - {title}</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <h2 class="text-2xl">{title}</h2>
          <List>
            <li><Link href="/blog/hello-world">Hello, world</Link></li>
          </List>
        </Container>
      </Layout>
    </>
  );
}