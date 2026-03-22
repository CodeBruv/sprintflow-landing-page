const links = ["Features", "Pricing", "About", "Blog", "Contact"];

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-10 border-t border-border">
      <div className="section-container flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-lg font-bold tracking-tight text-foreground">
          SprintFlow
        </span>

        <nav className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a
              key={l}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {l}
            </a>
          ))}
        </nav>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} SprintFlow. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
