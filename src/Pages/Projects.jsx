import { ExternalLink, Github, Monitor, Smartphone } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// ── Website project image imports ──────────────────────────────────────────
import zintariSaas1 from '../assets/zintari_saas/AI Flows Page - Zintari AI.png';
import zintariSaas2 from '../assets/zintari_saas/Dashboard Page - en - Zintari AI.png';
import zintariSaas3 from '../assets/zintari_saas/Dashboard Page - ar - Zintari AI.png';

import zintariMktg1 from '../assets/zintari_marketing/Landing Page - en - Zintari AI.webp';
import zintariMktg2 from '../assets/zintari_marketing/Features Page - Zintari AI.webp';
import zintariMktg3 from '../assets/zintari_marketing/Landing Page - ar - Zintari AI.webp';

import scentello1 from '../assets/scentello/Homepage - Scentello.webp';
import scentello2 from '../assets/scentello/Fragrance - Scentello.webp';
import scentello3 from '../assets/scentello/Machine - Scentello.webp';

import bigBreak1 from '../assets/bigbreaksnooker/Snooker Booking HomePage.webp';
import bigBreak2 from '../assets/bigbreaksnooker/booking.webp';
import bigBreak3 from '../assets/bigbreaksnooker/user_bookings.webp';

import careerTrust1 from '../assets/careertrust/landing_page.webp';
import careerTrust2 from '../assets/careertrust/jobs_page.webp';
import careerTrust3 from '../assets/careertrust/user_dashboard.webp';

import foodSecure1 from '../assets/foodsecure/Dashboard.png';
import foodSecure2 from '../assets/foodsecure/Dashboard full.png';

import hypnoSwitch1 from '../assets/hypnoswitch/hypnoswitch_tracks.webp';
import hypnoSwitch2 from '../assets/hypnoswitch/hypnoswitch_hypnosis.webp';

import visitor1 from '../assets/visitor/visitor.png';
import visitor2 from '../assets/visitor/visitor1.png';
import visitor3 from '../assets/visitor/visitor2.png';

import mcq1 from '../assets/mcq/mcq.png';
import mcq2 from '../assets/mcq/mcq1.png';

// ── App project image imports ──────────────────────────────────────────────
import zintariApp1 from '../assets/zintari_app/login_screen.png';
import zintariApp2 from '../assets/zintari_app/dashboard_en.png';
import zintariApp3 from '../assets/zintari_app/dashboard_ar.png';

import yebonadiApp1 from '../assets/yebonadi_app/homepage.jpeg';
import yebonadiApp2 from '../assets/yebonadi_app/record_sreen.jpeg';
import yebonadiApp3 from '../assets/yebonadi_app/recording_screen.jpeg';

import notenovaApp1 from '../assets/notenova_app/Dashboard Screen - NoteNova.png';
import notenovaApp2 from '../assets/notenova_app/All Notes Screen - NoteNova.png';
import notenovaApp3 from '../assets/notenova_app/notenova_fullview.webp';

// ─────────────────────────────────────────────────────────────────────────────

