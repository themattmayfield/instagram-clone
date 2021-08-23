import Layout from "@/components/Layout";
import Header from "../components/Header";
import Stories from "../components/Stories";
import Feed from "../components/Feed";

export default function Home() {
  return (
    <Layout>
      <Header />
      <main className="flex-1 overflow-scroll">
        <Stories />
        <Feed />
      </main>
    </Layout>
  );
}
