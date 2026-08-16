import { Mail, MapPin, Phone, Send, Github, Linkedin } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const containerRef = useRef(null);
    const formRef = useRef(null);
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (sending) return; // prevent double submission

        setError(null);

        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error('EmailJS configuration missing in environment:', {
                hasServiceId: !!serviceId,
                hasTemplateId: !!templateId,
                hasPublicKey: !!publicKey
            });
            setError('Email service is currently misconfigured. Please contact me directly at khalidhussainchandio9@gmail.com');
            return;
        }

        setSending(true);

        emailjs
            .sendForm(
                serviceId,
                templateId,
                formRef.current,
                { publicKey: publicKey }
            )
            .then(() => {
                setSending(false);
                setSent(true);
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setSent(false), 5000);
            })
            .catch((err) => {
                console.error('EmailJS error response:', err);
                setSending(false);
                const errorMsg = err?.text || err?.message || 'Something went wrong';
                if (errorMsg.includes('quota') || errorMsg.includes('limit') || err?.status === 429) {
                    setError('Email quota exceeded for today. Please reach me directly at khalidhussainchandio9@gmail.com');
                } else {
                    setError('Failed to send email. Please try again or reach me directly at khalidhussainchandio9@gmail.com');
                }
            });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

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

        const elements = containerRef.current?.querySelectorAll('.scroll-trigger, .scroll-fade-in-left, .scroll-fade-in-right');
        elements?.forEach(el => observer.observe(el));

        return () => {
            elements?.forEach(el => observer.unobserve(el));
        };
    }, []);

    const contactItems = [
        {
            Icon: Mail,
            label: 'Email',
            value: 'khalidhussainchandio9@gmail.com',
            href: 'mailto:khalidhussainchandio9@gmail.com',
            accent: '#A8781B',
            bg: 'rgba(168, 120, 27, 0.08)'
        },
        {
            Icon: Phone,
            label: 'Phone',
            value: '+92-315-0344416',
            href: 'tel:+923150344416',
            accent: '#2E7D4F',
            bg: 'rgba(46, 125, 79, 0.08)'
        },
        {
            Icon: Github,
            label: 'GitHub',
            value: 'github.com/khalidhussain-dev',
            href: 'https://github.com/khalidhussain-dev',
            accent: '#221C12',
            bg: 'rgba(34, 28, 18, 0.06)'
        },
        {
            Icon: Linkedin,
            label: 'LinkedIn',
            value: 'linkedin.com/in/khalid-developer',
            href: 'https://www.linkedin.com/in/khalid-developer',
            accent: '#2F6FA8',
            bg: 'rgba(47, 111, 168, 0.08)'
        },
        {
            Icon: MapPin,
            label: 'Location',
            value: 'Lahore, Pakistan',
            href: null,
            accent: '#C43C2C',
            bg: 'rgba(196, 60, 44, 0.06)'
        },
    ];

    const inputStyle = {
        width: '100%',
        padding: '12px 16px',
        backgroundColor: '#F4EEDD',
        border: '1.5px solid #D9CFB6',
        borderRadius: '8px',
        color: '#221C12',
        fontSize: '0.9rem',
        outline: 'none',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
    };

    return (
        <section
            id="contact"
            className="py-20 relative overflow-hidden"
            style={{ backgroundColor: '#EAE1CA' }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{ background: 'radial-gradient(circle at 30% 30%, rgba(168, 120, 27, 0.06), transparent 60%)' }}
            />

            <div ref={containerRef} className="container mx-auto px-6 relative z-10">
                <div className="scroll-trigger animate-fade-in stagger-1 text-center mb-16">
                    <p
                        className="text-sm font-semibold uppercase tracking-widest mb-3"
                        style={{ color: '#8A7E63', letterSpacing: '0.2em' }}
                    >
                        Let's collaborate
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
                        Get In Touch
                    </h2>
                    <p className="mt-6 max-w-2xl mx-auto animate-blur-in stagger-2" style={{ color: '#4E4635' }}>
                        Have a project in mind or want to collaborate? I'd love to hear from you!
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact info */}
                    <div className="space-y-6 scroll-fade-in-left">
                        <div className="scroll-trigger">
                            <h3
                                className="text-2xl font-bold mb-3"
                                style={{ color: '#221C12' }}
                            >
                                Let's Connect
                            </h3>
                            <p className="leading-relaxed text-sm" style={{ color: '#4E4635' }}>
                                I'm always open to discussing new projects, collaboration opportunities, or just having a great conversation about technology and building things.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* eslint-disable-next-line no-unused-vars */}
                            {contactItems.map(({ Icon, label, value, href, accent, bg }) => (
                                <div
                                    key={label}
                                    className="scroll-trigger scroll-fade-in-left flex items-center gap-4 group p-4 rounded-xl border transition-all duration-300"
                                    style={{
                                        backgroundColor: '#FCF8EC',
                                        borderColor: '#D9CFB6',
                                        boxShadow: '0 1px 8px rgba(168,120,27,0.06)'
                                    }}
                                    onMouseEnter={e => {
                                        e.currentTarget.style.borderColor = accent;
                                        e.currentTarget.style.boxShadow = `0 6px 20px rgba(168,120,27,0.12)`;
                                    }}
                                    onMouseLeave={e => {
                                        e.currentTarget.style.borderColor = '#D9CFB6';
                                        e.currentTarget.style.boxShadow = '0 1px 8px rgba(168,120,27,0.06)';
                                    }}
                                >
                                    <div
                                        className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300"
                                        style={{ backgroundColor: bg }}
                                    >
                                        <Icon size={20} style={{ color: accent }} />
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: '#8A7E63' }}>
                                            {label}
                                        </p>
                                        {href ? (
                                            <a
                                                href={href}
                                                target={href.startsWith('http') ? '_blank' : undefined}
                                                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="text-sm font-medium transition-colors duration-300 hover:underline"
                                                style={{ color: '#221C12' }}
                                                onMouseEnter={e => e.currentTarget.style.color = accent}
                                                onMouseLeave={e => e.currentTarget.style.color = '#221C12'}
                                            >
                                                {value}
                                            </a>
                                        ) : (
                                            <p className="text-sm font-medium" style={{ color: '#221C12' }}>{value}</p>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Availability indicator */}
                        <div
                            className="flex items-center gap-3 px-4 py-3 rounded-xl border"
                            style={{ backgroundColor: 'rgba(46, 125, 79, 0.08)', borderColor: 'rgba(46, 125, 79, 0.25)' }}
                        >
                            <span
                                className="w-2.5 h-2.5 rounded-full animate-pulse flex-shrink-0"
                                style={{ backgroundColor: '#2E7D4F' }}
                            />
                            <span className="text-sm font-medium" style={{ color: '#2E7D4F' }}>
                                Available for new projects and contract work
                            </span>
                        </div>
                    </div>

                    {/* Contact form */}
                    <div
                        className="scroll-trigger scroll-fade-in-right p-8 rounded-xl border transition-all duration-500 stagger-2 card-brass-rule"
                        style={{
                            backgroundColor: '#FCF8EC',
                            borderColor: '#D9CFB6',
                            boxShadow: '0 2px 16px rgba(168,120,27,0.08)'
                        }}
                    >
                        {sent ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-8">
                                <div
                                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4 animate-bounce-in"
                                    style={{ backgroundColor: 'rgba(46,125,79,0.12)' }}
                                >
                                    <span className="text-3xl">✓</span>
                                </div>
                                <h4 className="text-xl font-bold mb-2" style={{ color: '#2E7D4F' }}>Message Sent!</h4>
                                <p className="text-sm" style={{ color: '#4E4635' }}>
                                    Thanks for reaching out. I'll get back to you soon!
                                </p>
                            </div>
                        ) : (
                            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                                {[
                                    { id: 'name', label: 'Name', type: 'text', placeholder: 'Your full name' },
                                    { id: 'email', label: 'Email', type: 'email', placeholder: 'your.email@example.com' },
                                ].map(({ id, label, type, placeholder }) => (
                                    <div key={id}>
                                        <label
                                            htmlFor={id}
                                            className="block text-sm font-semibold mb-1.5 uppercase tracking-wider"
                                            style={{ color: '#4E4635', letterSpacing: '0.08em' }}
                                        >
                                            {label}
                                        </label>
                                        <input
                                            type={type}
                                            id={id}
                                            name={id}
                                            value={formData[id]}
                                            onChange={handleChange}
                                            required
                                            style={inputStyle}
                                            placeholder={placeholder}
                                            onFocus={e => {
                                                e.target.style.borderColor = '#A8781B';
                                                e.target.style.boxShadow = '0 0 0 3px rgba(168,120,27,0.12)';
                                            }}
                                            onBlur={e => {
                                                e.target.style.borderColor = '#D9CFB6';
                                                e.target.style.boxShadow = 'none';
                                            }}
                                        />
                                    </div>
                                ))}

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-semibold mb-1.5 uppercase tracking-wider"
                                        style={{ color: '#4E4635', letterSpacing: '0.08em' }}
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        style={{ ...inputStyle, resize: 'none' }}
                                        placeholder="Tell me about your project..."
                                        onFocus={e => {
                                            e.target.style.borderColor = '#A8781B';
                                            e.target.style.boxShadow = '0 0 0 3px rgba(168,120,27,0.12)';
                                        }}
                                        onBlur={e => {
                                            e.target.style.borderColor = '#D9CFB6';
                                            e.target.style.boxShadow = 'none';
                                        }}
                                    />
                                </div>

                                {/* Error message */}
                                {error && (
                                    <div
                                        className="px-4 py-3 rounded-lg text-sm"
                                        style={{
                                            backgroundColor: 'rgba(196, 60, 44, 0.08)',
                                            border: '1px solid rgba(196, 60, 44, 0.25)',
                                            color: '#C43C2C'
                                        }}
                                    >
                                        {error}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="w-full py-3 px-8 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer hover:scale-105 btn-hover"
                                    style={{
                                        background: sending ? '#D9CFB6' : 'linear-gradient(135deg, #A8781B, #7A560F)',
                                        color: sending ? '#8A7E63' : '#FCF8EC',
                                        boxShadow: sending ? 'none' : '0 4px 18px rgba(168,120,27,0.3)'
                                    }}
                                >
                                    {sending ? 'Sending...' : (<>Send Message <Send size={18} /></>)}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
