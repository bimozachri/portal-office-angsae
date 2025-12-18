"use client"

import { Building2, Users, FileCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Trigger animation on mount
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16 md:py-24"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 transition-all duration-700 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <Building2 className="h-4 w-4" />
            <span>Portal Layanan Digital</span>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-tight mb-6 text-balance transition-all duration-700 ease-out delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Portal Office <span className="text-primary">CV. Angsae Baru</span>
          </h1>

          {/* Description */}
          <p
            className={`text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty transition-all duration-700 ease-out delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Akses seluruh layanan digital perusahaan dalam satu portal terpadu. Kelola form karyawan, absensi, dan
            administrasi dengan mudah.
          </p>

          {/* Stats */}
          <div
            className={`flex flex-wrap justify-center gap-8 md:gap-12 transition-all duration-700 ease-out delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">5+</p>
                <p className="text-sm text-muted-foreground">Layanan Digital</p>
              </div>
            </div>
            <div className="flex items-center gap-3 group">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 transition-transform duration-300 group-hover:scale-110">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">100+</p>
                <p className="text-sm text-muted-foreground">Karyawan Aktif</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
