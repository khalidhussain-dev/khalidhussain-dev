import { Code2, Brain, Rocket } from 'lucide-react';
import { useEffect, useRef } from 'react';

const About = () => {
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

    const cards = [
        {
            Icon: Code2,
            title: 'Full Stack Development',
            desc: 'Experienced building enterprise-grade SaaS platforms, booking systems, and marketing websites using React, Next.js, Node.js, Nest.js, PostgreSQL, and cloud infrastructure on Microsoft Azure.',
            accentColor: '#A8781B',
            bgTint: 'rgba(168, 120, 27, 0.06)',
            borderColor: 'rgba(168, 120, 27, 0.25)'
        },
        {
            Icon: Brain,
            title: 'AI & Machine Learning',
            desc: 'Specialized in implementing AI-powered voice agents, conversational AI using Azure OpenAI, NLP with HuggingFace Transformers, computer vision with OpenCV, and aspect-based sentiment analysis.',
            accentColor: '#C43C2C',
            bgTint: 'rgba(196, 60, 44, 0.06)',
            borderColor: 'rgba(196, 60, 44, 0.25)'
        },
        {
            Icon: Rocket,
            title: 'Mobile & Innovation',
            desc: 'Building cross-platform apps with React Native and native Android using Kotlin & Jetpack Compose. Passionate about scalable architectures, multi-tenant SaaS, and shipping production-ready products.',
            accentColor: '#2F6FA8',
            bgTint: 'rgba(47, 111, 168, 0.06)',
            borderColor: 'rgba(47, 111, 168, 0.25)'
        }
    ];

    return (
        <section
            id="about"
            className="py-20 relative overflow-hidden"
            style={{ backgroundColor: '#EAE1CA' }}
        >
            {/* Subtle warm radial */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(168, 120, 27, 0.04), transparent 70%)' }}
            />

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="scroll-trigger animate-fade-in text-center mb-16">
                    <p
                        className="text-sm font-semibold uppercase tracking-widest mb-3"
                        style={{ color: '#8A7E63', letterSpacing: '0.2em' }}
                    >
                        Get to know me
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
                        About Me
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: '#4E4635' }}>
                        A passionate full stack developer with hands-on experience building complex AI-powered SaaS platforms,
                        real-time booking systems, and mobile applications — deployed to real users and businesses.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {cards.map(({ Icon, title, desc, accentColor, bgTint, borderColor }, index) => (
                        <div
                            key={title}
                            className={`scroll-trigger scroll-scale-in backdrop-blur-sm p-8 rounded-xl border transition-all duration-500 card-hover group card-brass-rule ${index === 1 ? 'scroll-stagger-1' : index === 2 ? 'scroll-stagger-2' : ''}`}
                            style={{
                                backgroundColor: '#FCF8EC',
                                borderColor,
                                boxShadow: '0 2px 16px rgba(168, 120, 27, 0.07)'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.boxShadow = `0 20px 40px rgba(168, 120, 27, 0.14)`;
                                e.currentTarget.style.borderColor = accentColor;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.boxShadow = '0 2px 16px rgba(168, 120, 27, 0.07)';
                                e.currentTarget.style.borderColor = borderColor;
                            }}
                        >
                            <div
                                className="w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500 icon-rotate"
                                style={{ backgroundColor: bgTint }}
                            >
                                <Icon size={32} style={{ color: accentColor }} />
                            </div>
                            <h3
                                className="text-xl font-bold mb-4 transition-colors duration-500"
                                style={{ color: '#221C12' }}
                            >
                                {title}
                            </h3>
                            <p className="leading-relaxed text-sm" style={{ color: '#4E4635' }}>
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
