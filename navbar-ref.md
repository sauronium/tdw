// components/Header.tsx

'use client';

import Link from'next/link';

import { useState, useEffect, useRef, MouseEvent } from'react';

import { usePathname } from'next/navigation';

import Image from'next/image';

constSubNavItem= ({

  item,

  isActive,

  isParentHovered,

  index,

}: {

  item: { label:string; href:string };

  isActive: (href:string) =>boolean;

  isParentHovered:boolean;

  index:number;

}) => {

  const [isHovered, setIsHovered] =useState(false);

  const [mounted, setMounted] =useState(false);

  constitemRef=useRef`<HTMLDivElement>`(null);

  constactive=isActive(item.href);

  useEffect(() => {

    // Only set mounted after first render flush

    constraf1=requestAnimationFrame(() => {

    constraf2=requestAnimationFrame(() =>setMounted(true));

    return () =>cancelAnimationFrame(raf2);

    });

    return () =>cancelAnimationFrame(raf1);

  }, []);

  consthandleMouseMove= (e:MouseEvent`<HTMLDivElement>`) => {

    if (!itemRef.current) return;

    constrect= itemRef.current.getBoundingClientRect();

    constx= e.clientX - rect.left;

    consty= e.clientY - rect.top;

    itemRef.current.style.setProperty('--mouse-x',`${x}px`);

    itemRef.current.style.setProperty('--mouse-y',`${y}px`);

  };

  consttransformX=!mounted ?'20px': (isParentHovered ?'0px':'-20px');

  return (

    <li

    className="flex justify-end w-full transition-all duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1.0)]"

    style={{

    opacity: (mounted && isParentHovered) ?1:0,

    transform:`translateX(${transformX})`,

    pointerEvents: isParentHovered ?'auto':'none',

    transitionDelay: isParentHovered ?`${index*50}ms`:'0ms',

    }}

    >

    <Linkhref={item.href}className="flex justify-end block">

    <div

    ref={itemRef}

    onMouseEnter={() =>setIsHovered(true)}

    onMouseLeave={() =>setIsHovered(false)}

    onMouseMove={handleMouseMove}

    className={`

    relative flex justify-end items-center

    min-h-[2.5rem] px-[1.1rem]

    rounded-full

    backdrop-blur-md

    shadow-sm hover:shadow-md

    transition-all duration-300 whitespace-nowrap overflow-hidden

    ${active?'bg-black text-white':'bg-[#FFBA01] text-gray-900'}

    `}

    >

    {/* Fill Animation Element */}

    <span

    className={`

    absolute rounded-full pointer-events-none transition-transform ease-out

    ${active?'bg-[#FFBA01]':'bg-black'}

    ${isHovered?'duration-400':'duration-250'}

    `}

    style={{

    left: 'var(--mouse-x)',

    top: 'var(--mouse-y)',

    width: '250%',

    paddingBottom: '250%',

    transform: isHovered ?'translate(-50%, -50%) scale(1)':'translate(-50%, -50%) scale(0)',

    zIndex: 0

    }}

    />

    <span

    className={`

    relative z-10 text-[14px] font-medium transition-colors duration-300

    ${active&&isHovered?'!text-gray-900':''}

    ${!active&&isHovered?'!text-white':''}

    `}

    >

    {item.label}


    `</div>`

    `</Link>`

    `</li>`

  );

};

