"use client";
import "../globals.css";
import TaskbarContextWrapper from "./taskbarcontext";
import localFont from "next/font/local";
const MSFont = localFont({ src: "../../../public/fonts/ms-sans-serif.ttf" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div id="desktop" className={"h-full flex-col " + MSFont.className}>
      <TaskbarContextWrapper>{children}</TaskbarContextWrapper>
    </div>
  );
}
