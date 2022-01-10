import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Layout({ children }) {
  return (
    <div className="relative w-screen">
      <Navbar />
      <section className="absolute top-0 h-96 -z-10">
        <img src="/icons/top_left_shape.svg" />
      </section>
      <main className="px-16">
        {children}
        <Footer />
      </main>
    </div>
  );
}
