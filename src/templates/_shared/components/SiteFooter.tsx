import type { TemplateContent } from "../../types";

interface SiteFooterProps {
  business: TemplateContent["business"];
  nav: TemplateContent["nav"];
  footer: TemplateContent["footer"];
}

/** Footer común del catálogo. La firma HostPro usa siempre el amarillo de marca #FFDE59. */
export default function SiteFooter({ business, nav, footer }: SiteFooterProps) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-tpl-footer-bg text-tpl-footer-text">
      <div className="tpl-container grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="text-xl font-extrabold">{business.name}</p>
          <p className="mt-3 max-w-xs text-tpl-footer-muted">{footer.tagline}</p>
        </div>

        <nav aria-label="Pie de página">
          <p className="font-semibold">Secciones</p>
          <ul className="mt-3 grid grid-cols-2 gap-2 text-tpl-footer-muted">
            {nav.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="inline-block py-1 hover:text-tpl-footer-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-semibold">Síguenos</p>
          <ul className="mt-3 space-y-2 text-tpl-footer-muted">
            {business.social.map((item) => (
              <li key={item.href}>
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="inline-block py-1 hover:text-tpl-footer-text">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="tpl-container flex flex-col gap-3 py-6 text-sm text-tpl-footer-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {business.name}. {footer.legal}
          </p>
          <p>
            Sitio web por{" "}
            <a
              href="https://www.hostpropanama.com"
              target="_blank"
              rel="noopener"
              className="font-bold text-hostpro-yellow underline-offset-4 hover:underline"
            >
              HostPro Panamá
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
