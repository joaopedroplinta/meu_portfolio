import { Link } from "react-router-dom";
import { Icon } from "./UI";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} João Pedro Plinta</p>
        <p>João Pedro no código. Pinguim no apelido.</p>
        <Link to="/#hero">
          Voltar ao início <Icon name="arrow-up-right" />
        </Link>
      </div>
    </footer>
  );
}
