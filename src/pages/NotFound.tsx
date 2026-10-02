import { Link } from "react-router-dom";
import { Icon } from "../components/UI";
export function NotFound() {
  return <section className="not-found container"><p>404</p><h1>Por aqui, só gelo.</h1><p>Esta página não existe. Os projetos estão na página inicial.</p><Link className="button button-primary" to="/">Voltar ao início <Icon name="arrow-right" /></Link></section>;
}
