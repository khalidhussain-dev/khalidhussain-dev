import { Github, Linkedin, Mail, Heart, ArrowUp, ExternalLink } from 'lucide-react';
import { useEffect, useState } from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const socialLinks = [
        { icon: Github, url: 'https://github.com/khalidhussain-dev', label: 'GitHub' },
        { icon: Linkedin, url: 'https://www.linkedin.com/in/khalid-developer', label: 'LinkedIn' },
        { icon: Mail, url: 'mailto:khalidhussainchandio9@gmail.com', label: 'Email' },
    ];

    const quickLinks = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

    const featuredProjects = [
        { name: 'Zintari AI Platform', url: 'https://portal.zintariai.com/' },
        { name: 'Scentello', url: 'https://scentello.co.uk/' },
        { name: 'Big Break Snooker', url: 'https://www.bigbreaksnooker.co.uk/' },
        { name: 'YeboNadi App', url: 'https://apps.apple.com/pk/app/yebonadi/id6760420574' },
    ];

    return (
        <footer
            className="border-t relative overflow-hidden"
            style={{ backgroundColor: '#221C12', borderColor: 'rgba(168, 120, 27, 0.25)' }}
        >
            {/* Subtle brass glow at top */}
            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 pointer-events-none"
                style={{
                    background: 'radial-gradient(circle, rgba(168, 120, 27, 0.12), transparent 70%)',
                    filter: 'blur(20px)'
                }}
            />

            <div className="container mx-auto px-6 py-16 relative z-10">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2 animate-float-up stagger-1 space-y-4">
                        <div>
                            <h3
                                className="text-2xl font-bold mb-1"
                                style={{
                                    background: 'linear-gradient(135deg, #A8781B, #D6BC6E)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                Khalid Hussain
                            </h3>
                            <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: '#8A7E63', letterSpacing: '0.18em' }}>
                                Full Stack Developer & AI Specialist
                            </p>
                        </div>
                        <div className="h-px w-16" style={{ background: 'linear-gradient(to right, #A8781B, #D6BC6E)' }} />
                        <p className="text-sm leading-relaxed" style={{ color: '#8A7E63' }}>
                            Building scalable SaaS platforms, AI-powered applications, and mobile experiences.
                            Based in Lahore, Pakistan — available for remote projects worldwide.
                        </p>

                        {/* Social links */}
                        <div className="flex gap-3 pt-2">
                            {socialLinks.map(({ icon: IconComponent, url, label }) => (
                                <a
                                    key={label}
                                    href={url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title={label}
                                    className="group w-10 h-10 rounded-lg flex items-center justify-center border transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                                    style={{
                                        backgroundColor: 'rgba(168, 120, 27, 0.08)',
                                        borderColor: 'rgba(168, 120, 27, 0.2)',
                                        color: '#8A7E63'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = '#A8781B';
                                        e.currentTarget.style.borderColor = '#A8781B';
                                        e.currentTarget.style.color = '#FCF8EC';
                                        e.currentTarget.style.boxShadow = '0 6px 20px rgba(168,120,27,0.35)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = 'rgba(168, 120, 27, 0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(168, 120, 27, 0.2)';
                                        e.currentTarget.style.color = '#8A7E63';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    <IconComponent size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="animate-float-up stagger-2">
                        <h4
                            className="text-xs font-bold mb-5 uppercase tracking-widest flex items-center gap-2"
                            style={{ color: '#D6BC6E', letterSpacing: '0.2em' }}
                        >
                            <span className="w-2 h-px inline-block" style={{ backgroundColor: '#A8781B' }} />
                            Quick Links
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        className="text-sm inline-flex items-center gap-2 transition-all duration-300 group"
                                        style={{ color: '#8A7E63' }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#D6BC6E'}
                                        onMouseLeave={e => e.currentTarget.style.color = '#8A7E63'}
                                    >
                                        <span
                                            className="w-1 h-1 rounded-full flex-shrink-0 group-hover:scale-150 transition-all duration-300"
                                            style={{ backgroundColor: '#A8781B' }}
                                        />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{link}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Featured Projects */}
                    <div className="animate-float-up stagger-3">
                        <h4
                            className="text-xs font-bold mb-5 uppercase tracking-widest flex items-center gap-2"
                            style={{ color: '#D6BC6E', letterSpacing: '0.2em' }}
                        >
                            <span className="w-2 h-px inline-block" style={{ backgroundColor: '#A8781B' }} />
                            Live Projects
                        </h4>
                        <ul className="space-y-3">
                            {featuredProjects.map(({ name, url }) => (
                                <li key={name}>
                                    <a
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm inline-flex items-center gap-2 transition-all duration-300 group"
                                        style={{ color: '#8A7E63' }}
                                        onMouseEnter={e => e.currentTarget.style.color = '#D6BC6E'}
                                        onMouseLeave={e => e.currentTarget.style.color = '#8A7E63'}
                                    >
                                        <ExternalLink size={10} className="flex-shrink-0 group-hover:scale-125 transition-transform duration-300" style={{ color: '#A8781B' }} />
                                        <span className="group-hover:translate-x-1 transition-transform duration-300">{name}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div
                    className="h-px mb-8"
                    style={{ background: 'linear-gradient(to right, transparent, rgba(168,120,27,0.3), transparent)' }}
                />

                {/* Footer bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="space-y-1 text-center md:text-left">
                        <p className="text-xs" style={{ color: '#4E4635' }}>
                            © {currentYear} Khalid Hussain. All rights reserved.
                        </p>
                        <p className="text-xs flex items-center gap-1 justify-center md:justify-start" style={{ color: '#4E4635' }}>
                            Designed & Built with <Heart size={12} className="animate-pulse mx-0.5" style={{ color: '#C43C2C' }} /> using React & Tailwind CSS
                        </p>
                    </div>

                    {/* Scroll to Top */}
                    {showScrollTop && (
                        <button
                            onClick={scrollToTop}
                            className="group w-10 h-10 rounded-lg flex items-center justify-center hover:scale-125 transition-all duration-300 animate-bounce-in border"
                            title="Back to top"
                            style={{
                                background: 'linear-gradient(135deg, #A8781B, #7A560F)',
                                borderColor: '#D6BC6E',
                                boxShadow: '0 4px 16px rgba(168,120,27,0.35)'
                            }}
                        >
                            <ArrowUp size={18} style={{ color: '#FCF8EC' }} className="group-hover:rotate-12 transition-transform duration-300" />
                        </button>
                    )}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
