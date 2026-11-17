'use client';

import { useActiveSection } from '@/hooks/use-active-section';
import { NAV_ITEMS } from '@/lib/constants';
import { cn, smoothScrollTo } from '@/lib/utils';
import { useEffect, useState } from 'react';
import ResumeDownloadButton from './resume-download-button';
import { BrandMark } from '@/components/ui/brand-mark';
import { PwaInstallButton } from '@/components/pwa-install-button';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const activeSection = useActiveSection();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    smoothScrollTo(href, 72);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/95 text-foreground shadow-sm backdrop-blur-xl'
          : 'bg-transparent',
      )}
    >
      <div className="container mx-auto max-w-7xl flex h-16 items-center justify-between px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#home');
          }}
          className={cn("flex items-center font-sans", scrolled ? "text-foreground" : "text-white")}
        >
          <BrandMark className="h-9 w-9" label />
        </a>

        <nav className={cn("hidden items-center gap-1 rounded-full border p-1 backdrop-blur-xl md:flex", scrolled ? "border-border bg-card/80" : "border-white/15 bg-white/[.06]")}>
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.slice(1);

            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className={cn(
                  'relative rounded-full px-3.5 py-2 text-xs font-medium transition-colors lg:px-4 lg:text-sm',
                  isActive
                    ? scrolled ? 'bg-secondary text-foreground' : 'bg-white/10 text-white'
                    : scrolled ? 'text-muted-foreground hover:text-foreground' : 'text-white/65 hover:text-white',
                )}
              >
                {item.name}
              </a>
            );
          })}
          <div className={cn("ml-1 flex items-center gap-2 border-l pl-3", scrolled ? "border-border" : "border-white/20")}>
            <ResumeDownloadButton onDark={!scrolled} />
          </div>
        </nav>

        {/* Mobile Header Right Controls */}
        <div className="flex md:hidden items-center gap-2">
          <PwaInstallButton onDark={!scrolled} />
          <ResumeDownloadButton onDark={!scrolled} />
        </div>
      </div>
    </header>
  );
}
