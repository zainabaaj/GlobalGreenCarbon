import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full border-t border-default-200 bg-white py-4 dark:bg-default-50">
      <div className="container">
        <div className="grid items-center gap-6 lg:grid-cols-2">
          <p className="text-center text-default-900 lg:text-start">
            {new Date().getFullYear()} © GlobalGreenCarbon. All rights reserverd.
          </p>
          <div className="hidden justify-center gap-6 text-center lg:flex lg:justify-end">
            <Link href="" className="font-medium text-default-500">
              Terms
            </Link>
            <Link href="" className="font-medium text-default-500">
              Privacy
            </Link>
            <Link href="" className="font-medium text-default-500">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