const projects = [
    // ── WEBSITES ──
    {
        category: 'website',
        title: 'Zintari — AI SaaS Platform',
        description: 'Scalable multi-tenant SaaS platform with AI-powered voice agents for inbound/outbound calling, appointment scheduling, quote/invoice automation, and team management. Fully multilingual with Strapi CMS.',
        tech: ['React.js', 'Nest.js', 'Node.js', 'Azure OpenAI', 'Azure Communication Services', 'PostgreSQL', 'Redis', 'Stripe', 'Microsoft Azure'],
        live: 'https://portal.zintariai.com/',
        github: null,
        images: [zintariSaas2, zintariSaas1, zintariSaas3],
        isLong: true,
        date: 'Dec 2025 – Jul 2026'
    },
    {
        category: 'website',
        title: 'Zintari — Marketing Website',
        description: 'Official multilingual marketing website for the Zintari AI SaaS platform — product feature pages, pricing, contact & lead capture, and Login/Sign-up CTA integration with the SaaS platform.',
        tech: ['Next.js', 'Redux', 'Strapi CMS', 'Tailwind CSS', 'REST APIs', 'On-Page SEO'],
        live: 'https://www.zintariai.com/',
        github: null,
        images: [zintariMktg1, zintariMktg2, zintariMktg3],
        isLong: true,
        date: 'Feb 2026 – Mar 2026'
    },
    {
        category: 'website',
        title: 'Scentello — Premium Showcase',
        description: 'Premium marketing website for luxury fragrance vending machines. Modern design with product showcase pages, business opportunity sections, and installation information. SEO-optimised.',
        tech: ['Next.js', 'Redux', 'Framer Motion', 'Tailwind CSS', 'On-Page SEO'],
        live: 'https://scentello.co.uk/',
        github: null,
        images: [scentello1, scentello2, scentello3],
        isLong: true,
        date: 'May 2026 – Jul 2026'
    },
    {
        category: 'website',
        title: 'Big Break Snooker — Booking System',
        description: 'Online booking and management platform for snooker clubs. Customers can reserve tables/rooms online; admins have full control over schedules, dynamic pricing, and customer management.',
        tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'PostgreSQL', 'Tailwind CSS'],
        live: 'https://www.bigbreaksnooker.co.uk/',
        github: null,
        images: [bigBreak1, bigBreak2, bigBreak3],
        isLong: false,
        date: 'Dec 2025 – Mar 2026'
    },
    {
        category: 'website',
        title: 'CareerTrust — AI Employment Platform',
        description: 'FYP: AI-powered employment ecosystem with a Digital Employment Passport, dual verification, AI resume parsing, job recommendations, employer reputation scoring, and face recognition identity verification.',
        tech: ['Next.js', 'TypeScript', 'Node.js', 'Prisma ORM', 'PostgreSQL', 'MongoDB', 'Python FastAPI', 'DistilBERT', 'OpenCV', 'Clerk Auth'],
        live: null,
        github: null,
        images: [careerTrust1, careerTrust2, careerTrust3],
        isLong: true,
        date: 'Aug 2025 – May 2026'
    },
    {
        category: 'website',
        title: 'FoodSecure — Donation Platform',
        description: 'Secure food donation platform connecting donors with individuals in need. Features JWT authentication, donation/request management, automated email notifications, and scheduled background jobs.',
        tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Nodemailer', 'Cron Jobs', 'Tailwind CSS'],
        live: null,
        github: null,
        images: [foodSecure1, foodSecure2],
        isLong: false,
        date: 'Mar 2025 – Jul 2025'
    },
    {
        category: 'website',
        title: 'HypnoSwitch — Music Platform',
        description: 'Advanced music streaming and digital marketplace with subscription access, personalised audio track creation, user library management, voucher/discount management, and a full admin dashboard.',
        tech: ['React.js', 'Redux', 'Node.js', 'Express.js', 'Redis', 'PostgreSQL', 'Tailwind CSS'],
        live: null,
        github: null,
        images: [hypnoSwitch1, hypnoSwitch2],
        isLong: false,
        date: 'Jun 2025 – Nov 2025'
    },
    {
        category: 'website',
        title: 'Visitor Management System',
        description: 'Desktop-based visitor tracking solution for organisations. Tracks visitor and employee entries across offices and secured facilities, retaining records locally for up to six months with a secure UI.',
        tech: ['Electron.js', 'React.js', 'Node.js', 'SQLite'],
        live: null,
        github: null,
        images: [visitor1, visitor2, visitor3],
        isLong: false,
        date: 'Feb 2025 – Mar 2025'
    },
    {
        category: 'website',
        title: 'QuizWhiz — Quiz Platform',
        description: 'Comprehensive online quiz platform to help students improve through interactive assessments. Features user registration, interactive quizzes, performance tracking, and a responsive UI.',
        tech: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'PHP', 'MySQL'],
        live: null,
        github: null,
        images: [mcq1, mcq2],
        isLong: false,
        date: 'Sep 2024 – Dec 2025'
    },

    // ── APPS ──
    {
        category: 'app',
        title: 'Zintari Mobile App',
        description: 'Cross-platform mobile companion for the Zintari SaaS platform (iOS & Android). Provides mobile access to AI agent activities, lead/customer management, call logs, appointments, quotes, invoices, and team management.',
        tech: ['React Native', 'TypeScript', 'Redux', 'REST APIs', 'Push Notifications', 'Android', 'iOS'],
        live: null,
        github: null,
        appStore: null,
        playStore: null,
        images: [zintariApp1, zintariApp2, zintariApp3],
        isLong: false,
        isMobile: true,
        date: 'Apr 2026 – Sep 2026'
    },
    {
        category: 'app',
        title: 'YeboNadi — Secure Evidence Recorder',
        description: 'Highly secure mobile app creating legally admissible audio evidence. Records continuously, encrypts with user-provided keys using chunk-based upload, and releases recordings only through authorised legal processes.',
        tech: ['React Native', 'Redux', 'Node.js', 'Express.js', 'PostgreSQL', 'End-to-End Encryption'],
        live: null,
        github: null,
        appStore: 'https://apps.apple.com/pk/app/yebonadi/id6760420574',
        playStore: 'https://play.google.com/store/apps/details?id=com.emergent.recorder',
        images: [yebonadiApp1, yebonadiApp2, yebonadiApp3],
        isLong: false,
        isMobile: true,
        date: 'Feb 2026 – Apr 2026'
    },
    {
        category: 'app',
        title: 'NoteNova — Local-First Notes App',
        description: 'Secure native Android notes app with local-first storage. SHA-256 password hashing, Material 3 design, full CRUD, pin/favorite/colour categories, auto-save with debouncing, sorting, filtering, and a per-user 20-note quota.',
        tech: ['Kotlin', 'Jetpack Compose', 'Room Database', 'KSP', 'Kotlin Coroutines & Flow', 'DataStore', 'Material 3'],
        live: null,
        github: 'https://github.com/khalidhussain-dev/NoteNova',
        images: [notenovaApp1, notenovaApp2, notenovaApp3],
        isLong: false,
        isMobile: true,
        date: 'Apr 2026 – Jun 2026'
    },
];

