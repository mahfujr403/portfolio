const Footer = () => {
  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Md. Mahfujur Rahman. All rights reserved.
          </div>
          <div className="text-sm text-muted-foreground">
            Undergraduate Researcher • Varendra University, Bangladesh
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
