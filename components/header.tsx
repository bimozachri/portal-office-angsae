"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const layananDropdown = [
  { name: "Form Absensi", href: "#" },
  { name: "Form Cuti", href: "#" },
  { name: "Form Sakit", href: "#" },
  { name: "Form Lembur", href: "#" },
  { name: "Form Perjalanan Dinas", href: "#" },
  { name: "Form Klaim Operasional", href: "#" },
  { name: "Dezavasi's Sales Form", href: "#" },
  { name: "Form Pengajuan No. Surat", href: "#" },
  { name: "Absensi Digital", href: "/absensi-digital" },
]

const videoDropdown = [
  { name: "Sosialisasi ABAF", href: "/video-sosialisasi/sosialisasi-abaf" },
  { name: "Sosialisasi BPJS Kesehatan", href: "/video-sosialisasi/sosialisasi-bpjs" },
  { name: "Sosialisasi Absen Digital", href: "/video-sosialisasi/sosialisasi-absen-digital" },
  { name: "Sosialisasi Pengisian ABAF 2.0 - Manajemen Surat & Arsip", href: "/video-sosialisasi/sosialisasi-abaf-2" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (dropdown: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    setActiveDropdown(dropdown)
  }

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-card/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/image.png"
              alt="CV. Angsae Baru Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
            />
            <div className="hidden sm:block">
              <p className="font-semibold text-foreground text-sm">CV. Angsae Baru</p>
              <p className="text-xs text-muted-foreground">Portal Office</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <Link
              href="/"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              Beranda
            </Link>

            {/* Layanan Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("layanan")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted">
                Layanan
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "layanan" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "layanan" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-card border border-border rounded-lg shadow-lg py-2 animate-in fade-in-0 zoom-in-95 duration-200">
                  {layananDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Video Sosialisasi Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter("video")} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted">
                Video Sosialisasi
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === "video" ? "rotate-180" : ""}`}
                />
              </button>
              {activeDropdown === "video" && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-card border border-border rounded-lg shadow-lg py-2 animate-in fade-in-0 zoom-in-95 duration-200">
                  {videoDropdown.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted"
            >
              Kontak
            </a>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button className="bg-primary hover:bg-secondary text-primary-foreground">Masuk Portal</Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Beranda
              </Link>

              {/* Mobile Layanan Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "layanan" ? null : "layanan")}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  Layanan
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileDropdown === "layanan" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileDropdown === "layanan" && (
                  <div className="ml-4 border-l-2 border-muted pl-4 py-2 space-y-1">
                    {layananDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Video Dropdown */}
              <div>
                <button
                  onClick={() => setMobileDropdown(mobileDropdown === "video" ? null : "video")}
                  className="w-full flex items-center justify-between px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                >
                  Video Sosialisasi
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${mobileDropdown === "video" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileDropdown === "video" && (
                  <div className="ml-4 border-l-2 border-muted pl-4 py-2 space-y-1">
                    {videoDropdown.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a
                href="#contact"
                className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontak
              </a>

              <Button className="mt-2 mx-4 bg-primary hover:bg-secondary text-primary-foreground">Masuk Portal</Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
