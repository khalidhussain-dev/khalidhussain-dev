import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { Khalid, Resume } from '../assets';

const Hero = () => {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const elements = entry.target.querySelectorAll('.scroll-hero-trigger');
                    if (entry.isIntersecting) {
                        elements.forEach(el => el.classList.add('visible'));
                    } else {
                        elements.forEach(el => el.classList.remove('visible'));
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #F4EEDD 0%, #FCF8EC 50%, #EAE1CA 100%)'
            }}
        >
            {/* Warm radial glow — no horizontal lines */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 80% 60% at 65% 55%, rgba(168, 120, 27, 0.1), transparent 70%)'
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: 'radial-gradient(ellipse 50% 70% at 10% 80%, rgba(196, 60, 44, 0.04), transparent 60%)'
                }}
            />

            <div ref={containerRef} className="container mx-auto px-6 py-20 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    {/* Text Content */}
                    <div className="flex-1 space-y-6 scroll-hero-trigger animate-fade-in">
                        <div className="space-y-3">
                            <p
                                className="text-sm font-semibold uppercase animate-slide-in-left stagger-1"
                                style={{ color: '#8A7E63', letterSpacing: '0.22em' }}
                            >
                                Hi, I'm
                            </p>
                            <h1
                                className="text-5xl md:text-7xl font-bold animate-slide-in-left stagger-2 animate-text-gradient leading-tight"
                                style={{
                                    background: 'linear-gradient(135deg, #A8781B 0%, #D6BC6E 40%, #7A560F 100%)',
                                    backgroundSize: '200% 200%',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    backgroundClip: 'text'
                                }}
                            >
                                Khalid Hussain
                            </h1>
                            <h2
                                className="text-xl md:text-2xl font-semibold animate-slide-in-left stagger-3"
                                style={{ color: '#4E4635' }}
                            >
                                Full Stack Developer & AI Integration Specialist
                            </h2>
                        </div>

                        {/* Brass ruled divider */}
                        <div
                            className="w-20 h-0.5 animate-slide-in-left stagger-4"
                            style={{ background: 'linear-gradient(to right, #A8781B, #D6BC6E)' }}
                        />

                        <p
                            className="text-base max-w-xl leading-relaxed animate-blur-in stagger-4"
                            style={{ color: '#4E4635', animationDelay: '0.3s' }}
                        >
                            Building scalable SaaS platforms, AI-powered voice agents, and modern web experiences —
                            from enterprise multi-tenant systems to cross-platform mobile apps, shipped to real users.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-3 pt-2 animate-float-up stagger-5" style={{ animationDelay: '0.4s' }}>
                            <a
                                href="#projects"
                                className="px-7 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg hover-lift active:scale-95 btn-hover"
                                style={{
                                    background: 'linear-gradient(135deg, #A8781B, #7A560F)',
                                    color: '#FCF8EC',
                                    boxShadow: '0 4px 20px rgba(168, 120, 27, 0.35)'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #C43C2C, #A8781B)';
                                    e.currentTarget.style.boxShadow = '0 8px 28px rgba(196, 60, 44, 0.35)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = 'linear-gradient(135deg, #A8781B, #7A560F)';
                                    e.currentTarget.style.boxShadow = '0 4px 20px rgba(168, 120, 27, 0.35)';
                                }}
                            >
                                View My Work <ArrowRight size={18} />
                            </a>

                            {/* Download Resume */}
                            <a
                                href={Resume}
                                download="Khalid_Hussain_Resume.pdf"
                                className="px-7 py-3 rounded-lg font-semibold flex items-center gap-2 border hover-lift active:scale-95 transition-all duration-300"
                                style={{ borderColor: '#A8781B', color: '#A8781B', backgroundColor: 'transparent' }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.backgroundColor = '#A8781B';
                                    e.currentTarget.style.color = '#FCF8EC';
                                    e.currentTarget.style.boxShadow = '0 4px 16px rgba(168,120,27,0.25)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                    e.currentTarget.style.color = '#A8781B';
                                    e.currentTarget.style.boxShadow = 'none';
                                }}
                            >
                                <Download size={18} /> Resume
                            </a>

                            <a
                                href="#contact"
                                className="px-7 py-3 border-2 rounded-lg font-semibold hover-lift active:scale-95 transition-all duration-300"
                                style={{ borderColor: '#D9CFB6', color: '#4E4635' }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = '#B9AC8F';
                                    e.currentTarget.style.backgroundColor = 'rgba(168, 120, 27, 0.06)';
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '#D9CFB6';
                                    e.currentTarget.style.backgroundColor = 'transparent';
                                }}
                            >
                                Get In Touch
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className="flex gap-3 pt-2 animate-float-up stagger-6" style={{ animationDelay: '0.5s' }}>
                            {[
                                { href: 'https://github.com/khalidhussain-dev', Icon: Github, label: 'GitHub' },
                                { href: 'https://www.linkedin.com/in/khalid-developer', Icon: Linkedin, label: 'LinkedIn' },
                                { href: 'mailto:khalidhussainchandio9@gmail.com', Icon: Mail, label: 'Email' },
                            ].map(({ href, Icon, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target={href.startsWith('http') ? '_blank' : undefined}
                                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    title={label}
                                    className="p-3 rounded-lg border group transition-all hover-lift"
                                    style={{
                                        backgroundColor: '#FCF8EC',
                                        borderColor: '#D9CFB6',
                                        color: '#4E4635',
                                        boxShadow: '0 2px 8px rgba(168, 120, 27, 0.07)'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.backgroundColor = '#A8781B';
                                        e.currentTarget.style.borderColor = '#A8781B';
                                        e.currentTarget.style.color = '#FCF8EC';
                                        e.currentTarget.style.boxShadow = '0 8px 24px rgba(168, 120, 27, 0.35)';
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.backgroundColor = '#FCF8EC';
                                        e.currentTarget.style.borderColor = '#D9CFB6';
                                        e.currentTarget.style.color = '#4E4635';
                                        e.currentTarget.style.boxShadow = '0 2px 8px rgba(168, 120, 27, 0.07)';
                                    }}
                                >
                                    <Icon size={22} className="group-hover:rotate-12 transition-transform duration-300" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div className="flex-1 flex justify-center scroll-hero-trigger animate-bounce-in stagger-5" style={{ animationDelay: '0.9s' }}>
                        <div className="relative group">
                            {/* Decorative rings */}
                            <div
                                className="absolute -inset-4 rounded-full opacity-15 animate-pulse"
                                style={{ background: 'linear-gradient(135deg, #A8781B, #D6BC6E)' }}
                            />
                            <div
                                className="absolute -inset-2 rounded-full opacity-25"
                                style={{ background: 'linear-gradient(135deg, #D6BC6E, transparent)' }}
                            />
                            <img
                                src={Khalid}
                                alt="Khalid Hussain"
                                className="w-64 h-64 md:w-80 md:h-80 rounded-full object-contain relative z-10 group-hover:scale-105 transition-all duration-500"
                                style={{
                                    border: '4px solid #A8781B',
                                    boxShadow: '0 12px 40px rgba(168, 120, 27, 0.25), 0 0 0 8px rgba(168, 120, 27, 0.08)'
                                }}
                            />
                            {/* Available badge — green */}
                            <div
                                className="absolute -bottom-2 -right-2 z-20 px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg flex items-center gap-1.5"
                                style={{ backgroundColor: '#2E7D4F', color: '#F0FFF4', letterSpacing: '0.08em' }}
                            >
                                <span
                                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                                    style={{ backgroundColor: '#86efac' }}
                                />
                                Available
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
