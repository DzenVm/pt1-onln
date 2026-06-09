import Link from "next/link";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="brand" aria-label={`${site.name} — início`}>
          <Logo />
          <span>{site.name}</span>
        </Link>

        <nav className="nav" aria-label="Navegação principal">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-cta">
          <Link className="btn btn-primary" href="/#casinos">
            Ver casinos
          </Link>
        </div>
      </div>
    </header>
  );
}
