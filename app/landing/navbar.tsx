"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
// import ContactModal from "@/components/contact-modal"
import { SiTiktok, SiInstagram, SiFacebook } from "react-icons/si"
import { usePathname } from "next/navigation"
import { useRef } from "react"
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
  Variants,
} from "framer-motion"
import { Menu, X, Play } from "lucide-react"
import { Button } from "../../components/ui/button"



const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Corporativos", href: "#corporativos" },
  { name: "Hogar", href: "#hogar" },
  { name: "Faq´s", href: "#faqs" },
  { name: "Contáctanos", href: "#footer" },
]

export default function Navbar() {
  const [position, setPosition] = useState({
  left: 0,
  width: 0,
  opacity: 0,
})
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const { scrollY } = useScroll()
  const [hidden, setHidden] = useState(false)
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [mobilePosition, setMobilePosition] = useState({
  top: 0,
  height: 0,
  opacity: 0,
})

const [selectedMobile, setSelectedMobile] = useState(pathname)
  const [isFirstRender, setIsFirstRender] = useState(true)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    if (previous !== undefined) {
      if (latest > previous && latest > 50) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }
  })

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
  }

  const onPageChange = () => {
    setTimeout(() => {
      setMenuOpen(false)
    }, 200)
  }

  return (
    <>
      {/* Desktop Navbar */}
      <motion.div
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        onAnimationComplete={() => setIsFirstRender(false)}
        className="fixed top-0 left-0 z-50 hidden w-full items-center border-b border-gray-800 bg-black/20 py-3 backdrop-blur-xl md:flex"
      >
        <div className="mx-6 flex w-full max-w-[1920px] gap-36 items-center justify-between">
          <div className="flex">
              <Image
                src="/img/fggo.png"
                alt="Logo black"
                width={110}
                height={28}
                className="object-contain"
              />
              
          </div>

        <ul
  onMouseLeave={() =>
    setPosition((prev) => ({
      ...prev,
      opacity: 0,
    }))
  }
  className="relative flex flex-1 rounded-full justify-center border-[1.8px] p-1 gap-2"
>
  {navItems.map((item) => (
    <NavItem
      key={item.name}
      href={item.href}
      pathname={pathname}
      setPosition={setPosition}
    >
      {item.name}
    </NavItem>
  ))}

  <Cursor position={position} />
</ul>
          <div className="mr-4 flex flex-row gap-6">
            <Link href="https://www.tiktok.com/@huellayaroma" target="_blank">
              <SiTiktok
                size={22}
                className="cursor-pointer text-white transition hover:scale-125"
              />
            </Link>
            <Link
              href="https://www.instagram.com/huellayaroma/"
              target="_blank"
            >
              <SiInstagram
                size={22}
                className="cursor-pointer text-white transition hover:scale-125"
              />
            </Link>
            <Link
              href="https://www.facebook.com/Huella-y-Aroma-100091759881419/"
              target="_blank"
            >
              <SiFacebook
                size={22}
                className="cursor-pointer text-white transition hover:scale-125"
              />
            </Link>
          </div>
         

          {/* <ContactModal open={open} onClose={() => setOpen(false)} /> */}
        </div>
      </motion.div>

      {/* Mobile Navbar */}
      <motion.div
        variants={variants}
        animate={hidden ? "hidden" : "visible"}
        initial="visible"
        onAnimationComplete={() => setIsFirstRender(false)}
        className="fixed top-0 left-0 z-50 w-full bg-black px-4 py-4 md:hidden"
      >
        <div className="flex w-full items-center justify-between">
          <Link href="/">
            <Image
              src="/img/navbar/Xolide-white.svg"
              alt="Navbar logo"
              width={123}
              height={16}
              className="object-cover"
            />
          </Link>

          <Button
            className="h-10 gap-2 rounded-xl bg-black/80 px-3 text-white backdrop-blur-md"
            variant="outline"
            onClick={() => setMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="size-5 text-white/60" />
            ) : (
              <Menu className="size-5 text-white/60" />
            )}
            <span>{isMenuOpen ? "Close" : "Menu"}</span>
          </Button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
   {/* Mobile Menu */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      key="menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-3xl md:hidden"
    >
      {/* Botón cerrar */}
      <Button
        size="icon"
        variant="ghost"
        onClick={() => setMenuOpen(false)}
        className="absolute right-6 top-6 h-12 w-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl hover:border-green-500 hover:bg-green-500/10"
      >
        <X className="h-6 w-6 text-white" />
      </Button>

      <div className="flex h-full items-center justify-center">
        <ul
          onMouseLeave={() =>
            setMobilePosition((prev) => ({
              ...prev,
              opacity: 0,
            }))
          }
          className="relative flex w-full max-w-sm flex-col gap-3"
        >
          {navItems.map((item) => (
            <MobileNavItem
              key={item.href}
              href={item.href}
              label={item.name}
              selected={selectedMobile}
              setSelected={setSelectedMobile}
              setPosition={setMobilePosition}
              closeMenu={() => setMenuOpen(false)}
            />
          ))}

          <MobileCursor position={mobilePosition} />
        </ul>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </>
  )
}

