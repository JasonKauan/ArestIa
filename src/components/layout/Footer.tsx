import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CONTACT, SITE, SOCIAL, whatsappLink } from "@/lib/constants";
import { LEGAL_NAV, MAIN_NAV, PRODUCTS } from "@/lib/navigation";
import { Logo } from "./Logo";

/** Ano atual, pré-renderizado e cacheado (o Next 16 com cacheComponents não aceita new Date() solto). */
async function CurrentYear() {
  "use cache";
  return new Date().getFullYear();
}

const colTitle = "mb-5 font-mono text-xs uppercase tracking-[0.2em] text-cyan/80";
const colLink = "text-sm text-mist/65 transition-colors duration-200 hover:text-mist";

export function Footer() {
  const whatsapp = whatsappLink();
  const contactLinks = [
    CONTACT.email && { label: CONTACT.email, href: `mailto:${CONTACT.email}`, external: false },
    whatsapp && { label: "WhatsApp comercial", href: whatsapp, external: true },
    SOCIAL.linkedin && { label: "LinkedIn", href: SOCIAL.linkedin, external: true },
    SOCIAL.instagram && { label: "Instagram", href: SOCIAL.instagram, external: true },
  ].filter(Boolean) as { label: string; href: string; external: boolean }[];

  return (
    <footer className="border-t border-mist/10 bg-navy text-mist">
      <Container className="py-16 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-6 text-lg font-medium tracking-tight text-mist">{SITE.slogan}</p>
            <p className="mt-3 text-sm leading-relaxed text-mist/55">
              Soluções que conectam inteligência artificial, automação e gestão empresarial,
              transformando processos complexos em experiências simples e eficientes.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h2 className={colTitle}>Navegação</h2>
            <ul className="flex flex-col gap-3">
              {MAIN_NAV.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className={colLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Soluções">
            <h2 className={colTitle}>Soluções</h2>
            <ul className="flex flex-col gap-3">
              {PRODUCTS.map((product) => (
                <li key={product.slug}>
                  <Link href={product.href} className={colLink}>
                    {product.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {contactLinks.length > 0 && (
            <div>
              <h2 className={colTitle}>Contato</h2>
              <ul className="flex flex-col gap-3">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={colLink}
                      {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-mist/10 pt-8 text-[13px] text-mist/45 md:flex-row md:items-center md:justify-between">
          <p>
            © <CurrentYear /> {SITE.name}. Todos os direitos reservados.
          </p>
          <ul className="flex gap-6">
            {LEGAL_NAV.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-mist">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
