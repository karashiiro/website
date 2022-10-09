import { Head } from "$fresh/runtime.ts";
import Container from "../components/Container.tsx";
import Header from "../components/Header.tsx";
import Layout from "../components/Layout.tsx";
import Link from "../components/Link.tsx";
import List from "../components/List.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>karashiiro</title>
      </Head>
      <Layout>
        <Container>
          <Header />
          <h2 class="text-lg">Find me at</h2>
          <List>
            <li><Link href="https://github.com/karashiiro">GitHub</Link></li>
            <li><Link href="https://twitter.com/karashiiro1">Twitter</Link></li>
          </List>
          <div class="h-4"></div>
          <h2 class="text-lg">Projects</h2>
          <List>
            <li><Link href="https://github.com/Universalis-FFXIV">Universalis</Link></li>
            <li><Link href="https://github.com/PrimaShouji">Prima</Link></li>
            <li><Link href="https://github.com/velcro-xiv">Velcro</Link></li>
          </List>
        </Container>
      </Layout>
    </>
  );
}
