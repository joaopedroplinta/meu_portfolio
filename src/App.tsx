import "./site/site.css";
import { useEffect } from "react";
import { Route, Routes, useLocation, Navigate } from "react-router-dom";
import { Header, Footer } from "./site/Layout";
import { Home } from "./site/Home";
import { CasePage, NotFound } from "./site/CasePage";

function ScrollManager() {
  const { key, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0, behavior: "instant" });
  }, [key, hash]);
  return null;
}

export default function App() {
  return (
    <>
    <a className="s-skip" href="#main">
      Pular para o conteúdo
    </a>
    <ScrollManager />
    <Header />
    <main id="main" tabIndex={-1}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos/:slug" element={<CasePage />} />
        <Route path="/projetos" element={<Navigate to="/#trabalho" replace />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
    <Footer />
    </>
  );
}
