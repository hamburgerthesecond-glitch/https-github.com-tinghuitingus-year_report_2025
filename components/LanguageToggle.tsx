import React from 'react';
import { Language } from '../types';
import { Globe } from 'lucide-react';

interface Props {
  lang: Language;
  toggle: () => void;
}

const LanguageToggle: React.FC<Props> = ({ lang, toggle }) => {
  return (
    <button
      onClick={toggle}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 bg-slate-900/80 backdrop-blur-md border border-slate-700 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all shadow-lg hover:shadow-blue-900/20 group"
    >
      <Globe className="w-4 h-4 text-blue-400 group-hover:rotate-12 transition-transform" />
      <span className="text-sm font-medium tracking-wide">
        {lang === 'zh' ? 'EN' : '中文'}
      </span>
    </button>
  );
};

export default LanguageToggle;