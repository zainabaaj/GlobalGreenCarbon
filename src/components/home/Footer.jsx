import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative border-t border-default-200">
      <div className="container relative">
        <p className="py-6 text-center font-medium text-default-900">
          {new Date().getFullYear()} © GlobalGreenCarbon. All Rights Reserverd.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
