"use client";
import { toSentenceCase } from "@/helpers";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { LuChevronDown, LuDownloadCloud, LuMenu, LuX } from "react-icons/lu";
import { landingPages } from "@/assets/data";

import logoDark from "@/assets/images/logo-circle.png";
import logoLight from "@/assets/images/logo-circle.png";

const TopNavBar = ({ menuItems, position, hasDownloadButton }) => {
  const navbarRef = useRef(null);
  const hash = window.location.hash;
  const pathname = usePathname();
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      e.preventDefault();
      activeSection();
      if (navbarRef.current) {
        if (window.scrollY >= 80) navbarRef.current.classList.add("nav-sticky");
        else navbarRef.current.classList.remove("nav-sticky");
      }
    });

    const timeout = setTimeout(() => {
      if (hash) {
        const element = document.querySelector(hash);
        if (element) element.scrollIntoView({ behavior: "instant" });
      }
    }, 0);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", activeSection);
    };
  }, []);

  const [activation, setActivation] = useState(menuItems[0]);

  const activeSection = () => {
    const scrollY = window.scrollY;

    for (let i = menuItems.length - 1; i >= 0; i--) {
      const section = menuItems[i];
      const el = document.getElementById(section);
      if (el && el.offsetTop <= scrollY + 100) {
        setActivation(section);
        return;
      }
    }
  };

  return (
    <>
      <header
        ref={navbarRef}
        id="navbar"
        className={cn(
          position,
        "inset-x-0 top-0 z-[60] w-full border-b border-transparent bg-beige/70 transition-all duration-300 dark:bg-default-50/70 lg:bg-transparent [&.nav-sticky]:bg--beige/70 [&.nav-sticky]:shadow-md [&.nav-sticky]:backdrop-blur-3xl dark:[&.nav-sticky]:bg-default-50/80"
      )}
      >
        <div className="flex h-full items-center py-1">
          <div className="container">
            <nav className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
              <div className="flex w-full items-center justify-between lg:w-auto ">
                <Link href="/">
                  <Image
                    src={logoDark}
                    alt="logo"
                    height={60}
                    width={50}
                    className="flex h-12 dark:hidden"
                  />
                  <Image
                    src={logoLight}
                    alt="logo"
                    height={50}
                    width={50}
                    className="hidden h-12 dark:flex"
                  />
                </Link>
                <p className="px-2">Global Green Carbon</p>
              </div>
              <ul className="menu relative mx-auto hidden grow items-center justify-center lg:flex">
                {menuItems.map((item, idx) => {
                  return (
                    <li
                      key={idx}
                      className={cn(
                        "menu-item mr-20 text-default-800 transition-all duration-300 hover:text-primary [&.active]:text-primary",
                        activation === item && "active"
                      )}
                    >
                      <Link
                        className="inline-flex items-center rounded-full px-2 py-0.5 text-sm font-medium capitalize lg:text-base"
                        href={`#${item}`}
                      >
                        {toSentenceCase(item)}
                      </Link>
                    </li>
                  );
                })}
                             </ul>
              
            </nav>
          </div>
        </div>
      </header>

      {/* mobile menu */}
      <div
        id="mobile-menu"
        className="hs-overlay fixed bottom-0 left-0 top-0 z-[61] hidden h-screen w-full max-w-[270px] -translate-x-full transform border-r border-default-200 bg--beige transition-all [--body-scroll:true] [--overlay-backdrop:false] hs-overlay-open:translate-x-0 dark:bg-default-50"
        tabIndex={-1}
      >
        <div className="flex h-[74px] items-center justify-between border-b border-dashed border-default-200 px-4 transition-all duration-300">
          <Link href="/">
            <Image
              src={logoDark}
              alt="logo"
              height={100}
              width={200}
              className="flex h-24 dark:hidden"
            />
            <Image
              src={logoLight}
              alt="logo"
              height={100}
              width={200}
              className="hidden h-24 dark:flex"
            />
          </Link>
          <div data-hs-overlay="#mobile-menu" className="hs-collapse-toggle">
            <LuX size={24} />
          </div>
        </div>
        <div className="h-[calc(100%-4rem)] overflow-y-auto">
          <nav className="hs-accordion-group flex h-full w-full flex-col flex-wrap p-4">
            <ul className="space-y-1">
              {menuItems.map((item, idx) => {
                return (
                  <li
                    key={idx}
                    className={cn(
                      "rounded text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary [&.active]:bg-default-100 [&.active]:text-primary",
                      activation == `${item}` && "active"
                    )}
                  >
                    <a className="block w-full px-4 py-2.5" href={`#${item}`}>
                      {toSentenceCase(item)}
                    </a>
                  </li>
                );
              })}

              <li className="hs-accordion" id="landing-accordion">
                <Link
                  className="hs-accordion-toggle flex items-center rounded px-4 py-2.5 text-sm font-medium capitalize text-default-900 transition-all duration-300 hover:bg-default-100 hover:text-primary hs-accordion-active:bg-default-400/10 [&.active]:bg-default-100 [&.active]:text-primary"
                  href=""
                >
                  Landing
                  <LuChevronDown className="ms-auto size-5 transition-all hs-accordion-active:rotate-180" />
                </Link>
                <div
                  id="landing-accordion"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height]"
                >
                  <ul className="ps-2 pt-2">
                    {landingPages.map((item, idx) => {
                      return (
                        <li key={idx}>
                          <Link
                            className={cn(
                              "flex items-center rounded px-3 py-2 text-sm font-medium text-default-600 transition-all hover:bg-default-400/10 hover:text-default-700 [&.active]:text-primary",
                              pathname === item.link && "active"
                            )}
                            href={item.link}
                          >
                            {item.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopNavBar;
