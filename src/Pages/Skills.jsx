import { useEffect, useRef } from 'react';

const Skills = () => {
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

    const skillCategories = [
        {
            title: "Frontend & Full Stack",
            skills: ["React.js", "Next.js", "TypeScript", "JavaScript", "Redux", "Tailwind CSS", "Framer Motion", "HTML5 / CSS3"],
            accent: '#A8781B',
            bgTint: 'rgba(168, 120, 27, 0.06)',
            border: 'rgba(168, 120, 27, 0.22)',
            tagBg: 'rgba(168, 120, 27, 0.1)',
            tagColor: '#7A560F',
            tagBorder: 'rgba(168, 120, 27, 0.3)'
        },
        {
            title: "Backend & APIs",
            skills: ["Node.js", "NestJS", "Express.js", "Python", "FastAPI", "REST APIs", "Redis", "JWT / Auth"],
            accent: '#C43C2C',
            bgTint: 'rgba(196, 60, 44, 0.06)',
            border: 'rgba(196, 60, 44, 0.22)',
            tagBg: 'rgba(196, 60, 44, 0.1)',
            tagColor: '#A02010',
            tagBorder: 'rgba(196, 60, 44, 0.3)'
        },
        {
            title: "Mobile",
            skills: ["React Native", "Kotlin", "Jetpack Compose", "Android", "iOS", "Room Database", "DataStore", "Material 3"],
            accent: '#2F6FA8',
            bgTint: 'rgba(47, 111, 168, 0.06)',
            border: 'rgba(47, 111, 168, 0.22)',
            tagBg: 'rgba(47, 111, 168, 0.1)',
            tagColor: '#1A4F80',
            tagBorder: 'rgba(47, 111, 168, 0.3)'
        },
        {
            title: "AI & Machine Learning",
            skills: ["Azure OpenAI", "HuggingFace Transformers", "DistilBERT", "OpenCV", "InsightFace", "Face Recognition", "NLP", "Sentiment Analysis", "Python FastAPI"],
            accent: '#2E7D4F',
            bgTint: 'rgba(46, 125, 79, 0.06)',
            border: 'rgba(46, 125, 79, 0.22)',
            tagBg: 'rgba(46, 125, 79, 0.1)',
            tagColor: '#1A5C35',
            tagBorder: 'rgba(46, 125, 79, 0.3)'
        },
        {
            title: "Database & Storage",
            skills: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Redis", "Prisma ORM", "Cloudinary", "Strapi CMS"],
            accent: '#9A6A1B',
            bgTint: 'rgba(154, 106, 27, 0.06)',
            border: 'rgba(154, 106, 27, 0.22)',
            tagBg: 'rgba(154, 106, 27, 0.1)',
            tagColor: '#7A4C0A',
            tagBorder: 'rgba(154, 106, 27, 0.3)'
        },
        {
            title: "Cloud & Integrations",
            skills: ["Microsoft Azure", "Azure Communication Services", "Azure Speech Services", "Stripe Connect", "Google Calendar API", "Microsoft Outlook API", "Clerk Auth", "Nodemailer"],
            accent: '#A9B8C8',
            bgTint: 'rgba(169, 184, 200, 0.12)',
            border: 'rgba(169, 184, 200, 0.4)',
            tagBg: 'rgba(47, 111, 168, 0.1)',
            tagColor: '#1A4F80',
            tagBorder: 'rgba(47, 111, 168, 0.25)'
        },
        {
            title: "AI Dev Tools",
            skills: ["Claude Code", "Cursor", "Emergent", "VS Code", "GitHub Copilot", "Git / GitHub", "Electron.js", "Agile / Scrum"],
            accent: '#7A560F',
            bgTint: 'rgba(122, 86, 15, 0.06)',
            border: 'rgba(122, 86, 15, 0.22)',
            tagBg: 'rgba(122, 86, 15, 0.1)',
            tagColor: '#5A3C05',
            tagBorder: 'rgba(122, 86, 15, 0.3)'
        }
    ];

    return (
        <section
            id="skills"
            className="py-20 relative overflow-hidden"
            style={{ backgroundColor: '#F4EEDD' }}
        >
            {/* Ruled paper texture */}
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 36px, #D9CFB6 36px, #D9CFB6 37px)'
                }}
            />
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 80% 20%, rgba(168, 120, 27, 0.05), transparent 60%)' }}
            />

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="scroll-trigger animate-fade-in stagger-1 text-center mb-16">
                    <p
                        className="text-sm font-semibold uppercase tracking-widest mb-3"
                        style={{ color: '#8A7E63', letterSpacing: '0.2em' }}
                    >
                        Tools of the trade
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
                        Skills & Technologies
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto animate-blur-in stagger-2" style={{ color: '#4E4635' }}>
                        A comprehensive toolkit built through real-world projects — from enterprise SaaS to AI-powered mobile apps
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <div
                            key={index}
                            className="scroll-trigger scroll-scale-in p-6 rounded-xl border backdrop-blur-sm transition-all duration-500 card-hover group card-brass-rule"
                            style={{
                                backgroundColor: '#FCF8EC',
                                borderColor: category.border,
                                boxShadow: '0 2px 12px rgba(168, 120, 27, 0.06)'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = category.accent;
                                e.currentTarget.style.boxShadow = `0 16px 36px rgba(168, 120, 27, 0.12)`;
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = category.border;
                                e.currentTarget.style.boxShadow = '0 2px 12px rgba(168, 120, 27, 0.06)';
                            }}
                        >
                            {/* Category header with brass accent dot */}
                            <div className="flex items-center gap-3 mb-5">
                                <div
                                    className="w-3 h-3 rounded-full flex-shrink-0"
                                    style={{ backgroundColor: category.accent }}
                                />
                                <h3
                                    className="text-base font-bold uppercase tracking-widest"
                                    style={{ color: category.accent, letterSpacing: '0.1em' }}
                                >
                                    {category.title}
                                </h3>
                            </div>
                            {/* Hairline rule */}
                            <div className="mb-4 h-px" style={{ backgroundColor: '#D9CFB6' }} />

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        className="px-3 py-1.5 rounded-md text-xs font-semibold border hover:scale-110 transition-all duration-300 cursor-pointer animate-fade-in item-hover"
                                        style={{
                                            backgroundColor: category.tagBg,
                                            color: category.tagColor,
                                            borderColor: category.tagBorder,
                                            animationDelay: `${index * 0.15 + skillIndex * 0.05}s`
                                        }}
                                    >
                                        {skill}
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

export default Skills;
