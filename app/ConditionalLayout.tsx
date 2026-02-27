"use client";

import { usePathname } from "next/navigation";
import GradualBlurContainer from "@/components/providers/GradualBlurContainer";
import FadeContent from "@/components/ReactBits/FadeContent";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import LoadingScreen from "@/components/landing/loadingScreen/LoadingScreen";
import Navbar from "@/components/landing/navbar/Navbar";
import Sidebar from "@/components/landing/sidebar/Sidebar";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <>
      {isHomePage && <LoadingScreen />}
      <SmoothScrollProvider>
        <main className={`relative min-h-screen bg-black font-normal`}>
          <Navbar />
          <Sidebar />
          {isHomePage ? (
            <FadeContent blur={true} className="bg-black" duration={1000} delay={7600} easing="power2.out" initialOpacity={0}>
              {children}
            </FadeContent>
          ) : (
            <div className="pt-20">{children}</div>
          )}
        </main>
        {isHomePage && (
          <GradualBlurContainer
            target="page"
            position="bottom"
            height="5rem"
            strength={2}
            divCount={5}
            curve="bezier"
            exponential
            opacity={1}
          />
        )}
      </SmoothScrollProvider>
    </>
  );
}
