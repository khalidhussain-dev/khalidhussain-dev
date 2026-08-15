import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Education = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    } else {
                        entry.target.classList.remove('visible');
                    }
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        const elements = containerRef.current?.querySelectorAll('.scroll-trigger, .scroll-scale-in');
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    const highlights = [
        'Full Stack Web Development — React, Next.js, Node.js, NestJS',
        'Artificial Intelligence & Machine Learning — NLP, Computer Vision, Deep Learning',
        'Database Systems — PostgreSQL, MongoDB, MySQL',
        'Software Engineering & System Design',
        'Final Year Project: CareerTrust — AI-Powered Employment Verification Platform (GPA distinction)',
        'Mobile Application Development — Android (Kotlin) & Cross-Platform (React Native)',
    ];

    const achievements = [
        { label: 'GPA', value: '3.44 / 4.0', color: '#A8781B' },
        { label: 'Degree', value: 'B.S. Computer Science', color: '#2F6FA8' },
        { label: 'Duration', value: '4 Years', color: '#2E7D4F' },
        { label: 'Status', value: 'Graduated 2026', color: '#2E7D4F' },
    ];

    return (
        <section
            id="education"
            className="py-20 relative overflow-hidden"
            style={{ backgroundColor: '#EAE1CA' }}
        >
            {/* Subtle warm radial */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 70% 30%, rgba(168, 120, 27, 0.06), transparent 60%)' }}
            />

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="scroll-trigger animate-fade-in stagger-1 text-center mb-16">
                    <p
                        className="text-sm font-semibold uppercase tracking-widest mb-3"
                        style={{ color: '#8A7E63', letterSpacing: '0.2em' }}
                    >
                        Academic Background
                    </p>
                    <h2
                        className="text-4xl md:text-5xl font-bold section-ruled-header inline-block"
                        style={{
                            background: 'linear-gradient(135deg, #A8781B, #7A560F)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        }}
                    >
                        Education
                    </h2>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Main education card */}
                    <div
                        className="scroll-trigger scroll-scale-in rounded-2xl border overflow-hidden card-brass-rule"
                        style={{
                            backgroundColor: '#FCF8EC',
                            borderColor: 'rgba(168, 120, 27, 0.35)',
                            boxShadow: '0 4px 32px rgba(168, 120, 27, 0.12)'
                        }}
                    >
                        {/* Card top banner */}
                        <div
                            className="px-8 pt-8 pb-6"
                            style={{ borderBottom: '1px solid #D9CFB6' }}
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                {/* Left — institution */}
                                <div className="flex items-start gap-4">
                                    {/* University emblem circle */}
                                    <div
                                        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0"
                                        style={{
                                            background: 'linear-gradient(135deg, #A8781B, #D6BC6E)',
                                            boxShadow: '0 4px 16px rgba(168, 120, 27, 0.3)'
                                        }}
                                    >
                                        <GraduationCap size={28} color="#FCF8EC" />
                                    </div>
                                    <div>
                                        <h3
                                            className="text-2xl font-bold leading-tight"
                                            style={{ color: '#221C12' }}
                                        >
                                            Sukkur IBA University
                                        </h3>
                                        <p
                                            className="text-base font-semibold mt-0.5"
                                            style={{ color: '#A8781B' }}
                                        >
                                            B.S. Computer Science
                                        </p>
                                    </div>
                                </div>

                                {/* Right — meta chips */}
                                <div className="flex flex-col gap-2 md:items-end">
                                    <div
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold"
                                        style={{ borderColor: '#D9CFB6', color: '#4E4635', backgroundColor: '#EAE1CA' }}
                                    >
                                        <Calendar size={13} />
                                        Sep 2022 – Jun 2026
                                    </div>
                                    <div
                                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold"
                                        style={{ borderColor: '#D9CFB6', color: '#4E4635', backgroundColor: '#EAE1CA' }}
                                    >
                                        <MapPin size={13} />
                                        Sukkur, Sindh, Pakistan
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Stats row */}
                        <div
                            className="grid grid-cols-2 md:grid-cols-4"
                            style={{ borderBottom: '1px solid #D9CFB6' }}
                        >
                            {achievements.map(({ label, value, color }, i) => (
                                <div
                                    key={label}
                                    className="px-6 py-5 text-center transition-all duration-300"
                                    style={{
                                        borderRight: i < 3 ? '1px solid #D9CFB6' : 'none'
                                    }}
                                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#F4EEDD'}
                                    onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                                >
                                    <p
                                        className="text-lg md:text-xl font-bold"
                                        style={{ color }}
                                    >
                                        {value}
                                    </p>
                                    <p
                                        className="text-xs font-semibold uppercase tracking-wider mt-0.5"
                                        style={{ color: '#8A7E63', letterSpacing: '0.12em' }}
                                    >
                                        {label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        {/* Coursework / highlights */}
                        <div className="px-8 py-6">
                            <div className="flex items-center gap-2 mb-4">
                                <Award size={16} style={{ color: '#A8781B' }} />
                                <h4
                                    className="text-sm font-bold uppercase tracking-widest"
                                    style={{ color: '#A8781B', letterSpacing: '0.14em' }}
                                >
                                    Key Areas of Study
                                </h4>
                            </div>
                            <div className="grid md:grid-cols-2 gap-2.5">
                                {highlights.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-2.5 text-sm leading-relaxed"
                                        style={{ color: '#4E4635' }}
                                    >
                                        <span
                                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: '#A8781B' }}
                                        />
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
