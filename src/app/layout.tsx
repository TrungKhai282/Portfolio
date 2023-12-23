import type { Metadata } from "next";
import React from "react";
import "@/common/styles/global.scss";
import "animate.css";
import Layout from "@/layout";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Frontend Engineer porfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
