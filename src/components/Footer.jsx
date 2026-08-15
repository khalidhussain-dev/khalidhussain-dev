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
        {
            // WhatsApp — custom SVG
            icon: null,
            whatsapp: true,
            url: 'https://wa.me/923150344416',
            label: 'WhatsApp'
        },
    ];

    const quickLinks = ['About', 'Skills', 'Projects', 'Experience', 'Education', 'Contact'];

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
                            {socialLinks.map(({ icon: IconComponent, whatsapp, url, label }) => (
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
                                        e.currentTarget.style.backgroundColor = whatsapp ? '#25D366' : '#A8781B';
                                        e.currentTarget.style.borderColor = whatsapp ? '#25D366' : '#A8781B';
                                        e.currentTarget.style.color = '#FCF8EC';
                                        e.currentTarget.style.boxShadow = whatsapp
                                            ? '0 6px 20px rgba(37,211,102,0.35)'
                                            : '0 6px 20px rgba(168,120,27,0.35)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = 'rgba(168, 120, 27, 0.08)';
                                        e.currentTarget.style.borderColor = 'rgba(168, 120, 27, 0.2)';
                                        e.currentTarget.style.color = '#8A7E63';
                                        e.currentTarget.style.boxShadow = 'none';
                                    }}
                                >
                                    {whatsapp ? (
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                                        </svg>
                                    ) : (
                                        <IconComponent size={18} className="group-hover:rotate-12 transition-transform duration-300" />
                                    )}
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
