import { REM } from "next/font/google";
import Image from "next/image";
import NextTopLoader from "nextjs-toploader";
import dynamic from "next/dynamic";
import { Toaster } from "sonner";

import "@/assets/css/style.css";

const AppProvidersWrapper = dynamic(
  () => import("@/components/AppsProviderWrapper"),
  { ssr: false }
);
const BackToTop = dynamic(() => import("@/components/BackToTop"));

const rem = REM({
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
  adjustFontFallback: false,
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default:
      "global green carbon",
    template:
      "%s | global green carbon",
  },
  description:
    "Global Green Carbon - Empowering The Planet With Industrial Hemp",
};

const splashScreenStyles = `
#splash-screen {
  position: fixed;
  top: 50%;
  left: 50%;
  background: white;
  display: flex;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  z-index: 9999;
  opacity: 1;
  transition: all 15s linear;
  overflow: hidden;
}

#splash-screen.remove {
  animation: fadeout 0.7s forwards;
  z-index: 0;
}

@keyframes fadeout {
  to {
    opacity: 0;
    visibility: hidden;
  }
}
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <style>{splashScreenStyles}</style>
      </head>

      <body className={rem.className}>
        <div id="splash-screen">
          <Image
            alt="Logo"
            width={355}
            height={83}
            src={"/logo-dark.png"}
            style={{ height: "10%", width: "auto" }}
          />
        </div>
        <NextTopLoader color="#ea580c" showSpinner={false} />
        <div id="__next_splash">
          <AppProvidersWrapper>
            {children}
            <BackToTop />
            <Toaster richColors />
          </AppProvidersWrapper>
        </div>
      </body>
    </html>
  );
}
