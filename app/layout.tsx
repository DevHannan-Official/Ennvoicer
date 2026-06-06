import { Geist_Mono, Inter, Faculty_Glyphic } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

const facultyGlyphic = Faculty_Glyphic({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: "400",
})

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Ennvoicer - Professional invoices in no time",
    template: "%s | Ennvoicer",
  },
  description:
    "Ennvoicer is a powerful, user-friendly and open-source invoicing application designed to help businesses create professional invoices quickly and efficiently. With its intuitive interface and robust features, Ennvoicer streamlines the invoicing process, allowing users to generate, manage, and track invoices with ease. Whether you're a freelancer, small business owner, or part of a larger organization, Ennvoicer provides the tools you need to stay organized and get paid faster.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        inter.variable,
        facultyGlyphic.variable
      )}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
