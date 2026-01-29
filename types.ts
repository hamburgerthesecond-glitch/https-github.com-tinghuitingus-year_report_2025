import React from 'react';

export type Language = 'zh' | 'en';

export interface LocalizedText {
  zh: string;
  en: string;
}

export interface SectionProps {
  id: string;
  lang: Language;
}

export interface TimelineItem {
  period: string;
  title: LocalizedText;
  desc: LocalizedText;
  color: 'red' | 'blue';
}

export interface StatItem {
  value: string;
  label: LocalizedText;
  icon?: React.ReactNode;
}