constNavItem= ({

  item,

  index,

  isScrolled,

  isActive,

  isAnyHovered,

}: {

  item: { label:string; href:string; subItems?: { label:string; href:string }[] };

  index:number;

  isScrolled:boolean;

  isActive: (href:string) =>boolean;

  isAnyHovered:boolean;

}) => {

  const [isHovered, setIsHovered] =useState(false);

  const [isRendered, setIsRendered] =useState(false);

  constitemRef=useRef`<HTMLDivElement>`(null);

  constactive=isActive(item.href);

  useEffect(() => {

    if (isHovered) {

    setIsRendered(true);

    } else {

    consttimer=setTimeout(() =>setIsRendered(false), 500); // Wait for exit animation

    return () =>clearTimeout(timer);

    }

  }, [isHovered]);

  consthandleMouseMove= (e:MouseEvent`<HTMLDivElement>`) => {

    if (!itemRef.current) return;

    constrect= itemRef.current.getBoundingClientRect();

    constx= e.clientX - rect.left;

    consty= e.clientY - rect.top;

    itemRef.current.style.setProperty('--mouse-x',`${x}px`);

    itemRef.current.style.setProperty('--mouse-y',`${y}px`);

  };

  constshowText=!isScrolled || isAnyHovered;

  return (

    <li

    className="flex flex-col items-end w-full relative group"

    onMouseEnter={() =>setIsHovered(true)}

    onMouseLeave={() =>setIsHovered(false)}

    >

    <Linkhref={item.href}className="relative block w-full flex justify-end"aria-label={item.label}>

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

    ${active?'bg-black text-white':'bg-[#FFBA01] text-gray-900'}

    ${index===1?"mt-3":""}

    `}

    style={{

    maxWidth: showText ?'240px':'2.75rem',

    padding: showText ?'0 0.825rem':'0',

    transition: showText

    ?'max-width 684ms cubic-bezier(0.25,0.1,0.25,1.0), padding 684ms cubic-bezier(0.25,0.1,0.25,1.0), box-shadow 200ms'

    :'max-width 684ms cubic-bezier(0.25,0.1,0.25,1.0), padding 684ms cubic-bezier(0.25,0.1,0.25,1.0), box-shadow 200ms',

    }}

    >

    {/* Fill Animation Element */}

    <span

    className={`

    absolute rounded-full pointer-events-none transition-transform ease-out

    ${active?'bg-[#FFBA01]':'bg-black'}

    ${isHovered?'duration-400':'duration-250'}

    `}

    style={{

    left: 'var(--mouse-x)',

    top: 'var(--mouse-y)',

    width: '250%',

    paddingBottom: '250%',

    transform: isHovered ?'translate(-50%, -50%) scale(1)':'translate(-50%, -50%) scale(0)',

    zIndex: 0

    }}

    />

    <span

    className={`

    relative z-10 text-[15.4px] font-lato-bold whitespace-nowrap overflow-hidden

    ${active&&isHovered?'!text-gray-900':''}

    ${!active&&isHovered?'!text-white':''}

    `}

    style={{

    opacity: showText ?1:0,

    maxWidth: showText ?'240px':'0px',

    transition: showText

    ?'opacity 547ms ease, max-width 684ms cubic-bezier(0.25,0.1,0.25,1.0), color 0ms'

    :'opacity 547ms ease, max-width 684ms cubic-bezier(0.25,0.1,0.25,1.0), color 0ms',

    }}

    >

    {item.label}


    `</div>`

    `</Link>`

    {/* Render sub items on hover for desktop */}

    {item.subItems && isRendered && (

    <ulclassName={`absolute right-full pr-2 top-0 flex flex-col items-end gap-y-1 z-40 w-max ${isHovered?'pointer-events-auto':'pointer-events-none'}`}>

    {item.subItems.map((sub, i) => (

    <SubNavItemkey={i}item={sub}isActive={isActive}isParentHovered={isHovered}index={i}/>

    ))}

    `</ul>`

    )}

    `</li>`

  );

};

interfaceHeaderProps {

  servicesNavLinks?: { label:string; href:string }[];

}

exportdefaultfunctionHeader({ servicesNavLinks = [] }: HeaderProps) {

  const [isMenuOpen, setIsMenuOpen] =useState(false);

  const [isScrolled, setIsScrolled] =useState(false);

  const [isAnyHovered, setIsAnyHovered] =useState(false);

  const [expandedMobileItem, setExpandedMobileItem] =useState<string|null>(null);

  constpathname=usePathname();

  // Track scroll position

  constlastScrollY=useRef(0);

  useEffect(() => {

    consthandleScroll= () => {

    constcurrentScrollY= window.scrollY;

    if (currentScrollY <=400) {

    // Force text view when at the very top

    setIsScrolled(false);

    } elseif (currentScrollY > lastScrollY.current) {

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

  constnavItems= [

    { label: 'Menu', href: '/' },

    { label: 'About', href: '/about-us' },

    {

    label: 'Services',

    href: '/services',

    subItems: servicesNavLinks.length>0? servicesNavLinks :undefined

    },

    { label: 'Work', href: '/work' },

    { label: 'Blogs', href: '/articles' },

    { label: 'Contact', href: '/get-in-touch' },

  ];

  constisActive= (href:string) => pathname === href;

  return (

    <headerclassName="fixed top-0 left-0 w-full py-[0.875rem] px-6 z-30">

    <divclassName="relative w-full">

    {/* Logo */}

    <Link

    href="/"

    className={`

    absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2

    transition-all duration-500 ease-in-out

    ${isScrolled&&!isAnyHovered&&!isMenuOpen?'opacity-0 pointer-events-none -translate-y-4':'opacity-100 pointer-events-auto translate-y-0'}

    `}

    aria-label="Home"

    >

    <divclassName="w-[8.0625rem] h-auto lg:w-[9rem]">

    <Image

    width={144}

    height={144}

    src="/logo.svg"

    alt="Logo"

    className="w-full h-auto"

    />

    `</div>`

    `</Link>`

    {/* Desktop Navigation */}

    <navclassName="absolute top-0 right-0 hidden md:block">

    <ul

    className="flex flex-col justify-end items-end gap-y-1"

    onMouseEnter={() =>setIsAnyHovered(true)}

    onMouseLeave={() =>setIsAnyHovered(false)}

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

    `</ul>`

    `</nav>`

    {/* Mobile Menu */}

    <divclassName="absolute top-0 right-0 flex flex-col justify-end items-end z-10 md:hidden">

    <divclassName="relative flex flex-col justify-end items-end">

    <button

    onClick={() =>setIsMenuOpen(!isMenuOpen)}

    className="relative flex justify-end items-center min-w-[2.75rem] min-h-[2.75rem] px-[1.1rem] rounded-full z-20 bg-gray-900 text-white shadow-sm"

    aria-label={isMenuOpen ?"Close menu":"Open menu"}

    >

    <spanclassName="text-[15.4px] font-medium">

    {isMenuOpen ?"Close":"Menu"}


    `</button>`

    {isMenuOpen && (

    <navclassName="mt-3 w-full pl-8">

    <ulclassName="flex flex-col justify-end items-end gap-1">

    {navItems.map((item, index) => (

    <likey={item.label}className="relative flex flex-col items-end w-full">

    <divclassName="flex w-full justify-end items-center">

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

    ${isActive(item.href) ?'bg-black text-white':'bg-[#FFBA01] text-gray-900 hover:brightness-110'}

    ${index===2?"mt-3":""}

    `}

    >

    <spanclassName="text-[15.4px] font-medium">

    {item.label}


    `</div>`

    `</Link>`

    {item.subItems && (

    <button

    onClick={() =>setExpandedMobileItem(expandedMobileItem === item.label ?null: item.label)}

    className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-900"

    >

    <spanclassName="text-xl leading-none">{expandedMobileItem === item.label ?'-':'+'}

    `</button>`

    )}

    `</div>`

    {/* Mobile Submenu Expansion */}

    {item.subItems && expandedMobileItem === item.label && (

    <ulclassName="flex flex-col items-end gap-1 mt-2 mb-2">

    {item.subItems.map((subItem) => (

    <likey={subItem.label}>

    <Link

    href={subItem.href}

    className="relative block"

    onClick={() =>setIsMenuOpen(false)}

    >

    <div

    className={`

    relative flex justify-end items-center

    h-[2.5rem] px-[1.1rem] rounded-full

    backdrop-blur-md

    transition-all duration-300

    shadow-sm

    ${isActive(subItem.href) ?'bg-black text-white':'bg-[#FFBA01] text-gray-900 hover:brightness-110'}

    `}

    >

    <spanclassName="text-[14px] font-medium">

    {subItem.label}


    `</div>`

    `</Link>`

    `</li>`

    ))}

    `</ul>`

    )}

    `</li>`

    ))}

    `</ul>`

    `</nav>`

    )}

    `</div>`

    `</div>`

    `</div>`

    `</header>`

  );

}
