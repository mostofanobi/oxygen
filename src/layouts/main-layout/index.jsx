import AppBar from "./app-bar";
import CTA from "./CTA";
import Footer from "./footer";

const MainLayout = ({ children }) => {
  return (
    <main className="relative min-h-screen flex flex-col justify-between">
      <AppBar />
      {children}
      <CTA />
      <Footer />
    </main>
  );
};

export default MainLayout;
