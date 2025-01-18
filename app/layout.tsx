import './globals.css'
import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import {AppSidebar} from "@/components/AppSidebar";
import {SidebarProvider} from "@/components/ui/sidebar";
import {ThemeProvider} from "@/components/ThemeProvider";

const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ weight: "500", style: 'normal', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'TokTik',
  description: 'A basic TikTok clone built with Next.js and Tailwind CSS',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary`}>
      <ThemeProvider defaultTheme={"system"}>
          <SidebarProvider>
            <AppSidebar />
              {children}
          </SidebarProvider>
      </ThemeProvider>
      </body>
    </html>
  )
}

