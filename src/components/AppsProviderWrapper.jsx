"use client";
import { LayoutProvider } from "@/context";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const handleChangeTitle = () => {
  if (document.visibilityState == "hidden")
    document.title = "GGC";
  else
    document.title =
      "Global Green Carbon - Empowering The Planet With Industrial Hemp";
};

const AppsProviderWrapper = ({ children }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (document) {
      const e = document.querySelector("#__next_splash");
      if (e?.hasChildNodes()) {
        document.querySelector("#splash-screen")?.classList.add("remove");
      }
      e?.addEventListener("DOMNodeInserted", () => {
        document.querySelector("#splash-screen")?.classList.add("remove");
      });
    }

    import("preline/preline");

    document.addEventListener("visibilitychange", handleChangeTitle);
    return () => {
      document.removeEventListener("visibilitychange", handleChangeTitle);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (window.HSStaticMethods) window.HSStaticMethods.autoInit();
    }, 400);
  }, [pathname]);

  return (
    <SessionProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </SessionProvider>
  );
};

export default AppsProviderWrapper;
