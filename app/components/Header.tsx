'use client';

import Link from 'next/link';
import { useState, useEffect, useRef, MouseEvent } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

interface NavItemDefinition {
  label: string;
  href: string;
  subItems?: { label: string; href: string }[];
  bgClass?: string;
  textClass?: string;
  activeBgClass?: string;
  activeTextClass?: string;
}

const SubNavItem = ({
  item,
  isActive,
  isParentHovered,
  index,
}: {
  item: { label: string; href: string };
  isActive: (href: string) => boolean;
  isParentHovered: boolean;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mounted, setMounted] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const active = isActive(item.href);

  useEffect(() => {
    // Only set mounted after first render flush
    const raf1 = requestAnimationFrame(() => {
      const raf2 = requestAnimationFrame(() => setMounted(true));
      return () => cancelAnimationFrame(raf2);
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    itemRef.current.style.setProperty('--mouse-x', `${x}px`);
    itemRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const transformX = !mounted ? '20px' : (isParentHovered ? '0px' : '-20px');

  return (
    <li
      className="flex justify-end w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"
      style={{
        opacity: (mounted && isParentHovered) ? 1 : 0,
        transform: `translateX(${transformX})`,
        pointerEvents: isParentHovered ? 'auto' : 'none',
        transitionDelay: isParentHovered ? `${index * 50}ms` : '0ms',
      }}
    >
      <Link href={item.href} className="flex justify-end block">
        <div
          ref={itemRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseMove={handleMouseMove}
          className={`
            relative flex justify-end items-center
            min-h-[2.5rem] px-[1.1rem]
            rounded-full
            backdrop-blur-md
            shadow-sm hover:shadow-md
            transition-all duration-300 whitespace-nowrap overflow-hidden
            ${active ? 'bg-black text-white' : 'bg-gray-100 text-gray-900'}
          `}
        >
          {/* Fill Animation Element */}
          <span
            className={`
              absolute rounded-full pointer-events-none transition-transform ease-out
              ${active ? 'bg-gray-100' : 'bg-black'}
              ${isHovered ? 'duration-400' : 'duration-250'}
            `}
            style={{
              left: 'var(--mouse-x)',
              top: 'var(--mouse-y)',
              width: '250%',
              paddingBottom: '250%',
              transform: isHovered ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
              zIndex: 0
            }}
          />
          <span
            className={`
              relative z-10 text-[14px] font-medium transition-colors duration-300
              ${active && isHovered ? '!text-gray-900' : ''}
              ${!active && isHovered ? '!text-white' : ''}
            `}
          >
            {item.label}
          </span>
        </div>
      </Link>
    </li>
  );
};

const NavItem = ({
  item,
  index,
  isScrolled,
  isActive,
  isAnyHovered,
}: {
  item: NavItemDefinition;
  index: number;
  isScrolled: boolean;
  isActive: (href: string) => boolean;
  isAnyHovered: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isRendered, setIsRendered] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const active = isActive(item.href);

  const bgClass = item.bgClass || 'bg-white border border-gray-100';
  const textClass = item.textClass || 'text-gray-900';
  const activeBgClass = item.activeBgClass || 'bg-black';
  const activeTextClass = item.activeTextClass || 'text-white';

  useEffect(() => {
    if (isHovered) {
      setIsRendered(true);
    } else {
      const timer = setTimeout(() => setIsRendered(false), 500); // Wait for exit animation
      return () => clearTimeout(timer);
    }
  }, [isHovered]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!itemRef.current) return;
    const rect = itemRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    itemRef.current.style.setProperty('--mouse-x', `${x}px`);
    itemRef.current.style.setProperty('--mouse-y', `${y}px`);
  };

  const showText = !isScrolled || isAnyHovered;

  return (
    <li
      className="flex flex-col items-end w-full relative group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={item.href} className="relative block w-full flex justify-end" aria-label={item.label}>
        <div
          ref={itemRef}
          onMouseMove={handleMouseMove}
          className={`
            relative flex justify-end items-center
            min-h-[2.75rem] min-w-[2.75rem]
            rounded-full
            backdrop-blur-md
            shadow-sm hover:shadow-md
            overflow-hidden
            ${active ? `${activeBgClass} ${activeTextClass}` : `${bgClass} ${textClass}`}
            ${index === 1 ? "mt-3" : ""}
          `}
          style={{
            maxWidth: showText ? '240px' : '2.75rem',
            padding: showText ? '0 0.825rem' : '0',
            transition: showText
              ? 'max-width 684ms cubic-bezier(0.25,0.1,0.25,1.0), padding 684ms cubic-bezier(0.25,0.1,0.25,1.0), box-shadow 200ms'
              : 'max-width 684ms cubic-bezier(0.25,0.1,0.25,1.0), padding 684ms cubic-bezier(0.25,0.1,0.25,1.0), box-shadow 200ms',
          }}
        >
          {/* Fill Animation Element */}
          <span
            className={`
              absolute rounded-full pointer-events-none transition-transform ease-out
              ${active ? bgClass : activeBgClass}
              ${isHovered ? 'duration-400' : 'duration-250'}
            `}
            style={{
              left: 'var(--mouse-x)',
              top: 'var(--mouse-y)',
              width: '250%',
              paddingBottom: '250%',
              transform: isHovered ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0)',
              zIndex: 0
            }}
          />
          <span
            className={`
              relative z-10 text-[15.4px] font-bold whitespace-nowrap overflow-hidden
              ${active && isHovered ? `!${textClass}` : ''}
              ${!active && isHovered ? `!${activeTextClass}` : ''}
            `}
            style={{
              opacity: showText ? 1 : 0,
              maxWidth: showText ? '240px' : '0px',
              transition: showText
                ? 'opacity 547ms ease, max-width 684ms cubic-bezier(0.25,0.1,0.25,1.0), color 0ms'
                : 'opacity 547ms ease, max-width 684ms cubic-bezier(0.25,0.1,0.25,1.0), color 0ms',
            }}
          >
            {item.label}
          </span>
        </div>
      </Link>

      {/* Render sub items on hover for desktop */}
      {item.subItems && isRendered && (
        <ul className={`absolute right-[calc(100%+0.5rem)] pr-2 top-0 flex flex-col items-end gap-y-1 z-40 w-max ${isHovered ? 'pointer-events-auto' : 'pointer-events-none'}`}>
          {item.subItems.map((sub, i) => (
            <SubNavItem key={i} item={sub} isActive={isActive} isParentHovered={isHovered} index={i} />
          ))}
        </ul>
      )}
    </li>
  );
};

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAnyHovered, setIsAnyHovered] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null);
  const pathname = usePathname();

  // Track scroll position
  const lastScrollY = useRef(0);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY <= 400) {
        // Force text view when at the very top
        setIsScrolled(false);
      } else if (currentScrollY > lastScrollY.current) {
        // Scrolling Down -> Become circles
        setIsScrolled(true);
      } else {
        // Scrolling Up -> Show text
        setIsScrolled(false);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: NavItemDefinition[] = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    {
      label: 'Services',
      href: '/services',
      subItems: [
        { label: 'Web design and development', href: '/services/web-design-and-development' },
        { label: 'Graphic Design', href: '/services/graphic-design' },
        { label: 'Motion Graphics', href: '/services/motion-graphics' }
      ]
    },
    { label: 'Work', href: '/work' },
    {
      label: 'Start a project',
      href: '/start-project',
      bgClass: 'bg-[#ff5a26]',
      textClass: 'text-white',
      activeBgClass: 'bg-black',
      activeTextClass: 'text-white'
    },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <header className="fixed top-0 left-0 w-full py-[0.875rem] px-6 z-30">
      <div className="relative w-full">
        {/* Logo */}
        <Link
          href="/"
          className={`
            absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2
            transition-all duration-500 ease-in-out
            ${isScrolled && !isAnyHovered && !isMenuOpen ? 'opacity-0 pointer-events-none -translate-y-4' : 'opacity-100 pointer-events-auto translate-y-0'}
          `}
          aria-label="Home"
        >
          <div className="w-[8.0625rem] h-auto lg:w-[12rem] flex justify-center">
            <Image
              width={200}
              height={50}
              src="/tdw-logo.svg"
              alt="Logo"
              className="w-full h-auto"
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="absolute top-0 right-0 hidden md:block">
          <ul
            className="flex flex-col justify-end items-end gap-y-1"
            onMouseEnter={() => setIsAnyHovered(true)}
            onMouseLeave={() => setIsAnyHovered(false)}
          >
            {navItems.map((item, index) => (
              <NavItem
                key={item.label}
                item={item}
                index={index}
                isScrolled={isScrolled}
                isActive={isActive}
                isAnyHovered={isAnyHovered}
              />
            ))}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <div className="absolute top-0 right-0 flex flex-col justify-end items-end z-10 md:hidden">
          <div className="relative flex flex-col justify-end items-end">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative flex justify-end items-center min-w-[2.75rem] min-h-[2.75rem] px-[1.1rem] rounded-full z-20 bg-gray-900 text-white shadow-sm"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className="text-[15.4px] font-medium">
                {isMenuOpen ? "Close" : "Menu"}
              </span>
            </button>

            {isMenuOpen && (
              <nav className="mt-3 w-full pl-8">
                <ul className="flex flex-col justify-end items-end gap-1">
                  {navItems.map((item, index) => {
                    const bgClass = item.bgClass || 'bg-white border border-gray-100';
                    const textClass = item.textClass || 'text-gray-900';
                    const activeBgClass = item.activeBgClass || 'bg-black';
                    const activeTextClass = item.activeTextClass || 'text-white';
                    
                    return (
                      <li key={item.label} className="relative flex flex-col items-end w-full">
                        <div className="flex w-full justify-end items-center">
                          <Link
                            href={item.href}
                            className="relative block"
                            aria-label={item.label}
                            onClick={() => {
                              if (!item.subItems) setIsMenuOpen(false);
                            }}
                          >
                            <div
                              className={`
                                relative flex justify-end items-center
                                h-[2.75rem] px-[1.1rem] rounded-full
                                backdrop-blur-md
                                transition-all duration-300
                                shadow-sm
                                ${isActive(item.href) ? `${activeBgClass} ${activeTextClass}` : `${bgClass} ${textClass} hover:brightness-110`}
                                ${index === 2 ? "mt-3" : ""}
                              `}
                            >
                              <span className="text-[15.4px] font-medium">
                                {item.label}
                              </span>
                            </div>
                          </Link>
                          {item.subItems && (
                            <button
                              onClick={() => setExpandedMobileItem(expandedMobileItem === item.label ? null : item.label)}
                              className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-900"
                            >
                              <span className="text-xl leading-none">{expandedMobileItem === item.label ? '-' : '+'}</span>
                            </button>
                          )}
                        </div>
                        
                        {/* Mobile Submenu Expansion */}
                        {item.subItems && expandedMobileItem === item.label && (
                          <ul className="flex flex-col items-end gap-1 mt-2 mb-2 pr-10">
                            {item.subItems.map((subItem) => (
                              <li key={subItem.label}>
                                <Link
                                  href={subItem.href}
                                  className="relative block"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <div
                                    className={`
                                      relative flex justify-end items-center
                                      h-[2.5rem] px-[1.1rem] rounded-full
                                      backdrop-blur-md
                                      transition-all duration-300
                                      shadow-sm
                                      ${isActive(subItem.href) ? 'bg-black text-white' : 'bg-gray-100 text-gray-900 hover:brightness-110'}
                                    `}
                                  >
                                    <span className="text-[14px] font-medium">
                                      {subItem.label}
                                    </span>
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
