'use client';

import { useActiveSection } from '@/hooks/use-active-section';
import { NAV_ITEMS } from '@/lib/constants';
import { cn, smoothScrollTo } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Home, User, Briefcase, Code2, FolderKanban, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import ResumeDownloadButton from './resume-download-button';
import { ThemeToggle } from './theme-toggle';

const NAV_ICONS = {
  '#home': Home,
  '#about': User,
  '#experience': Briefcase,
  '#skills': Code2,
  '#projects': FolderKanban,
  '#contact': Mail,
};

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/85 dark:bg-background/85 backdrop-blur-xl border-b border-border/80 shadow-xs'
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
          className="flex items-center group font-sans"
        >
          <span className="text-xl font-semibold tracking-tight text-foreground">
            Uzair
          </span>
        </a>

        {/* Desktop Nav — centered pill */}
        <nav className="hidden md:flex items-center gap-0.5 bg-background/90 dark:bg-card/90 backdrop-blur-xl border border-border rounded-sm px-2 py-1 shadow-xs">
          {NAV_ITEMS.map((item) => {
            const Icon = NAV_ICONS[item.href as keyof typeof NAV_ICONS] || Home;
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
                  'relative px-3 py-1.5 rounded-sm text-xs font-medium transition-all duration-200 flex items-center gap-1.5',
                  isActive
                    ? 'text-foreground font-medium'
                    : 'text-muted-foreground hover:text-foreground',
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-secondary dark:bg-zinc-800 border border-border/80 dark:border-zinc-700/60 rounded-sm shadow-xs"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="h-3.5 w-3.5 relative z-10" />
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
          <div className="ml-2 flex items-center gap-1.5 border-l border-border/60 dark:border-zinc-700/50 pl-2">
            <ResumeDownloadButton />
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Header Right Controls */}
        <div className="flex md:hidden items-center gap-2">
          <ResumeDownloadButton />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
