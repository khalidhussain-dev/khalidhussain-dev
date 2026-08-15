import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Experience = () => {
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

        const elements = containerRef.current?.querySelectorAll('.scroll-trigger, .scroll-fade-in-left');
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    // ── Newest first ───────────────────────────────────────────────────────────
    const experiences = [
        {
            title: 'Full Stack Developer',
            company: 'HyperLogic',
            companyType: 'Remote',
            period: 'Dec 2025 – Present',
            accentColor: '#A8781B',
            isCurrent: true,
            description: [
                'Delivered 3 production platforms across SaaS, booking, and digital media domains by owning frontend, backend, database, integration, and deployment workflows end-to-end.',
                'Built a multi-tenant AI SaaS platform supporting voice agents, lead automation, scheduling, payments, analytics, and subscriptions — architected on React, NestJS, PostgreSQL, and Redis.',
                'Integrated 8+ external services including Azure Communication Services, Azure Speech, Azure OpenAI, Stripe Connect, Google Calendar, Microsoft Outlook, Apple Calendar, and Strapi CMS to deliver connected business workflows.',
                'Co-developed Zintari AI as one of 2 engineers — owning frontend architecture, multilingual UI across 9 languages via Strapi CMS, AI voice integrations, authentication, Stripe payments, calendar scheduling, and production deployment on Microsoft Azure.',
                'Co-developed Big Break Snooker as one of 2 engineers — owning core booking, dynamic pricing, scheduling, database design, REST APIs, and payment workflows through to production deployment.',
                'Delivered production booking and subscription platforms by implementing reservation, payment, media, authentication, and administrative workflows for Big Break Snooker and Hypno Switch.',
            ],
            technologies: ['React.js', 'NestJS', 'Node.js', 'Azure OpenAI', 'Azure Communication Services', 'Azure Speech Services', 'PostgreSQL', 'Redis', 'Stripe Connect', 'Strapi CMS', 'Microsoft Azure', 'Next.js', 'Framer Motion'],
            liveLinks: [
                { label: 'Zintari AI', url: 'https://portal.zintariai.com/' },
                { label: 'Zintari Marketing', url: 'https://www.zintariai.com/' },
                { label: 'Scentello', url: 'https://scentello.co.uk/' },
                { label: 'Big Break Snooker', url: 'https://www.bigbreaksnooker.co.uk/' },
            ]
        },
        {
            title: 'Final Year Project Lead',
            company: 'CareerTrust — AI Employment Platform',
            companyType: 'University Academic Project',
            period: 'Aug 2025 – May 2026',
            accentColor: '#C43C2C',
            isCurrent: false,
            description: [
                'Led end-to-end development of CareerTrust — an AI-powered employment ecosystem with a Digital Employment Passport and verified career history.',
                'Implemented dual employment verification workflow with employer and employee confirmation, and role-based access for Job Seekers, Employers, and Admins.',
                'Integrated AI-powered resume parsing, candidate analysis, and intelligent job recommendation engine using HuggingFace Transformers and Python FastAPI.',
                'Developed employer reputation scoring with aspect-based sentiment analysis using DistilBERT.',
                'Implemented face recognition-based identity verification and duplicate account prevention using OpenCV and InsightFace.',
                'Built analytics dashboards and real-time notification system. Managed full SDLC in an Agile environment using Git/GitHub.',
            ],
            technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'MongoDB', 'Python FastAPI', 'DistilBERT', 'HuggingFace Transformers', 'OpenCV', 'InsightFace', 'Clerk Auth', 'Cloudinary'],
            liveLinks: []
        },
        {
            title: 'Mobile App Developer',
            company: 'YeboNadi & Zintari Mobile',
            companyType: 'Remote',
            period: 'Feb 2026 – Sep 2026',
            accentColor: '#2F6FA8',
            isCurrent: false,
            description: [
                'Developed the YeboNadi secure evidence recording mobile app (React Native) — implemented end-to-end audio encryption, chunk-based upload architecture, and subscription management for iOS and Android.',
                'Developed the Zintari cross-platform mobile app (React Native + TypeScript) as a mobile companion to the Zintari SaaS platform — reused backend APIs and business logic across leads, AI call logs, calendars, quotes, invoices, and team management.',
                'Managed production build preparation and release for both Apple App Store and Google Play Store.',
            ],
            technologies: ['React Native', 'TypeScript', 'Redux', 'REST APIs', 'Push Notifications', 'Node.js', 'Express.js', 'PostgreSQL', 'Android', 'iOS'],
            liveLinks: [
                { label: 'YeboNadi App Store', url: 'https://apps.apple.com/pk/app/yebonadi/id6760420574' },
                { label: 'YeboNadi Play Store', url: 'https://play.google.com/store/apps/details?id=com.emergent.recorder' },
            ]
        },
        {
            title: 'Independent Developer',
            company: 'Academic & Personal Projects',
            companyType: 'Self-Directed',
            period: 'Sep 2024 – Dec 2025',
            accentColor: '#2E7D4F',
            isCurrent: false,
            description: [
                'Developed FoodSecure — a MERN stack food donation platform with JWT authentication, Nodemailer email integration, and Cron Job automation.',
                'Built a desktop Visitor Management System using Electron.js with local SQLite storage for secure visitor and employee entry tracking.',
                'Developed QuizWhiz — a full-stack online quiz platform with PHP, MySQL, jQuery, and performance-tracking features.',
                'Built NoteNova — a native Android notes app (Kotlin + Jetpack Compose) with SHA-256 password hashing, Room Database, Material 3 design, reactive Kotlin Coroutines data flows, and a per-user quota system.',
            ],
            technologies: ['MERN Stack', 'JWT', 'Nodemailer', 'Electron.js', 'SQLite', 'PHP', 'MySQL', 'Kotlin', 'Jetpack Compose', 'Room Database', 'Material 3'],
            liveLinks: [
                { label: 'NoteNova GitHub', url: 'https://github.com/khalidhussain-dev/NoteNova' }
            ]
        }
    ];

    return (
        <section
            id="experience"
            className="py-20 relative overflow-hidden"
            style={{ backgroundColor: '#F4EEDD' }}
        >
            {/* Subtle ruled paper texture */}
            <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 36px, #D9CFB6 36px, #D9CFB6 37px)'
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(47, 111, 168, 0.04), transparent 70%)' }}
            />

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="scroll-trigger animate-fade-in stagger-1 text-center mb-16">
                    <p
                        className="text-sm font-semibold uppercase tracking-widest mb-3"
                        style={{ color: '#8A7E63', letterSpacing: '0.2em' }}
                    >
                        Professional Journey
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
                        Experience
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto animate-blur-in stagger-2" style={{ color: '#4E4635' }}>
                        Building real products, solving real problems — most recent first
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto space-y-8 relative">
                    {/* Vertical timeline line */}
                    <div
                        className="absolute left-0 top-0 bottom-0 w-px hidden md:block"
                        style={{
                            background: 'linear-gradient(to bottom, #A8781B, rgba(168,120,27,0.1))',
                            left: '-24px'
                        }}
                    />

                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="scroll-trigger scroll-fade-in-left p-8 rounded-xl border transition-all duration-500 card-brass-rule relative"
                            style={{
                                backgroundColor: '#FCF8EC',
                                borderColor: index === 0 ? 'rgba(168,120,27,0.4)' : '#D9CFB6',
                                boxShadow: index === 0
                                    ? '0 4px 24px rgba(168, 120, 27, 0.14)'
                                    : '0 2px 16px rgba(168, 120, 27, 0.07)'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = exp.accentColor;
                                e.currentTarget.style.boxShadow = `0 16px 40px rgba(168, 120, 27, 0.14)`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = index === 0 ? 'rgba(168,120,27,0.4)' : '#D9CFB6';
                                e.currentTarget.style.boxShadow = index === 0
                                    ? '0 4px 24px rgba(168, 120, 27, 0.14)'
                                    : '0 2px 16px rgba(168, 120, 27, 0.07)';
                            }}
                        >
                            {/* Current role stamp */}
                            {exp.isCurrent && (
                                <div
                                    className="absolute top-4 right-4 px-2.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5"
                                    style={{ backgroundColor: 'rgba(46,125,79,0.12)', color: '#2E7D4F', border: '1px solid rgba(46,125,79,0.3)' }}
                                >
                                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: '#2E7D4F' }} />
                                    Current
                                </div>
                            )}

                            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-5 gap-3">
                                <div>
                                    <h3
                                        className="text-xl font-bold mb-0.5 flex items-center gap-2"
                                        style={{ color: '#221C12' }}
                                    >
                                        <Briefcase size={20} style={{ color: exp.accentColor }} />
                                        {exp.title}
                                    </h3>
                                    <p className="font-bold text-base" style={{ color: exp.accentColor }}>
                                        {exp.company}
                                    </p>
                                    <p className="text-xs mt-0.5" style={{ color: '#8A7E63' }}>
                                        {exp.companyType}
                                    </p>
                                </div>
                                <div
                                    className="flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold flex-shrink-0"
                                    style={{ borderColor: '#D9CFB6', color: '#4E4635', backgroundColor: '#EAE1CA' }}
                                >
                                    <Calendar size={13} />
                                    {exp.period}
                                </div>
                            </div>

                            {/* Hairline rule */}
                            <div className="mb-4 h-px" style={{ backgroundColor: '#D9CFB6' }} />

                            <ul className="space-y-2.5 mb-5">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: '#4E4635' }}>
                                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: exp.accentColor }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* Live links */}
                            {exp.liveLinks.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {exp.liveLinks.map(({ label, url }) => (
                                        <a
                                            key={label}
                                            href={url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 hover:scale-105"
                                            style={{ borderColor: exp.accentColor, color: exp.accentColor }}
                                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = exp.accentColor; e.currentTarget.style.color = '#FCF8EC'; }}
                                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = exp.accentColor; }}
                                        >
                                            <ExternalLink size={10} /> {label}
                                        </a>
                                    ))}
                                </div>
                            )}

                            {/* Tech tags */}
                            <div className="flex flex-wrap gap-2">
                                {exp.technologies.map((tech, ti) => (
                                    <span
                                        key={ti}
                                        className="px-2.5 py-1 text-xs rounded border hover:scale-105 transition-all duration-200 cursor-default"
                                        style={{
                                            backgroundColor: 'rgba(168,120,27,0.07)',
                                            color: '#7A560F',
                                            borderColor: 'rgba(168,120,27,0.2)'
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
