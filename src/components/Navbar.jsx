import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Experience', href: '#experience' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
                ? 'backdrop-blur-md shadow-lg border-b'
                : 'bg-transparent border-b border-transparent'
                }`}
            style={isScrolled ? {
                backgroundColor: 'rgba(252, 248, 236, 0.97)',
                borderColor: '#B9AC8F',
                boxShadow: '0 4px 24px rgba(168, 120, 27, 0.12)'
            } : {}}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <a
                        href="#home"
                        className="text-2xl font-bold hover:scale-110 hover:drop-shadow-lg transition-all duration-300 animate-slide-in-left flex items-center gap-2 group transform-gpu"
                        style={{ color: '#A8781B' }}
                    >
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center group-hover:rotate-12 group-hover:scale-125 transition-all duration-300"
                            style={{ background: 'linear-gradient(135deg, #A8781B, #D6BC6E)' }}
                        >
                            <Code2 size={18} style={{ color: '#FCF8EC' }} />
                        </div>
                        <span className="hidden sm:inline" style={{ background: 'linear-gradient(135deg, #A8781B, #7A560F)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                            Khalid
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 rounded-lg font-medium transition-all duration-300 relative group animate-fade-in hover:scale-105"
                                style={{
                                    color: '#4E4635',
                                    animationDelay: `${index * 0.08}s`
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = '#A8781B';
                                    e.currentTarget.style.backgroundColor = 'rgba(168, 120, 27, 0.08)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = '#4E4635';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                <span className="relative z-10">{item.name}</span>
                                <span
                                    className="absolute -bottom-1 left-4 w-0 h-0.5 group-hover:w-[calc(100%-32px)] transition-all duration-300 rounded-full"
                                    style={{ background: 'linear-gradient(to right, #A8781B, #D6BC6E)' }}
                                ></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden transition-all duration-300 cursor-pointer hover:scale-125"
                        style={{ color: '#221C12' }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? (
                            <X size={28} className="animate-rotate-in" />
                        ) : (
                            <Menu size={28} className="animate-rotate-in hover:rotate-90 transition-transform duration-300" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div
                        className="md:hidden py-4 px-4 backdrop-blur-lg rounded-b-2xl animate-slide-up shadow-xl space-y-2 border-b"
                        style={{ backgroundColor: 'rgba(252, 248, 236, 0.98)', borderColor: '#B9AC8F' }}
                    >
                        {navItems.map((item, index) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block py-3 px-4 rounded-lg font-medium animate-fade-in transition-all duration-300 hover:scale-105"
                                style={{
                                    color: '#4E4635',
                                    animationDelay: `${index * 0.06}s`
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.color = '#A8781B';
                                    e.currentTarget.style.backgroundColor = 'rgba(168, 120, 27, 0.08)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.color = '#4E4635';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <span className="flex items-center gap-2">
                                    <span
                                        className="w-1.5 h-1.5 rounded-full"
                                        style={{ background: 'linear-gradient(to right, #A8781B, #D6BC6E)' }}
                                    ></span>
                                    {item.name}
                                </span>
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
