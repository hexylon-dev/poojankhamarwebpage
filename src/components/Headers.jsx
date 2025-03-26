import { Link, useLocation } from "react-router-dom";
import { Home, Flame, FileText, Phone, Lightbulb, Info } from "lucide-react";
// import pic from "../../assets/Link.png"
import pic from "../assets/Link.png"

// Function to join class names
const cn = (...args) => args.filter(Boolean).join(" ");

// Navigation items
const navItems = [
    { icon: Home, path: "/", label: "Home" },
    { icon: Info, path: "/about", label: "About" },
    { icon: Flame, path: "/innovations", label: "Innovations" },
    { icon: FileText, path: "/blog", label: "Idea" },
    { icon: Lightbulb, path: "/idea", label: "Target" },
    { icon: Phone, path: "/contact", label: "Contact" },
];

export function Headers() {
    const location = useLocation(); // ✅ Get current pathname
    const pathname = location.pathname;

    return (
        <header className="fixed  left-1/2 -translate-x-1/2 z-50 bg-black w-[100%] justify-around">
            <div className="flex items-center gap-20 justify-around">
                {/* Profile picture on the left */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#ffff33] to-yellow-500 overflow-hidden hover-scale relative group cursor-pointer">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/50 to-yellow-500/50 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                    <img
                        src={pic || "/placeholder.svg"}
                        alt="Profile"
                        className="object-cover w-full h-full relative z-10 transform group-hover:scale-110 transition-transform duration-500 mt-1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Navigation menu in center with background */}
                <nav className="mt-2 flex items-center gap-4 bg-[#ffff33] backdrop-blur-xl rounded-full px-8 py-4 border border-[#ffff33]/20 shadow-[0_0_20px_rgba(255,255,51,0.1)]">
                    {navItems.map((item, index) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.path;

                        return (
                            <Link
                                key={index}
                                to={item.path}
                                className={cn(
                                    "p-3 bg-black rounded-full transition-all duration-300 nav-icon group relative overflow-hidden",
                                    isActive && "ring-2 ring-white/20"
                                )}
                                aria-label={item.label}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-[#ffff33]/0 to-[#ffff33]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <Icon className="w-5 h-5 text-[#ffff33] group-hover:scale-110 transition-transform duration-300 relative z-10" />
                            </Link>
                        );
                    })}
                </nav>

                {/* Button on the right */}
                <button className="bg-[#ffff33] text-black font-medium px-9 py-5 rounded-full hover:from-[#ffff33] hover:to-yellow-600 transition-all hover:scale-105 font-['Orbitron'] relative group overflow-hidden shadow-[0_0_20px_rgba(255,255,51,0.3)]">
                    <span className="relative z-10 font-sans text-xl font-bold">Explore My Journey</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-[#ffff33]/0 via-[#ffff33]/30 to-[#ffff33]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
            </div>
        </header>
    );
}