// ─── Image Slideshow with auto-rotate ───────────────────────────────────────
const ProjectImageSlideshow = ({ images, isLong, isMobile, title }) => {
    const [currentIdx, setCurrentIdx] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIdx(i => (i + 1) % images.length);
        }, 3500);
        return () => clearInterval(timer);
    }, [images.length]);

    if (isMobile) {
        return (
            <div className="img-mobile-container">
                {images.map((src, i) => (
                    <img
                        key={i}
                        src={src}
                        alt={`${title} screenshot ${i + 1}`}
                        style={{
                            opacity: i === currentIdx || images.length <= 2 ? 1 : 0.4,
                            transform: i === currentIdx ? 'scale(1.03) translateY(-4px)' : 'scale(1)',
                            transition: 'all 0.6s ease'
                        }}
                    />
                ))}
            </div>
        );
    }

    return (
        <div className={isLong ? 'img-scroll-container' : 'img-static-container'}>
            {images.map((src, i) => (
                <img
                    key={i}
                    src={src}
                    alt={`${title} screenshot ${i + 1}`}
                    style={{
                        display: i === currentIdx ? 'block' : 'none',
                        width: '100%',
                        height: isLong ? 'auto' : '100%',
                        objectFit: isLong ? 'cover' : 'cover',
                        objectPosition: 'top center',
                        minHeight: isLong ? '100%' : undefined,
                        animation: isLong ? 'scrollImage 14s ease-in-out infinite' : 'none',
                        transition: 'opacity 0.5s ease'
                    }}
                />
            ))}
            {/* Dot indicators */}
            {images.length > 1 && (
                <div
                    className="absolute bottom-2 left-1/2 flex gap-1.5 z-10"
                    style={{ transform: 'translateX(-50%)' }}
                >
                    {images.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentIdx(i)}
                            className="rounded-full transition-all duration-300"
                            style={{
                                width: i === currentIdx ? '16px' : '6px',
                                height: '6px',
                                backgroundColor: i === currentIdx ? '#A8781B' : 'rgba(252,248,236,0.7)'
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

// ─────────────────────────────────────────────────────────────────────────────

const Projects = () => {
    const containerRef = useRef(null);
    const [activeTab, setActiveTab] = useState('all');

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
            { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
        );

        const elements = containerRef.current?.querySelectorAll('.scroll-trigger, .scroll-scale-in');
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, [activeTab]);

    const filtered = activeTab === 'all'
        ? projects
        : projects.filter(p => p.category === activeTab);

    const tabs = [
        { id: 'all', label: 'All Projects', count: projects.length },
        { id: 'website', label: 'Websites', count: projects.filter(p => p.category === 'website').length, Icon: Monitor },
        { id: 'app', label: 'Apps', count: projects.filter(p => p.category === 'app').length, Icon: Smartphone },
    ];

    return (
        <section
            id="projects"
            className="py-20 relative overflow-hidden"
            style={{ backgroundColor: '#EAE1CA' }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 20% 80%, rgba(196, 60, 44, 0.04), transparent 60%)' }}
            />

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                {/* Section header */}
                <div className="scroll-trigger animate-fade-in stagger-1 text-center mb-12">
                    <p
                        className="text-sm font-semibold uppercase tracking-widest mb-3"
                        style={{ color: '#8A7E63', letterSpacing: '0.2em' }}
                    >
                        What I've built
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
                        Projects
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto animate-blur-in stagger-2" style={{ color: '#4E4635' }}>
                        Real-world applications shipped to production — SaaS platforms, AI tools, booking systems, and mobile apps.
                    </p>
                </div>

                {/* Tab Filter */}
                <div className="scroll-trigger flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map(({ id, label, count, Icon }) => (
                        <button
                            key={id}
                            onClick={() => setActiveTab(id)}
                            className={`tab-filter flex items-center gap-2 ${activeTab === id ? 'active' : ''}`}
                        >
                            {Icon && <Icon size={14} />}
                            {label}
                            <span
                                className="px-1.5 py-0.5 rounded-full text-xs font-bold"
                                style={{
                                    backgroundColor: activeTab === id ? 'rgba(252,248,236,0.3)' : 'rgba(168,120,27,0.12)',
                                    color: activeTab === id ? '#FCF8EC' : '#7A560F'
                                }}
                            >
                                {count}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {filtered.map((project, index) => (
                        <div
                            key={`${project.title}-${index}`}
                            className="scroll-trigger scroll-scale-in rounded-xl border overflow-hidden transition-all duration-500 card-hover group card-brass-rule"
                            style={{
                                backgroundColor: '#FCF8EC',
                                borderColor: '#D9CFB6',
                                boxShadow: '0 2px 16px rgba(168, 120, 27, 0.08)'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.borderColor = '#A8781B';
                                e.currentTarget.style.boxShadow = '0 20px 48px rgba(168, 120, 27, 0.18)';
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.borderColor = '#D9CFB6';
                                e.currentTarget.style.boxShadow = '0 2px 16px rgba(168, 120, 27, 0.08)';
                            }}
                        >
                            {/* Image area */}
                            <ProjectImageSlideshow
                                images={project.images}
                                isLong={project.isLong}
                                isMobile={project.isMobile}
                                title={project.title}
                            />

                            {/* Card body */}
                            <div className="p-6">
                                {/* Title row */}
                                <div className="flex items-start justify-between gap-2 mb-2">
                                    <h3
                                        className="text-lg font-bold leading-tight"
                                        style={{ color: '#221C12' }}
                                    >
                                        {project.title}
                                    </h3>
                                    <span
                                        className="flex-shrink-0 text-xs font-semibold px-2 py-0.5 rounded uppercase tracking-wide"
                                        style={{
                                            backgroundColor: project.category === 'app' ? 'rgba(47,111,168,0.12)' : 'rgba(168,120,27,0.12)',
                                            color: project.category === 'app' ? '#1A4F80' : '#7A560F',
                                            border: `1px solid ${project.category === 'app' ? 'rgba(47,111,168,0.3)' : 'rgba(168,120,27,0.3)'}`
                                        }}
                                    >
                                        {project.category === 'app' ? '📱 App' : '🌐 Web'}
                                    </span>
                                </div>

                                {/* Date */}
                                <p className="text-xs mb-3" style={{ color: '#8A7E63' }}>{project.date}</p>

                                {/* Description */}
                                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#4E4635' }}>
                                    {project.description}
                                </p>

                                {/* Tech stack */}
                                <div className="flex flex-wrap gap-1.5 mb-5">
                                    {project.tech.map((tech, ti) => (
                                        <span
                                            key={ti}
                                            className="px-2 py-0.5 rounded text-xs font-medium border hover:scale-105 transition-all duration-200 cursor-default"
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

                                {/* Action buttons */}
                                <div className="flex flex-wrap gap-2">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 btn-hover hover:scale-105"
                                            style={{
                                                background: 'linear-gradient(135deg, #A8781B, #7A560F)',
                                                color: '#FCF8EC',
                                                boxShadow: '0 2px 10px rgba(168,120,27,0.25)'
                                            }}
                                        >
                                            <ExternalLink size={14} /> Live Site
                                        </a>
                                    )}
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border transition-all duration-300 btn-hover hover:scale-105"
                                            style={{
                                                backgroundColor: 'transparent',
                                                borderColor: '#B9AC8F',
                                                color: '#4E4635'
                                            }}
                                            onMouseEnter={e => {
                                                e.currentTarget.style.backgroundColor = '#A8781B';
                                                e.currentTarget.style.color = '#FCF8EC';
                                                e.currentTarget.style.borderColor = '#A8781B';
                                            }}
                                            onMouseLeave={e => {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.color = '#4E4635';
                                                e.currentTarget.style.borderColor = '#B9AC8F';
                                            }}
                                        >
                                            <Github size={14} /> GitHub
                                        </a>
                                    )}
                                    {project.appStore && (
                                        <a
                                            href={project.appStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all duration-300 btn-hover hover:scale-105"
                                            style={{ backgroundColor: 'transparent', borderColor: '#B9AC8F', color: '#4E4635' }}
                                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#C43C2C'; e.currentTarget.style.color = '#FCF8EC'; e.currentTarget.style.borderColor = '#C43C2C'; }}
                                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#4E4635'; e.currentTarget.style.borderColor = '#B9AC8F'; }}
                                        >
                                            🍎 App Store
                                        </a>
                                    )}
                                    {project.playStore && (
                                        <a
                                            href={project.playStore}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all duration-300 btn-hover hover:scale-105"
                                            style={{ backgroundColor: 'transparent', borderColor: '#B9AC8F', color: '#4E4635' }}
                                            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#2E7D4F'; e.currentTarget.style.color = '#FCF8EC'; e.currentTarget.style.borderColor = '#2E7D4F'; }}
                                            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#4E4635'; e.currentTarget.style.borderColor = '#B9AC8F'; }}
                                        >
                                            🤖 Play Store
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
