import React, { useState } from 'react';
import { Language } from './types';
import { CONTENT } from './constants';
import Section from './components/Section';
import LanguageToggle from './components/LanguageToggle';
import ProgressBar from './components/ProgressBar';
import { 
  Briefcase, Target, Zap, ChevronDown, CheckCircle2, 
  BarChart, Activity, TrendingUp, Cpu, Server, 
  Award, Mic, FileText, Database, ShieldCheck, ImagePlus
} from 'lucide-react';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip, CartesianGrid, BarChart as RechartsBar, Bar, Cell } from 'recharts';

// --- Mascot Component ---
const Mascot = ({ 
  src, 
  alt, 
  className = "", 
  quote, 
  delay = 0 
}: { 
  src: string, 
  alt: string, 
  className?: string, 
  quote?: string, 
  delay?: number 
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);

  // If runtime load failed
  if (hasError) {
      return (
        <div className={`pointer-events-none z-20 ${className}`}>
             <div 
                className="relative pointer-events-auto flex flex-col items-center justify-center bg-neutral-900/80 border-2 border-dashed border-neutral-600 text-neutral-400 text-[10px] font-mono p-2 rounded-xl text-center backdrop-blur-sm hover:border-blue-500 hover:text-blue-400 transition-colors"
                style={{ width: '120px', height: '120px', animation: `float ${6 + delay}s ease-in-out infinite`, animationDelay: `${delay}s` }}
             >
                <ImagePlus className="w-6 h-6 mb-2 opacity-50" />
                <span>Missing<br/><span className="text-white font-bold">{alt}</span></span>
             </div>
        </div>
      )
  }

  return (
    <div className={`pointer-events-none z-20 ${className}`}>
      <div 
        className="relative pointer-events-auto cursor-help group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ animation: `float ${6 + delay}s ease-in-out infinite`, animationDelay: `${delay}s` }}
      >
         {/* Speech Bubble */}
         {quote && (
           <div 
             className={`absolute -top-16 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold py-2 px-4 rounded-xl shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-300 w-max max-w-[180px] text-center whitespace-nowrap z-50 ${isHovered ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}`}
           >
              {quote}
              <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rotate-45"></div>
           </div>
         )}
         
         <img 
           src={src} 
           alt={alt} 
           onError={() => setHasError(true)}
           className="w-full h-auto drop-shadow-2xl transition-transform duration-300 group-hover:scale-110 group-active:scale-95" 
         />
      </div>
    </div>
  );
};

// Mock Data for Charts
const EFFICIENCY_DATA = [
  { name: 'W1', value: 40 },
  { name: 'W2', value: 55 },
  { name: 'W3', value: 78 },
  { name: 'W4', value: 92 },
];

const GROWTH_DATA = [
  { name: 'Aug', leads: 20, views: 1000 },
  { name: 'Sep', leads: 35, views: 1500 },
  { name: 'Oct', leads: 50, views: 2200 },
  { name: 'Nov', leads: 85, views: 3500 },
];

