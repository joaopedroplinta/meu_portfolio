import { Icon } from "./UI";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} João Pedro Plinta</p>
        <p>React, TypeScript e atenção aos detalhes.</p>
        <a href="#hero">
          Voltar ao início <Icon name="arrow-up-right" />
        </a>
      </div>
    </footer>
  );
}
