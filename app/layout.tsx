import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Disha Computer Institute Yavatmal", description: "Career-focused software and computer training on Godhani Road, Yavatmal. Explore courses, batches, placements and online admission.", icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" } };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