interface MenuItemProps {
  href: string
  label: string
  isActive: boolean
  delay: number
  onClick?: () => void
  className?: string
}

function MenuItem({
  href,
  label,
  isActive,
  delay,
  onClick,
  className,
}: MenuItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.3 }}
    >
      <Link href={href} className="relative block" onClick={onClick}>
        {isActive && (
          <Play className="absolute top-1/2 -left-6 size-5 -translate-y-1/2 text-[#FF5F2A]" />
        )}
        <Button
          variant="link"
          className={`font-space-grotesk px-0 text-3xl font-bold text-white ${className}`}
        >
          {label}
        </Button>
      </Link>
    </motion.div>
  )
}

interface NavItemProps {
  children: React.ReactNode
  href: string
  pathname: string
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number
      width: number
      opacity: number
    }>
  >
}

function NavItem({
  children,
  href,
  pathname,
  setPosition,
}: NavItemProps) {
  const ref = useRef<HTMLLIElement>(null)

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current) return

        const { width } = ref.current.getBoundingClientRect()

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        })
      }}
      className="relative z-10"
    >
      <Link
        href={href}
        className={`block px-6 py-3 text-xl font-semibold uppercase transition duration-300 mix-blend-difference ${
          pathname === href ? "text-white" : "text-white"
        }`}
      >
        {children}
      </Link>
    </li>
  )
}

function Cursor({
  position,
}: {
  position: {
    left: number
    width: number
    opacity: number
  }
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
  )
}

interface MobileNavItemProps {
  href: string
  label: string
  selected: string
  setSelected: React.Dispatch<React.SetStateAction<string>>
  setPosition: React.Dispatch<
    React.SetStateAction<{
      top: number
      height: number
      opacity: number
    }>
  >
  closeMenu: () => void
}

function MobileNavItem({
  href,
  label,
  selected,
  setSelected,
  setPosition,
  closeMenu,
}: MobileNavItemProps) {
  const ref = useRef<HTMLLIElement>(null)

  return (
    <li
      ref={ref}
      className="relative z-10"
    >
      <Link
        href={href}
        onClick={(e) => {
          e.preventDefault()

          if (!ref.current) return

          setSelected(href)

          setPosition({
            top: ref.current.offsetTop,
            height: ref.current.offsetHeight,
            opacity: 1,
          })

          setTimeout(() => {
            closeMenu()
            window.location.href = href
          }, 220)
        }}
        className="flex justify-center rounded-full px-8 py-5 text-3xl font-bold uppercase text-white mix-blend-difference"
      >
        {label}
      </Link>
    </li>
  )
}

function MobileCursor({
  position,
}: {
  position: {
    top: number
    height: number
    opacity: number
  }
}) {
  return (
    <motion.div
      animate={position}
      transition={{
        type: "spring",
        stiffness: 350,
        damping: 30,
      }}
      className="
        absolute
        left-0
        w-full
        rounded-full
        bg-gradient-to-r
        from-green-700
        via-green-600
        to-green-500
        shadow-[0_0_40px_rgba(34,197,94,0.45)]
      "
    />
  )
}