const Footer = () => (
  <footer className="border-t border-border py-10">
    <div className="container flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
      <div className="flex items-center gap-2">
        <span className="inline-block w-6 h-6 rounded-md bg-gradient-primary" />
        <span className="font-semibold text-foreground">Restasat Solutions Hub</span>
      </div>
      <p>© {new Date().getFullYear()} Restasat. Todos los derechos reservados.</p>
    </div>
  </footer>
);

export default Footer;
