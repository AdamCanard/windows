"use client";
import TaskbarContextWrapper from "./taskbarcontext";
import localFont from "next/font/local";

const MSFont = localFont({ src: "../public/fonts/ms-sans-serif.ttf" });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div id="desktop" className={"h-full flex-col " + MSFont.className}>
          <TaskbarContextWrapper>{children}</TaskbarContextWrapper>
        </div>
      </body>
    </html>
  );
}
