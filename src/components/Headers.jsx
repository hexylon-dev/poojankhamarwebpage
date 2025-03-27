import { Link, useLocation, useNavigate } from "react-router-dom";
import { Home, Flame, FileText, Phone, Lightbulb, Info } from "lucide-react";
import pic from "../assets/Link.png";

// Function to join class names
const cn = (...args) => args.filter(Boolean).join(" ");

// Navigation items
const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: Info, path: "/about-poojan-khamar", label: "About" },
    { icon: Flame, path: "/innovations", label: "Innovations" },
    { icon: FileText, path: "/blogs", label: "Blogs" },
    { icon: Lightbulb, path: "/ideas", label: "Ideas" },
    { icon: Phone, path: "/contact", label: "Contact" },
];

export function Headers() {
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    // Navigation handlers
    const handleProfileClick = () => navigate("/");
    const handleExploreClick = () => navigate("/journey");

    return (
        <header className="fixed left-1/2 -translate-x-1/2 z-50 bg-black w-full max-w-[1800px] mx-auto py-2">
            <div className="flex items-center justify-between px-4">
                {/* Profile picture on the left - now clickable */}
                <div
                    onClick={handleProfileClick}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-[#ffff33] to-yellow-500 overflow-hidden hover-scale relative group cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,51,0.5)]"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/50 to-yellow-500/50 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <img
                        src={pic || "/placeholder.svg"}
                        alt="Profile"
                        className="object-cover w-full h-full relative z-10 transform group-hover:scale-110 transition-transform duration-500 mt-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Navigation menu in center with background */}
                <nav className="mx-4 flex-1 max-w-2xl flex items-center justify-center">
                    <div className="flex items-center gap-2 bg-[#ffff33] backdrop-blur-xl rounded-full px-4 py-2 md:px-8 md:py-3 border border-[#ffff33]/20 shadow-[0_0_20px_rgba(255,255,51,0.1)]">
                        {navItems.map((item, index) => {
                            const Icon = item.icon;
                            const isActive = pathname === item.path;

                            return (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className={cn(
                                        "p-2 md:p-3 bg-black rounded-full transition-all duration-300 nav-icon group relative overflow-hidden hover:shadow-[0_0_10px_rgba(255,255,51,0.5)]",
                                        isActive ? "ring-2 ring-white/20 shadow-[0_0_10px_rgba(255,255,51,0.8)]" : ""
                                    )}
                                    aria-label={item.label}
                                    title={item.label}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/0 to-[#ffff33]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-[#ffff33] group-hover:scale-110 transition-transform duration-300 relative z-10" />
                                </Link>
                            );
                        })}
                    </div>
                </nav>

                {/* Button on the right - now properly clickable */}
                <button
                    onClick={handleExploreClick}
                    className="hidden sm:flex items-center justify-center bg-[#ffff33] text-black px-6 py-3 md:px-8 md:py-4 rounded-full hover:bg-[#ffff44] transition-all hover:scale-105 font-bold relative group overflow-hidden shadow-[0_0_20px_rgba(255,255,51,0.3)]"
                >
                    <span className="relative z-10 text-sm md:text-base lg:text-lg whitespace-nowrap">
                        Explore My Journey
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffff33]/0 via-[#ffff33]/30 to-[#ffff33]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                </button>
            </div>
        </header>
    );
}