function App() {
  const [lang, setLang] = useState<Language>('zh');

  const toggleLang = () => setLang(prev => prev === 'zh' ? 'en' : 'zh');

  return (
    <div className="bg-black text-white selection:bg-red-600 selection:text-white font-sans w-full min-h-screen">
      <ProgressBar />
      <LanguageToggle lang={lang} toggle={toggleLang} />

      {/* Hero Section */}
      <Section id="hero" className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/30 via-black to-black">
        {/* Mascot: Hero (Standing/Waving) */}
        <Mascot 
          src="shark-1.png" 
          alt="shark-1.png" 
          className="absolute right-4 bottom-24 md:right-20 md:bottom-20 w-40 md:w-64"
          quote={lang === 'zh' ? "大家好，我是李婷慧的AI助手！" : "Hi there! I'm your AI assistant!"}
        />

        <div className="space-y-8 text-center md:text-left relative z-10">
          <div className="animate-on-scroll">
            <div className="inline-block px-3 py-1 bg-red-600/20 border border-red-600 rounded text-red-500 text-xs font-bold tracking-widest uppercase mb-6">
              {lang === 'zh' ? '2025 年度工作汇报' : '2025 Work Report'}
            </div>
          </div>
          
          <h1 className="animate-on-scroll delay-100 text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-neutral-200 to-neutral-500 leading-tight tracking-tight">
            {CONTENT.hero.title[lang]}
          </h1>
          
          <p className="animate-on-scroll delay-200 text-xl md:text-2xl text-neutral-400 max-w-3xl border-l-4 border-red-600 pl-6 mx-auto md:mx-0">
            {CONTENT.hero.subtitle[lang]}
          </p>
          
          <div className="animate-on-scroll delay-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
            {CONTENT.hero.details.map((item, idx) => (
              <div key={idx} className="glass-panel p-5 rounded-xl flex items-center space-x-4 border-l-2 border-l-blue-600 hover:bg-neutral-900/50">
                <div className="p-3 bg-blue-600/10 rounded-lg text-blue-500">
                  {item.icon}
                </div>
                <div className="text-left">
                  <p className="text-xs text-neutral-500 uppercase tracking-wider font-bold">{item.label[lang]}</p>
                  <p className="font-medium text-white">{item.value[lang]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-neutral-600">
          <ChevronDown className="w-8 h-8" />
        </div>
      </Section>

      {/* Timeline Section */}
      <Section id="timeline">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 h-full items-center relative">
          <div className="lg:col-span-2 space-y-8 relative z-10">
            <h2 className="animate-on-scroll text-4xl font-bold text-white mb-12 flex items-center gap-4">
              <span className="w-12 h-1 bg-red-600"></span>
              {CONTENT.timeline.title[lang]}
            </h2>
            <div className="relative border-l border-neutral-800 ml-4 space-y-12 py-4">
              {CONTENT.timeline.items.map((item, idx) => (
                <div key={idx} className={`animate-on-scroll delay-${(idx + 1) * 100} relative pl-10 group`}>
                  <span className={`absolute -left-[5px] top-2 w-3 h-3 rounded-full ${item.color === 'red' ? 'bg-red-600 shadow-[0_0_10px_rgba(239,68,68,0.5)]' : 'bg-blue-600 shadow-[0_0_10px_rgba(59,130,246,0.5)]'} ring-4 ring-black transition-all group-hover:scale-125`} />
                  <span className="text-xs font-mono text-neutral-500 block mb-2 tracking-widest uppercase">{item.period}</span>
                  <h3 className={`text-2xl font-bold mb-2 ${item.color === 'red' ? 'text-white' : 'text-neutral-300 group-hover:text-white transition-colors'}`}>{item.title[lang]}</h3>
                  <p className="text-neutral-400 text-base leading-relaxed max-w-xl border-b border-neutral-900 pb-4 group-hover:border-neutral-800 transition-colors">{item.desc[lang]}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="animate-on-scroll delay-300 glass-panel p-10 rounded-2xl border-t-4 border-t-red-600 flex flex-col justify-center h-fit relative">
            {/* Mascot: Timeline (Floating/Curious) */}
            <Mascot 
              src="./shark-2.png" 
              alt="shark-2.png" 
              className="absolute -top-16 -right-10 w-32 z-30 hidden md:block"
              quote={lang === 'zh' ? "一步一个脚印！" : "Step by step!"}
              delay={1}
            />
            
            <div className="w-20 h-20 bg-red-600/10 rounded-full flex items-center justify-center mb-8 mx-auto ring-1 ring-red-600/30">
              <Target className="text-red-500 w-10 h-10" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">{CONTENT.timeline.future.title[lang]}</h3>
            <p className="text-center text-neutral-500 text-sm mb-8 uppercase tracking-wider">{lang === 'zh' ? '职业目标' : 'Career Goal'}</p>
            <div className="space-y-6">
              {CONTENT.timeline.future.items.map((goal, idx) => (
                <div key={idx} className="flex items-center space-x-4 text-neutral-300 group">
                  <span className="flex-shrink-0 w-6 h-6 rounded bg-neutral-900 text-xs flex items-center justify-center font-mono text-neutral-500 border border-neutral-800 group-hover:border-red-600/50 group-hover:text-red-500 transition-colors">0{idx + 1}</span>
                  <span className="group-hover:text-white transition-colors">{goal[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Internship Cards */}
      <Section id="internship">
        <div className="w-full relative">
          <h2 className="animate-on-scroll text-4xl font-bold mb-16 flex items-center gap-4">
            <span className="w-2 h-10 bg-blue-600"></span>
            {CONTENT.internship.title[lang]}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {CONTENT.internship.cards.map((card, idx) => (
              <div key={idx} className={`animate-on-scroll delay-${(idx + 1) * 100} glass-panel p-8 rounded-xl hover:bg-neutral-900 group border-l-2 border-l-transparent hover:border-l-blue-600`}>
                <div className="w-14 h-14 bg-blue-900/20 rounded-lg flex items-center justify-center text-blue-500 mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: "w-7 h-7" })}
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors">{card.title[lang]}</h3>
                <p className="text-neutral-400 leading-relaxed">{card.desc[lang]}</p>
              </div>
            ))}
          </div>

          {/* Highlight Card */}
          <div className="animate-on-scroll delay-400 glass-panel p-10 rounded-xl border-l-2 border-l-transparent hover:border-l-blue-600 bg-gradient-to-r from-black via-blue-950/10 to-black relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-white/5 rounded-lg">
                    <Cpu className="text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold">{CONTENT.internship.highlight.title[lang]}</h3>
                </div>
                <p className="text-neutral-400 max-w-2xl">{CONTENT.internship.highlight.desc[lang]}</p>
              </div>
              <div className="flex gap-12 border-l border-neutral-800 pl-12">
                {CONTENT.internship.highlight.stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-5xl font-bold text-white mb-2">{stat.val}</div>
                    <div className="text-xs text-blue-500 uppercase tracking-widest font-bold">{stat.label[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Project 1: Yijiandian */}
      <Section id="project-1">
        <div className="w-full relative">
          <div className="mb-16 text-center md:text-left animate-on-scroll">
            <h2 className="text-4xl font-bold mb-2">{CONTENT.project1.title[lang]}</h2>
            <p className="text-neutral-500 text-lg">{CONTENT.project1.subtitle[lang]}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-6">
              {CONTENT.project1.cards.map((card, idx) => (
                <div key={idx} className={`animate-on-scroll delay-${(idx) * 100} glass-panel p-8 rounded-xl border-l-4 border-l-red-600 hover:bg-neutral-900/30`}>
                  <h3 className="text-2xl font-bold mb-3">{card.title[lang]}</h3>
                  <p className="text-neutral-400 mb-6">{card.desc[lang]}</p>
                  <div className="flex gap-3">
                    {card.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="px-3 py-1 bg-neutral-900 border border-neutral-800 text-xs font-bold rounded text-neutral-300 uppercase tracking-wider">
                        {tag[lang]}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Mock Dashboard Area */}
            <div className="animate-on-scroll delay-200 glass-panel p-8 rounded-xl border-l-2 border-l-transparent hover:border-l-blue-600 bg-black/40 relative">
               {/* Mascot: Dashboard (Sitting/Standing on Chart) */}
               <Mascot 
                  src="./shark-3.png" 
                  alt="shark-3.png" 
                  className="absolute -top-12 -right-8 w-28 z-20"
                  quote={lang === 'zh' ? "数据驱动效率！" : "Data drives efficiency!"}
                  delay={2}
               />
               
               <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold flex items-center gap-3 text-lg">
                    <div className="p-1.5 bg-red-600/20 rounded">
                      <BarChart className="w-5 h-5 text-red-500" />
                    </div>
                    {CONTENT.project1.dashboard.title[lang]}
                  </h3>
               </div>
               
               <div className="h-56 w-full mb-8">
                 <ResponsiveContainer width="100%" height="100%">
                   <AreaChart data={EFFICIENCY_DATA}>
                      <defs>
                        <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#ef4444" stopOpacity={0.5}/>
                          <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                      <XAxis dataKey="name" stroke="#555" tickLine={false} axisLine={false} tick={{fill: '#666', fontSize: 12}} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#000', border: '1px solid #333', borderRadius: '4px' }}
                        itemStyle={{ color: '#fff' }}
                        cursor={{ stroke: '#333' }}
                      />
                      <Area type="monotone" dataKey="value" stroke="#ef4444" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
                   </AreaChart>
                 </ResponsiveContainer>
               </div>

               <div className="grid grid-cols-2 gap-4">
                  {CONTENT.project1.dashboard.metrics.map((m, idx) => (
                    <div key={idx} className="bg-neutral-900/50 p-4 rounded-lg flex flex-col items-center justify-center text-center border border-neutral-800 hover:border-red-900/50 transition-colors">
                      <span className="text-xs text-neutral-500 uppercase tracking-wider mb-2">{m.sub[lang]}</span>
                      <span className="font-bold text-white text-sm">{m.label[lang]}</span>
                    </div>
                  ))}
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Project 2: New Media & Stability */}
      <Section id="project-2">
         <div className="w-full">
           <div className="mb-16 animate-on-scroll">
             <h2 className="text-4xl font-bold">{CONTENT.project2.title[lang]}</h2>
             <p className="text-neutral-500 mt-2 text-lg">{CONTENT.project2.subtitle[lang]}</p>
             <div className="h-1 w-20 bg-blue-600 mt-6"></div>
           </div>
           
           {/* Flow visualization */}
           <div className="animate-on-scroll delay-100 flex flex-col md:flex-row gap-4 justify-between items-center mb-16 px-4 md:px-0">
              {CONTENT.project2.flow.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="glass-panel p-8 rounded-lg text-center w-full md:w-1/3 border border-neutral-800 hover:border-blue-500/50 transition-colors relative group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-blue-600 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-shadow"></div>
                    <h4 className="font-bold mb-2 text-lg">{step.label[lang]}</h4>
                    <p className="text-xs text-neutral-500 uppercase tracking-widest">{step.sub[lang]}</p>
                  </div>
                  {idx < CONTENT.project2.flow.length - 1 && (
                    <div className="hidden md:block w-24 h-[2px] bg-neutral-800 relative">
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 border-t-2 border-r-2 border-neutral-600 rotate-45"></div>
                    </div>
                  )}
                  {idx < CONTENT.project2.flow.length - 1 && (
                    <div className="block md:hidden h-12 w-[2px] bg-neutral-800"></div>
                  )}
                </React.Fragment>
              ))}
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {CONTENT.project2.issues.map((issue, idx) => (
                <div key={idx} className={`animate-on-scroll delay-${(idx + 2) * 100} p-6 rounded-xl border ${issue.color === 'red' ? 'border-red-900/20 bg-red-950/5' : 'border-blue-900/20 bg-blue-950/5'} hover:bg-neutral-900 transition-colors group`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className={`font-bold ${issue.color === 'red' ? 'text-red-500' : 'text-blue-500'}`}>{issue.title[lang]}</h4>
                    <Activity className={`w-5 h-5 ${issue.color === 'red' ? 'text-red-600' : 'text-blue-600'} opacity-50 group-hover:opacity-100 transition-opacity`} />
                  </div>
                  <p className="text-sm text-neutral-400">{issue.desc[lang]}</p>
                </div>
              ))}
           </div>

           <div className="animate-on-scroll delay-500 glass-panel p-8 rounded-xl border-t border-t-green-500/50">
             <h4 className="text-lg font-bold mb-6 flex items-center gap-3">
               <CheckCircle2 className="text-green-500 w-6 h-6" />
               {lang === 'zh' ? '项目成果' : 'Key Results'}
             </h4>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {CONTENT.project2.results.map((res, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-2 hover:bg-white/5 rounded transition-colors">
                     <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                     <span className="text-neutral-300 font-medium">{res[lang]}</span>
                  </div>
                ))}
             </div>
           </div>
         </div>
      </Section>

      {/* Support (Insights) & Skills */}
      <Section id="support-skills">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full">
          {/* Insights Column */}
          <div className="space-y-8 animate-on-scroll">
            <h2 className="text-3xl font-bold text-white flex items-center gap-3">
              <span className="text-red-500">//</span> {CONTENT.support.title[lang]}
            </h2>
            <div className="space-y-4">
              {CONTENT.support.items.map((item, idx) => (
                <div key={idx} className="glass-panel p-6 rounded-lg border-l-4 border-l-neutral-800 hover:border-l-blue-600 transition-all duration-300 group">
                  <div className="flex justify-between items-start mb-4">
                     <div>
                        <h3 className="font-bold text-lg mb-2 text-white group-hover:text-blue-500 transition-colors">{item.title[lang]}</h3>
                        <p className="text-sm text-neutral-400">{item.desc[lang]}</p>
                     </div>
                     <div className="p-2 bg-neutral-900 rounded-lg text-neutral-500 group-hover:text-white transition-colors">
                       {/* Icons specifically for Insights: 0=Target(Efficiency), 1=Shield(Quality), 2=Cpu(Automation) */}
                       {idx === 0 ? <Target size={20} /> : idx === 1 ? <ShieldCheck size={20} /> : <Cpu size={20} />}
                     </div>
                  </div>
                  <div className="flex gap-2">
                    {item.tags.map((t, ti) => (
                      <span key={ti} className="text-[10px] uppercase font-bold tracking-wider bg-neutral-900 px-2 py-1 rounded text-neutral-500">{t[lang]}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Column */}
          <div className="space-y-8 animate-on-scroll delay-200">
             <h2 className="text-3xl font-bold text-white flex items-center gap-3">
               <span className="text-blue-500">//</span> {CONTENT.skills.title[lang]}
             </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {CONTENT.skills.groups.map((group, idx) => (
                 <div key={idx} className="glass-panel p-6 rounded-lg hover:bg-neutral-900/50 transition-colors border-l-2 border-l-transparent hover:border-l-blue-600">
                   <h3 className="text-red-500 font-bold mb-4 text-xs uppercase tracking-widest border-b border-neutral-800 pb-2">{group.title[lang]}</h3>
                   <ul className="space-y-3">
                     {group.items.map((skill, si) => (
                       <li key={si} className="flex items-center gap-3 text-sm text-neutral-300">
                         <div className="w-1 h-1 bg-white rounded-full"></div>
                         {skill}
                       </li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </Section>

      {/* Yixin Project & MCP */}
      <Section id="yixin-mcp">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-full relative">
            {/* Left: Yixin */}
            <div className="animate-on-scroll glass-panel p-8 rounded-2xl flex flex-col justify-between border-t-4 border-t-orange-500 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)] transition-shadow">
               <div>
                 <h2 className="text-2xl font-bold mb-8 flex justify-between items-center">
                   {CONTENT.project3.title[lang]}
                   <TrendingUp className="text-orange-500" />
                 </h2>
                 
                 <div className="h-48 w-full mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBar data={GROWTH_DATA} barSize={30}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#222" vertical={false} />
                      <XAxis dataKey="name" stroke="#555" tickLine={false} axisLine={false} tick={{fontSize: 12}} />
                      <Tooltip cursor={{fill: '#222'}} contentStyle={{ backgroundColor: '#000', border: '1px solid #333' }} />
                      <Bar dataKey="views" fill="#f97316" radius={[4, 4, 0, 0]} />
                    </RechartsBar>
                  </ResponsiveContainer>
                 </div>
               </div>

               <div className="grid grid-cols-3 gap-4">
                  {CONTENT.project3.stats.map((stat, idx) => (
                    <div key={idx} className="text-center p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                       <div className="text-3xl font-bold text-orange-500 mb-1">{stat.val}</div>
                       <div className="text-[10px] text-neutral-400 uppercase tracking-widest">{stat.label[lang]}</div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Right: MCP */}
            <div className="animate-on-scroll delay-200 glass-panel p-8 rounded-2xl flex flex-col justify-between border-t-4 border-t-blue-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.1)] transition-shadow relative">
               {/* Mascot: MCP (Celebrating/Happy) */}
               <Mascot 
                  src="./shark-4.png" 
                  alt="shark-4.png" 
                  className="absolute -bottom-10 -left-10 w-36 z-30 hidden md:block"
                  quote={lang === 'zh' ? "突破60万！" : "600k Breakthrough!"}
                  delay={0.5}
               />

               <div>
                  <h2 className="text-2xl font-bold mb-2 flex justify-between items-center">
                    {CONTENT.project4.title[lang]}
                    <Server className="text-blue-500" />
                  </h2>
                  <p className="text-sm text-neutral-500 mb-8">{CONTENT.project4.subtitle[lang]}</p>
                  
                  <div className="space-y-4 mb-8">
                     {CONTENT.project4.automation.map((auto, idx) => (
                       <div key={idx} className="flex items-center gap-5 p-4 bg-neutral-900/50 rounded-lg hover:bg-neutral-800 transition-colors border border-transparent hover:border-blue-900/50">
                          <div className="text-blue-500 bg-blue-500/10 p-2.5 rounded-lg">{auto.icon}</div>
                          <div>
                            <div className="font-bold text-sm text-white mb-1">{auto.label[lang]}</div>
                            <div className="text-xs text-neutral-500">{auto.desc[lang]}</div>
                          </div>
                       </div>
                     ))}
                  </div>
               </div>
               
               <div className="bg-gradient-to-r from-blue-950/40 to-black p-8 rounded-xl text-center border border-blue-900/30 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold text-white mb-2 tracking-tighter">{CONTENT.project4.peak.val}</div>
                    <div className="text-xs text-blue-400 uppercase tracking-[0.2em]">{CONTENT.project4.peak.label[lang]}</div>
                  </div>
               </div>
            </div>
         </div>
      </Section>

      {/* Achievements */}
      <Section id="achievements">
        <div className="text-center mb-20 animate-on-scroll">
          <h2 className="text-5xl font-bold mb-6">{CONTENT.achievements.title[lang]}</h2>
          <div className="w-24 h-1.5 bg-red-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {CONTENT.achievements.cards.map((card, idx) => (
            <div key={idx} className={`animate-on-scroll delay-${(idx) * 100} glass-panel p-8 rounded-2xl text-center border border-neutral-800 hover:border-red-600/50 group`}>
              <div className="w-20 h-20 mx-auto bg-neutral-900 rounded-full flex items-center justify-center text-red-600 mb-8 shadow-lg group-hover:shadow-red-900/20 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                {React.cloneElement(card.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10" })}
              </div>
              <h3 className="font-bold text-xl mb-3">{card.title[lang]}</h3>
              <p className="text-sm text-neutral-500 leading-relaxed">{card.desc[lang]}</p>
            </div>
          ))}
        </div>

        <div className="animate-on-scroll delay-400 flex flex-wrap justify-center gap-16 md:gap-32 border-t border-neutral-900 pt-16">
           {CONTENT.achievements.summary.map((sum, idx) => (
             <div key={idx} className="text-center group">
                <div className="text-6xl font-bold text-white mb-2 font-mono group-hover:text-blue-500 transition-colors duration-300">
                  {sum.val}
                </div>
                <div className="text-xs font-bold text-neutral-600 uppercase tracking-[0.3em]">
                  {sum.label[lang]}
                </div>
             </div>
           ))}
        </div>
      </Section>

      {/* Future */}
      <Section id="future" className="bg-black relative">
         {/* Mascot: Future (Flying) */}
         <Mascot 
            src="./shark-5.png" 
            alt="shark-5.png" 
            className="absolute top-0 right-10 w-40 z-20"
            quote={lang === 'zh' ? "飞向未来！" : "To the future!"}
            delay={3}
         />

         <div className="max-w-6xl mx-auto w-full">
            <h2 className="animate-on-scroll text-4xl font-bold mb-16 text-center">{CONTENT.future.title[lang]}</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
               {CONTENT.future.grid.map((item, idx) => (
                 <div key={idx} className={`animate-on-scroll delay-${(idx % 3) * 100} p-8 border border-neutral-800 rounded-xl hover:border-blue-600 hover:bg-neutral-900/30 transition-all duration-300 group`}>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">{item.title[lang]}</h3>
                    <p className="text-sm text-neutral-400 leading-relaxed">{item.desc[lang]}</p>
                 </div>
               ))}
            </div>

            <div className="animate-on-scroll delay-300 relative p-[2px] rounded-3xl bg-gradient-to-r from-red-600 via-purple-600 to-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.2)]">
              <div className="bg-black rounded-[22px] p-12 md:p-20 text-center relative overflow-hidden">
                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent"></div>
                 <h3 className="text-2xl md:text-5xl font-bold text-white mb-6 relative z-10 leading-tight">
                   "{CONTENT.future.goal[lang]}"
                 </h3>
                 <p className="text-neutral-600 text-sm font-bold uppercase tracking-[0.4em] mt-8 relative z-10">Ultimate Career Goal</p>
              </div>
            </div>
         </div>
      </Section>

      {/* Footer / Contact Placeholder */}
      <footer className="py-12 text-center text-neutral-800 text-xs uppercase tracking-widest border-t border-neutral-900 bg-black snap-end">
        <p>© 2025 Li Tinghui. Confidential Work Summary.</p>
      </footer>
    </div>
  );
}

export default App;