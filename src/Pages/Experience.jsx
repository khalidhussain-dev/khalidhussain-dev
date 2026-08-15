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

    const experiences = [
        {
            title: 'Freelance Full Stack Developer',
            company: 'Self-Employed — Remote',
            period: 'Dec 2024 – Present',
            accentColor: '#A8781B',
            description: [
                'Designed and developed Zintari AI — a scalable multi-tenant SaaS platform with AI-powered voice agents (Azure OpenAI, Azure Communication Services) for business automation, deployed on Microsoft Azure',
                'Built the Zintari multilingual marketing website using Next.js + Strapi CMS with full SEO optimisation',
                'Developed Scentello — a premium Next.js marketing website with Framer Motion animations for a luxury fragrance vending machine brand',
                'Built Big Break Snooker — an online booking and management system with dynamic pricing and admin dashboard',
                'Developed HypnoSwitch — an advanced music streaming and digital marketplace with Redis caching and subscription management',
                'Built the YeboNadi secure evidence recording mobile app (React Native) with end-to-end encryption and chunk-based upload architecture',
                'Developed the Zintari cross-platform mobile app (React Native + TypeScript) for iOS and Android',
            ],
            technologies: ['React.js', 'Next.js', 'React Native', 'Nest.js', 'Node.js', 'Azure OpenAI', 'Stripe', 'PostgreSQL', 'Redis', 'Microsoft Azure'],
            liveLinks: [
                { label: 'Zintari AI', url: 'https://portal.zintariai.com/' },
                { label: 'Scentello', url: 'https://scentello.co.uk/' },
                { label: 'Big Break Snooker', url: 'https://www.bigbreaksnooker.co.uk/' },
            ]
        },
        {
            title: 'Final Year Project Lead — AI Employment Platform',
            company: 'University Academic Project',
            period: 'Aug 2025 – May 2026',
            accentColor: '#C43C2C',
            description: [
                'Led development of CareerTrust — an AI-powered employment ecosystem with a Digital Employment Passport and verified career history for job seekers and employers',
                'Implemented dual employment verification workflow with employer and employee confirmation',
                'Integrated AI-powered resume parsing, candidate analysis, and intelligent job recommendation engine',
                'Developed employer reputation scoring with aspect-based sentiment analysis using DistilBERT (HuggingFace Transformers)',
                'Implemented face recognition-based identity verification and duplicate account prevention using OpenCV and InsightFace',
                'Built analytics dashboards for employers, job seekers, and administrators with role-based access control',
                'Collaborated in an Agile environment, managing the complete software development lifecycle with Git/GitHub',
            ],
            technologies: ['Next.js', 'TypeScript', 'Node.js', 'Express.js', 'Prisma ORM', 'PostgreSQL', 'MongoDB', 'Python FastAPI', 'DistilBERT', 'OpenCV', 'Clerk Auth', 'Cloudinary'],
            liveLinks: []
        },
        {
            title: 'Independent Developer — Academic & Personal Projects',
            company: 'Personal Projects',
            period: '2024 – 2025',
            accentColor: '#2F6FA8',
            description: [
                'Developed FoodSecure — a MERN stack food donation platform with JWT authentication, Nodemailer integration, and Cron Job automation',
                'Built a desktop Visitor Management System using Electron.js with local SQLite storage for secure visitor tracking across offices and secured facilities',
                'Developed QuizWhiz — a full-stack online quiz platform with PHP, MySQL, jQuery, and performance-tracking features',
                'Developed NoteNova — a native Android notes app (Kotlin + Jetpack Compose) with SHA-256 password hashing, Room Database, Material 3 design, reactive data flows with Kotlin Coroutines, and a per-user quota system',
            ],
            technologies: ['MERN Stack', 'Electron.js', 'SQLite', 'PHP', 'MySQL', 'Kotlin', 'Jetpack Compose', 'Room Database', 'Material 3'],
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
            {/* Ruled paper texture */}
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
                        Building real products, solving real problems — from multi-tenant SaaS to AI-powered mobile applications
                    </p>
                </div>

                {/* Timeline */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="scroll-trigger scroll-fade-in-left p-8 rounded-xl border transition-all duration-500 card-brass-rule"
                            style={{
                                backgroundColor: '#FCF8EC',
                                borderColor: '#D9CFB6',
                                boxShadow: '0 2px 16px rgba(168, 120, 27, 0.07)'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = exp.accentColor;
                                e.currentTarget.style.boxShadow = `0 16px 40px rgba(168, 120, 27, 0.14)`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = '#D9CFB6';
                                e.currentTarget.style.boxShadow = '0 2px 16px rgba(168, 120, 27, 0.07)';
                            }}
                        >
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-5">
                                <div style={{ animationDelay: `${index * 0.2 + 0.1}s` }}>
                                    <h3
                                        className="text-xl font-bold mb-1 flex items-center gap-2"
                                        style={{ color: '#221C12' }}
                                    >
                                        <Briefcase size={20} style={{ color: exp.accentColor }} />
                                        {exp.title}
                                    </h3>
                                    <p className="font-semibold text-sm" style={{ color: exp.accentColor }}>
                                        {exp.company}
                                    </p>
                                </div>
                                <div
                                    className="flex items-center gap-2 mt-2 md:mt-0 px-3 py-1.5 rounded-full border text-xs font-medium"
                                    style={{ borderColor: '#D9CFB6', color: '#4E4635', backgroundColor: '#EAE1CA' }}
                                >
                                    <Calendar size={14} />
                                    <span>{exp.period}</span>
                                </div>
                            </div>

                            {/* Hairline rule */}
                            <div className="mb-4 h-px" style={{ backgroundColor: '#D9CFB6' }} />

                            <ul className="space-y-2 mb-5">
                                {exp.description.map((item, itemIndex) => (
                                    <li
                                        key={itemIndex}
                                        className="flex items-start gap-2.5 text-sm leading-relaxed"
                                        style={{ color: '#4E4635' }}
                                    >
                                        <span
                                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                            style={{ backgroundColor: exp.accentColor }}
                                        />
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
                                            className="flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-300 hover:scale-105"
                                            style={{ borderColor: exp.accentColor, color: exp.accentColor, backgroundColor: 'transparent' }}
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
                                {exp.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="px-3 py-1 text-xs rounded border hover:scale-105 transition-all duration-200 cursor-default"
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
