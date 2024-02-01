const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center h-10">
      <p className="text-xs">
        {new Date().getFullYear()} -{' '}
        <a
          href="https://www.linkedin.com/in/andy-nguyen-798610126/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Andy T. Nguyen
        </a>
      </p>
    </footer>
  );
};

export default Footer;
