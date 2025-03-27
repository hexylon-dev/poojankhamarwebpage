"use client"

import { Link, useLocation, useNavigate } from "react-router-dom"
import { Home, Flame, FileText, Phone, Lightbulb, Info, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import pic from "../assets/Link.png"

// Function to join class names
const cn = (...args) => args.filter(Boolean).join(" ")

// Navigation items
const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: Info, path: "/about-poojan-khamar", label: "About" },
    { icon: Flame, path: "/innovations", label: "Innovations" },
    { icon: FileText, path: "/blogs", label: "Blogs" },
    { icon: Lightbulb, path: "/ideas", label: "Ideas" },
    { icon: Phone, path: "/contact", label: "Contact" },
]

export function Headers() {
    const location = useLocation()
    const navigate = useNavigate()
    const pathname = location.pathname
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
    const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1024)
    const menuRef = useRef(null)

    // Navigation handlers
    const handleProfileClick = () => {
        navigate("/")
        if (isMobile) setIsMenuOpen(false)
    }

    const handleExploreClick = () => {
        navigate("/journey")
        if (isMobile) setIsMenuOpen(false)
    }

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
                setIsMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)
        return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [isMenuOpen])

    // Close menu when clicking on nav items
    const handleNavItemClick = () => {
        if (isMobile) {
            setIsMenuOpen(false)
        }
    }

    // Toggle menu function
    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <header className="fixed left-1/2 -translate-x-1/2 z-50 w-full  py-2">
            <div className="max-w-[720px] mx-auto">

                <div className="flex items-center justify-between px-4">
                    {/* Profile picture on the left - now clickable */}
                    <div
                        onClick={handleProfileClick}
                        className="w-12 h-12 sm:w-16 sm:h-16 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#ffff33] to-yellow-500 overflow-hidden hover-scale relative group cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,51,0.5)]"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/50 to-yellow-500/50 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <img
                            src={pic || "/placeholder.svg"}
                            alt="Profile"
                            className="object-cover w-full h-58 relative z-10 transform group-hover:scale-110 transition-transform duration-500 mt-1"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Hamburger menu button for mobile - shows X when menu is open */}
                    <button
                        className="md:hidden p-2 rounded-full bg-[#ffff33] text-black hover:bg-[#ffff44] transition-all duration-300 hover:scale-105 "
                        onClick={toggleMenu}
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    >
                        <div className="relative w-5 h-5 flex items-center justify-center">
                            <Menu
                                className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"}`}
                            />
                            <X
                                className={`w-5 h-5 absolute transition-all duration-300 ${isMenuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-0"}`}
                            />
                        </div>
                    </button>

                    {/* Navigation menu in center with background - visible on tablet and desktop */}
                    {!isMobile && (
                        <nav className="mx-4 flex-1 max-w-2xl flex items-center justify-center">
                            <div className="flex items-center gap-1 sm:gap-2 bg-[#ffff33] backdrop-blur-xl rounded-full px-2  py-2  border border-[#ffff33]/20 shadow-[0_0_20px_rgba(255,255,51,0.1)]">
                                {navItems.map((item, index) => {
                                    const Icon = item.icon
                                    const isActive = pathname === item.path

                                    return (
                                        <Link
                                            key={index}
                                            to={item.path}
                                            className={cn(
                                                "p-1 sm:p-2 md:p-2 bg-black rounded-full transition-all duration-300 nav-icon group relative overflow-hidden hover:shadow-[0_0_10px_rgba(255,255,51,0.5)]",
                                                isActive ? "ring-2 ring-white/20 shadow-[0_0_10px_rgba(255,255,51,0.8)]" : "",
                                            )}
                                            aria-label={item.label}
                                            title={item.label}
                                        >
                                            <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/0 to-[#ffff33]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <Icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-[#ffff33] group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                        </Link>
                                    )
                                })}
                            </div>
                        </nav>
                    )}

                    {/* Button on the right - hidden on mobile, shown on tablet and desktop */}
                    {!isMobile && (
                        <button
                            onClick={handleExploreClick}
                            className="flex items-center justify-center bg-[#ffff33] text-black px-1 py-2 rounded-full hover:bg-[#ffff44] transition-all hover:scale-105 font-bold relative group overflow-hidden shadow-[0_0_20px_rgba(255,255,51,0.3)]"
                        >
                            <span className="relative z-10 text-xs sm:text-sm md:text-base lg:text-sm whitespace-nowrap px-2">
                                {isTablet ? "Journey" : "Explore My Journey"}
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#ffff33]/0 via-[#ffff33]/30 to-[#ffff33]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                        </button>
                    )}
                </div>
            </div>

            {/* Mobile menu overlay - appears when isMenuOpen is true */}
            {isMobile && (
                <div
                    className={`fixed inset-0 z-10 transition-all duration-300 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                >
                    {/* Blurred background */}
                    <div
                        className={`absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"}`}
                        onClick={toggleMenu}
                    />

                    {/* Menu content sliding from right */}
                    <div
                        ref={menuRef}
                        className={`absolute top-0 right-0 h-full w-3/4 max-w-xs bg-black/90 backdrop-blur-md p-4 transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                    >
                        {/* Close button inside the menu */}
                        <button
                            className="absolute top-4 right-4 p-2 rounded-full bg-[#ffff33] text-black hover:bg-[#ffff44] transition-all duration-300 hover:scale-105"
                            onClick={toggleMenu}
                            aria-label="Close menu"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex flex-col items-start space-y-4 pt-16 bg-black pb-12 ">
                            {navItems.map((item, index) => {
                                const Icon = item.icon
                                const isActive = pathname === item.path

                                return (
                                    <Link
                                        key={index}
                                        to={item.path}
                                        onClick={handleNavItemClick}
                                        className={cn(
                                            "flex items-center justify-start w-full p-3 bg-[#111111] rounded-lg transition-all duration-300 group relative overflow-hidden",
                                            isActive ? "ring-2 ring-[#ffff33]/50 shadow-[0_0_10px_rgba(255,255,51,0.8)]" : "",
                                        )}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/0 to-[#ffff33]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <Icon className="w-5 h-5 text-[#ffff33] mr-3" />
                                        <span className="text-white text-base font-medium">{item.label}</span>
                                    </Link>
                                )
                            })}

                            {/* Mobile version of the explore button */}
                            <button
                                onClick={handleExploreClick}
                                className="w-full flex items-center justify-center bg-[#ffff33] text-black p-3 rounded-lg hover:bg-[#ffff44] transition-all hover:scale-105 font-bold relative group overflow-hidden shadow-[0_0_20px_rgba(255,255,51,0.3)] mt-2"
                            >
                                <span className="relative z-10 text-base">Explore My Journey</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-[#ffff33]/0 via-[#ffff33]/30 to-[#ffff33]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </header>

    )
}