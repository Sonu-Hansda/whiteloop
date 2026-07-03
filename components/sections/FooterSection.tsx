const links = [
  { label: "Why WhiteLoop", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "mailto:hello@whiteloop.ai" },
];

const FooterSection = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="text-xl font-display font-bold text-foreground tracking-tight">
            Whiteloop <span className="neon-text">Media</span>
          </a>

          <div className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                {l.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-muted-foreground">hello@whiteloop.ai</p>
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8">
          © {new Date().getFullYear()} Whiteloop Media. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default FooterSection;
