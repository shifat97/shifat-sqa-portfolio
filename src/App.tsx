import { useState } from 'react';
import Sidebar from './components/Sidebar';
import TimelineItem from './components/TimelineItem';
import SkillTag from './components/SkillTag';
import portfolioData from './data.json';
import {
    Mail,
    Phone,
    User,
    Briefcase,
    Rocket,
    Terminal,
    GraduationCap,
    BookOpen,
    Globe,
    Code,
    Moon,
    Sun,
} from 'lucide-react';
import type { PortfolioData } from './types';

const data = portfolioData as PortfolioData;

type TabType = 'About Me' | 'Experience' | 'Projects' | 'Skills' | 'Education' | 'Training';
type ThemeType = 'space' | 'light';

function App() {
    const [activeTab, setActiveTab] = useState<TabType>('About Me');
    const theme: ThemeType = 'space';

    const tabs: { name: TabType; icon: React.ReactNode }[] = [
        { name: 'About Me', icon: <User size={18} /> },
        { name: 'Experience', icon: <Briefcase size={18} /> },
        { name: 'Projects', icon: <Rocket size={18} /> },
        { name: 'Skills', icon: <Terminal size={18} /> },
        { name: 'Education', icon: <GraduationCap size={18} /> },
        { name: 'Training', icon: <BookOpen size={18} /> },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case 'About Me':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-4 tracking-tighter">
                            {data.personal_info.name}
                        </h1>
                        <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8 uppercase tracking-widest">
                            {data.personal_info.title}
                        </h2>
                        <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed mb-12">
                            {data.personal_info.summary}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-16">
                            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:border-blue-500/50 group">
                                <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-1">
                                        Email
                                    </p>
                                    <p className="text-slate-900 dark:text-white font-bold">
                                        {data.personal_info.email}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:border-green-500/50 group">
                                <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-1">
                                        Phone
                                    </p>
                                    <p className="text-slate-900 dark:text-white font-bold">
                                        {data.personal_info.phone}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:border-indigo-500/50 group">
                                <div className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform">
                                    <Globe size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-1">
                                        LinkedIn
                                    </p>
                                    <a
                                        href={data.personal_info.linkedin}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-900 dark:text-white font-bold hover:text-blue-500 transition-colors"
                                    >
                                        {data.personal_info.linkedin.split('/').pop()}
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-5 p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm transition-all hover:shadow-xl hover:border-slate-500/50 group">
                                <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 group-hover:scale-110 transition-transform">
                                    <Code size={24} />
                                </div>
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-1">
                                        GitHub
                                    </p>
                                    <a
                                        href={data.personal_info.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="text-slate-900 dark:text-white font-bold hover:text-blue-500 transition-colors"
                                    >
                                        {data.personal_info.github.split('/').pop()}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            case 'Experience':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Work Experience 💼</h2>
                        <div className="max-w-3xl">
                            {data.experience.map((exp, idx) => (
                                <TimelineItem
                                    key={idx}
                                    title={exp.company}
                                    subtitle={exp.role}
                                    period={exp.period}
                                    location={exp.location}
                                    items={exp.responsibilities}
                                />
                            ))}
                        </div>
                    </div>
                );
            case 'Projects':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Notable Projects 🚀</h2>
                        <div className="max-w-3xl">
                            {data.projects.map((proj, idx) => (
                                <TimelineItem
                                    key={idx}
                                    title={proj.title}
                                    subtitle="Project Highlight"
                                    period={proj.period}
                                    link={proj.link}
                                    items={proj.highlights}
                                    icon="🚀"
                                />
                            ))}
                        </div>
                    </div>
                );
            case 'Skills':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
                            Technical Expertise 🛠️
                        </h2>

                        <div className="space-y-12">
                            {Object.entries(data.technical_skills).map(([category, skills], idx) => (
                                <div key={idx}>
                                    <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400 mb-6">
                                        {category.replace(/_/g, ' ')}
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {skills.map((skill: string, sIdx: number) => (
                                            <SkillTag key={sIdx} name={skill} />
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                );
            case 'Education':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">Education 🎓</h2>
                        <div className="max-w-3xl">
                            {data.education.map((edu, idx) => (
                                <TimelineItem
                                    key={idx}
                                    title={edu.institution}
                                    subtitle={edu.degree}
                                    period={edu.period}
                                    location={edu.location}
                                    items={[`GPA: ${edu.gpa}`]}
                                    icon="🎓"
                                >
                                    <div className="mt-6">
                                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-3">
                                            Key Coursework
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map((course, cIdx) => (
                                                <span
                                                    key={cIdx}
                                                    className="px-3 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium border border-slate-200 dark:border-slate-700"
                                                >
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </TimelineItem>
                            ))}
                        </div>

                        {data.awards && data.awards.length > 0 && (
                            <div className="mt-16">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                    Honors & Awards 🏆
                                </h3>
                                <ul className="space-y-4">
                                    {data.awards.map((award, idx) => (
                                        <li
                                            key={idx}
                                            className="p-5 rounded-2xl bg-yellow-50 dark:bg-yellow-900/10 border border-yellow-100 dark:border-yellow-900/30 text-slate-700 dark:text-slate-300 flex items-center gap-4"
                                        >
                                            <span className="text-2xl">✨</span>
                                            <span className="font-medium">{award}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                );
            case 'Training':
                return (
                    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-10">
                            Training & Courses 📚
                        </h2>
                        <div className="max-w-3xl">
                            {data.training.map((train, idx) => (
                                <TimelineItem
                                    key={idx}
                                    title={train.institution}
                                    subtitle={train.program}
                                    period={train.period}
                                    location={train.location}
                                    icon="📚"
                                >
                                    <div className="mt-2">
                                        <p className="text-[10px] text-slate-400 uppercase font-black tracking-[0.2em] mb-4">
                                            Core Modules
                                        </p>
                                        <div className="grid grid-cols-1 gap-4">
                                            {train.topics.map((topic, tIdx) => {
                                                const [title, desc] = topic.includes(':')
                                                    ? topic.split(':')
                                                    : [topic, ''];
                                                return (
                                                    <div
                                                        key={tIdx}
                                                        className="group p-4 rounded-xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/50 hover:border-blue-500/30 transition-all"
                                                    >
                                                        <p className="text-blue-600 dark:text-blue-400 font-bold text-sm mb-1">
                                                            {title}
                                                        </p>
                                                        {desc && (
                                                            <p className="text-slate-500 dark:text-slate-400 text-xs leading-relaxed">
                                                                {desc.trim()}
                                                            </p>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TimelineItem>
                            ))}
                        </div>

                        {data.certifications && data.certifications.length > 0 && (
                            <div className="mt-16">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                    Certifications 📜
                                </h3>
                                <ul className="space-y-4">
                                    {data.certifications.map((cert, idx) => (
                                        <li
                                            key={idx}
                                            className="p-5 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 text-slate-700 dark:text-slate-300 flex items-center gap-4"
                                        >
                                            <span className="text-2xl">✅</span>
                                            <span className="font-medium">{cert}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-white dark:bg-slate-950 flex flex-col md:flex-row">
            <Sidebar />

            <main
                className={`flex-1 md:ml-[30%] lg:ml-[25%] p-4 sm:p-6 md:p-12 lg:p-20 overflow-y-auto transition-colors duration-500 ${theme === 'space' ? 'space-theme text-white' : 'bg-white text-slate-900'}`}
            >
                {/* Tabs Navigation & Theme Toggle */}
                <div className="max-w-4xl mx-auto sticky top-0 z-20">
                    <div
                        className={`flex items-center justify-between backdrop-blur-xl border-b py-2 px-4 mb-12 lg:mb-16 rounded-2xl transition-all duration-500 ${theme === 'space' ? 'bg-black/40 border-white/10' : 'bg-white/90 border-slate-100 shadow-sm'}`}
                    >
                        <nav className="flex flex-wrap justify-start gap-1 md:gap-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.name}
                                    onClick={() => setActiveTab(tab.name)}
                                    className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 transform active:scale-95 ${
                                        activeTab === tab.name
                                            ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/40 scale-105'
                                            : `${theme === 'space' ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'}`
                                    }`}
                                >
                                    <span className={activeTab === tab.name ? 'text-white' : 'text-blue-500'}>
                                        {tab.icon}
                                    </span>
                                    <span className="hidden sm:inline">{tab.name}</span>
                                </button>
                            ))}
                        </nav>

                        <button
                            className={`p-2.5 rounded-xl border transition-all duration-300 transform hover:scale-110 active:scale-90 flex-shrink-0 ${
                                theme === 'space'
                                    ? 'bg-white/10 border-white/20 text-yellow-400 hover:bg-white/20'
                                    : 'bg-slate-100 border-slate-200 text-indigo-600 hover:bg-slate-200 shadow-inner'
                            }`}
                            title="Theme Toggle (Disabled)"
                        >
                            {theme === 'space' ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </div>
                </div>

                {/* Dynamic Content */}
                <div className="max-w-4xl mx-auto">{renderContent()}</div>

                {/* Footer */}
                <footer className="mt-32 pt-12 border-t border-slate-100 dark:border-slate-900 text-center text-slate-400 text-sm">
                    <p>© 2026 {data.personal_info.name}. Built with React, TypeScript & Tailwind CSS.</p>
                </footer>
            </main>
        </div>
    );
}

export default App;
