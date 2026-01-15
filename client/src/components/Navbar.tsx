import { MenuIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <>
            <motion.nav 
                className="fixed top-0 z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
            >
                {/* Logo Section */}
                <Link to="/">
                    <img src="/logo.svg" alt="logo" className="h-8 w-auto"/>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-white">
                    <Link to='/' className="hover:text-pink-300 transition">Home</Link>
                    <Link to='/generate' className="hover:text-pink-300 transition">Generate</Link>
                    <Link to='/my-generation' className="hover:text-pink-300 transition">My Generation</Link>
                    <Link to='#' className="hover:text-pink-300 transition">My Contact</Link>
                </div>

                {/* Desktop Button */}
                <button 
                    onClick={() => navigate('/login')} 
                    className="hidden md:block px-6 py-2.5 bg-pink-600 hover:bg-pink-700 text-white active:scale-95 transition-all rounded-full"
                >
                    Get started
                </button>

                {/* Mobile Menu Icon */}
                <button onClick={() => setIsOpen(true)} className="md:hidden text-white">
                    <MenuIcon size={26} className="active:scale-90 transition" />
                </button>
            </motion.nav>

            {/* Mobile Sidebar Menu */}
            <div className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur flex flex-col items-center justify-center text-white text-lg gap-8 md:hidden transition-transform duration-500 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <Link onClick={() => setIsOpen(false)} to='/'>Home</Link>
                <Link onClick={() => setIsOpen(false)} to='/generate'>Generate</Link>
                <Link onClick={() => setIsOpen(false)} to='/my-generation'>My Generation</Link>
                <Link onClick={() => setIsOpen(false)} to='#'>My Contact</Link>
                <Link onClick={() => setIsOpen(false)} to='/login'>Login</Link>

                {/* Close Button */}
                <button onClick={() => setIsOpen(false)} className="active:ring-3 active:ring-white aspect-square size-10 items-center justify-center bg-pink-600 hover:bg-pink-700 transition text-white rounded-md flex mt-4">
                    <XIcon />
                </button>
            </div>
        </>
    );
}