import Head from "./Head";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Head />

      <div className="flex flex-col h-screen w-screen bg-black">
        {children}
        <Footer />
      </div>
    </>
  );
}
