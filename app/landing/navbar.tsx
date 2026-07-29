"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SiInstagram, SiFacebook } from "react-icons/si";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "../../components/ui/button";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Corporativos", href: "#corporativos" },
  { name: "Hogar", href: "#hogar" },
  { name: "Preguntas Frecuentes", href: "#faqs" },
  { name: "Contáctanos", href: "#footer" },
];

export default function Navbar() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedMobile, setSelectedMobile] = useState(pathname);
  const [isFirstRender, setIsFirstRender] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (previous !== undefined) {
      if (latest > previous && latest > 50) {
        setHidden(true);
      } else {
        setHidden(false);
      }
    }
  });

  const variants: Variants = {
    visible: {
      y: 0,
      transition: {
        duration: isFirstRender ? 0.5 : 0.3,
        ease: isFirstRender ? "easeInOut" : "easeOut",
      },
      opacity: 1,
    },
    hidden: {
      opacity: 1,
      y: "-100%",
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  // const onPageChange = () => {
  //   setTimeout(() => {
  //     setMenuOpen(false);
  //   }, 200);
  // };

  return (
    <>
      <motion.div variants={variants} animate={hidden ? "hidden" : "visible"} initial="visible" onAnimationComplete={() => setIsFirstRender(false)} className="fixed top-0 left-0 z-50 hidden w-full items-center border-b border-gray-800 bg-black/20 py-3 backdrop-blur-xl md:flex">
        <div className="mx-6 flex w-full max-w-[1920px] gap-36 items-center justify-between">
          <div className="flex">
            <Image src="/img/fggo.png" alt="Logo black" width={110} height={28} className="object-contain" />
          </div>

          <ul
            onMouseLeave={() =>
              setPosition((prev) => ({
                ...prev,
                opacity: 0,
              }))
            }
            className="relative flex w-fit mx-auto rounded-full justify-center border py-1.5 gap-2 px-1"
          >
            {navItems.map((item) => (
              <NavItem key={item.name} href={item.href} pathname={pathname} setPosition={setPosition}>
                {item.name}
              </NavItem>
            ))}

            <Cursor position={position} />
          </ul>
          <div className="mr-4 flex flex-row gap-6">
            <Link href="https://www.instagram.com/fg_go_publicidad_/?fbclid=IwY2xjawS0MXhleHRuA2FlbQIxMABicmlkETFWZzJJWlFTVXF0OEZwYnduc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHnlwLkSoY8jX3TWJMphGzX5pf13aggmwRFJoi5t7LSNk8b0PHeZEjf3hMIlq_aem_yQD9OArUzq-dfWG0Ek0BsA" target="_blank">
              <SiInstagram size={22} className="cursor-pointer text-white transition hover:scale-125" />
            </Link>
            <Link href="https://www.facebook.com/p/FG-go-Publicidad-Interior-y-Exterior-100048656033581/" target="_blank">
              <SiFacebook size={22} className="cursor-pointer text-white transition hover:scale-125" />
            </Link>
          </div>
        </div>
      </motion.div>
      {/* Mobile Navbar */}
      <motion.div variants={variants} animate={hidden ? "hidden" : "visible"} initial="visible" onAnimationComplete={() => setIsFirstRender(false)} className="fixed top-0 left-0 z-50 w-full bg-black/40 px-4 py-4 backdrop-blur-sm md:hidden">
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Image src="/img/logo/logo-hero.png" alt="Navbar logo" width={100} height={16} className="object-cover" />
          </Link>
          <Button className="h-10 gap-2 rounded-xl bg-green-700/70 px-3 text-white backdrop-blur-md" variant="outline" onClick={() => setMenuOpen(!isMenuOpen)} aria-label="Toggle navigation menu" aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X className="size-5 text-white/60" /> : <Menu className="size-5 text-white/60" />}
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </Button>
        </div>
      </motion.div>
      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div key="menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-green-900/70 backdrop-blur-xl px-6 ml-4 md:hidden">
            {/* Botón cerrar */}
            <Button size="icon" variant="ghost" onClick={() => setMenuOpen(false)} className="absolute right-6 top-6 h-12 w-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-500 hover:bg-green-500/10">
              <X className="h-6 w-6 text-white" />
            </Button>
            <div className="flex h-full items-center justify-center">
              <ul className="relative flex w-full items-start max-w-sm flex-col gap-3">
                {navItems.map((item) => (
                  <MobileNavItem key={item.href} href={item.href} label={item.name} selected={selectedMobile} setSelected={setSelectedMobile} closeMenu={() => setMenuOpen(false)} />
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// interface MenuItemProps {
//   href: string;
//   label: string;
//   isActive: boolean;
//   delay: number;
//   onClick?: () => void;
//   className?: string;
// }

// function MenuItem({ href, label, isActive, delay, onClick, className }: MenuItemProps) {
//   return (
//     <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay, duration: 0.3 }}>
//       <Link href={href} className="relative block" onClick={onClick}>
//         {isActive && <Leaf className="absolute top-1/2 -left-6 size-5 -translate-y-1/2 text-[#FF5F2A]" />}
//         <Button variant="link" className={`font-space-grotesk px-0 text-3xl font-bold text-white ${className}`}>
//           {label}
//         </Button>
//       </Link>
//     </motion.div>
//   );
// }

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  pathname: string;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
}

function NavItem({ children, href, pathname, setPosition }: NavItemProps) {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10"
    >
      <Link href={href} className={`block px-6 py-3 text-md font-semibold uppercase transition duration-300 mix-blend-difference ${pathname === href ? "text-white" : "text-white"}`}>
        {children}
      </Link>
    </li>
  );
}

function Cursor({
  position,
}: {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
}) {
  return (
    <motion.li
      animate={position}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className="absolute top-1/2 z-0 h-[54px] -translate-y-1/2 rounded-full bg-green-600"
    />
  );
}

interface MobileNavItemProps {
  href: string;
  label: string;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
  closeMenu: () => void;
}

function MobileNavItem({ href, label, selected, setSelected, closeMenu }: MobileNavItemProps) {
  return (
    <li className="relative z-10">
      <Link
        href={href}
        onClick={(e) => {
          e.preventDefault();
          setSelected(href);

          setTimeout(() => {
            closeMenu();
            window.location.href = href;
          }, 220);
        }}
        className="relative flex items-center justify-center px-8 py-5 text-xl font-bold uppercase text-white mix-blend-difference"
      >
        {selected === href && <Leaf className="absolute top-1/2 -left-2 size-5 -translate-y-1/2 text-green-500" />}
        {label}
      </Link>
    </li>
  );
}
