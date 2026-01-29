import React from 'react';
import { LocalizedText, TimelineItem } from './types';
import { 
  Users, Building2, Briefcase, Calendar, 
  Target, Zap, MessageCircle, BarChart3, 
  Database, ShieldCheck, PieChart, TrendingUp,
  Cpu, Award, Mic
} from 'lucide-react';

export const CONTENT = {
  hero: {
    title: { zh: "从实习生到独立贡献者", en: "From Intern to Independent Contributor" },
    subtitle: { zh: "实习与工作总结 | 共享技术部门 数据产品组", en: "Internship & Work Summary | Shared Tech Dept - Data Product Group" },
    details: [
      { icon: <Users className="w-5 h-5" />, label: { zh: "汇报人", en: "Reporter" }, value: { zh: "李婷慧", en: "Li Tinghui" } },
      { icon: <Building2 className="w-5 h-5" />, label: { zh: "所属单位", en: "Company" }, value: { zh: "腾易科技", en: "Tengyi Tech" } },
      { icon: <Briefcase className="w-5 h-5" />, label: { zh: "部门", en: "Department" }, value: { zh: "共享技术部门", en: "Shared Tech Dept" } },
      { icon: <Calendar className="w-5 h-5" />, label: { zh: "时长建议", en: "Duration" }, value: { zh: "6-8 分钟", en: "6-8 Mins" } },
    ]
  },
  timeline: {
    title: { zh: "职业发展时间线", en: "Career Timeline" },
    items: [
      {
        period: "2025.07 - 09",
        title: { zh: "实习筑基期", en: "Internship Foundation" },
        desc: { zh: "熟悉业务环境，完成从学生到职场人的心态转换", en: "Familiarized with business environment, shifted mindset from student to professional." },
        color: "blue"
      },
      {
        period: "2025.09.20",
        title: { zh: "正式入职", en: "Official Entry" },
        desc: { zh: "职业生涯里程碑，开启新篇章", en: "Career milestone, starting a new chapter." },
        color: "red"
      },
      {
        period: "2025.10 - 12",
        title: { zh: "独立承担模块", en: "Independent Modules" },
        desc: { zh: "开始承担更独立的工作内容", en: "Started taking on independent work modules." },
        color: "blue"
      },
      {
        period: "2026.02 - 至今",
        title: { zh: "独立负责期", en: "Independent Responsibility" },
        desc: { zh: "负责易鑫投流、MCP项目维护及AI产品调研", en: "Leading Yixin traffic data, MCP maintenance, and AI research." },
        color: "red"
      }
    ] as TimelineItem[],
    future: {
      title: { zh: "核心目标", en: "Core Goal" },
      items: [
        { zh: "从被动接受任务", en: "From Passive Receiver" },
        { zh: "转变为", en: "Transform To" },
        { zh: "主动推动项目的人", en: "Active Project Driver" }
      ]
    }
  },
  internship: {
    title: { zh: "实习阶段：基础搭建", en: "Internship: Foundation Building" },
    cards: [
      { 
        title: { zh: "懂产品", en: "Understand Product" }, 
        desc: { zh: "深入理解产品体系与业务逻辑", en: "Deep understanding of product system and business logic." },
        icon: <Briefcase />
      },
      { 
        title: { zh: "懂流程", en: "Understand Process" }, 
        desc: { zh: "掌握从需求分析到产出的完整闭环", en: "Mastered the full loop from analysis to delivery." },
        icon: <Target />
      },
      { 
        title: { zh: "懂协作", en: "Understand Collaboration" }, 
        desc: { zh: "理解跨团队协作的关键节点", en: "Understood key cross-team collaboration points." },
        icon: <Users />
      }
    ],
    highlight: {
      title: { zh: "价值认知", en: "Value Cognition" },
      desc: { zh: "第一次理解了数据分析师在产品生态中的价值——不只是取数，而是用数据驱动效率提升。", en: "Realized the value of a data analyst: not just fetching data, but driving efficiency with data." },
      stats: [
        { val: "3", label: { zh: "大核心目标", en: "Core Goals" } },
        { val: "1", label: { zh: "个关键认知", en: "Key Insight" } }
      ]
    }
  },
  project1: {
    title: { zh: "实习项目：易间店", en: "Internship Project: Yijiandian" },
    subtitle: { zh: "从质检员到效率推动者", en: "From QA to Efficiency Driver" },
    cards: [
      {
        title: { zh: "审核与抽检", en: "Audit & Check" },
        desc: { zh: "负责标注样本的日常审核与抽检，确保质量达标", en: "Daily audit of samples ensuring quality meets standards." },
        tags: [{zh: "基础工作", en: "Foundation"}, {zh: "质量把控", en: "QA"}]
      },
      {
        title: { zh: "效率瓶颈分析", en: "Efficiency Analysis" },
        desc: { zh: "不满足于做“质检员”，主动分析瓶颈，开发实时效率看板", en: "Proactively analyzed bottlenecks and developed real-time efficiency dashboards." },
        tags: [{zh: "主动优化", en: "Optimization"}, {zh: "Norma+SQL", en: "Norma+SQL"}]
      }
    ],
    dashboard: {
      title: { zh: "实时效率看板", en: "Real-time Dashboard" },
      metrics: [
        { label: { zh: "提交量", en: "Submissions" }, sub: { zh: "实时监控", en: "Monitor" } },
        { label: { zh: "完成率", en: "Completion" }, sub: { zh: "进度追踪", en: "Tracking" } },
        { label: { zh: "个人表现", en: "Performance" }, sub: { zh: "绩效评估", en: "Eval" } },
        { label: { zh: "趋势分析", en: "Trends" }, sub: { zh: "数据洞察", en: "Insight" } }
      ]
    }
  },
  project2: {
    title: { zh: "新媒体专项", en: "New Media Project" },
    subtitle: { zh: "数据验证与第一道防线", en: "Data Validation & First Line of Defense" },
    flow: [
      { label: { zh: "数据库", en: "Database" }, sub: { zh: "源头数据", en: "Source" } },
      { label: { zh: "蓝链数据中心", en: "Blue Chain DC" }, sub: { zh: "中间层", en: "Middleware" } },
      { label: { zh: "官方社媒平台", en: "Social Media" }, sub: { zh: "展示端", en: "Frontend" } }
    ],
    issues: [
      { title: { zh: "程序缺陷", en: "Bugs" }, desc: { zh: "发现并推动解决", en: "Identified & Fixed" }, color: "red" },
      { title: { zh: "数据缺失", en: "Missing Data" }, desc: { zh: "一致性校验", en: "Consistency Check" }, color: "blue" },
      { title: { zh: "异常问题", en: "Anomalies" }, desc: { zh: "及时上报", en: "Reported" }, color: "red" }
    ],
    results: [
      { zh: "建立数据验证意识", en: "Validation Awareness" },
      { zh: "数据质量是决策基石", en: "Quality is Cornerstone" },
      { zh: "做第一道防线", en: "First Line of Defense" },
      { zh: "推动问题解决", en: "Problem Solving" }
    ]
  },
  support: {
    title: { zh: "工作感悟与价值", en: "Key Insights & Value" },
    items: [
      {
        title: { zh: "数据驱动效率", en: "Data Driven Efficiency" },
        desc: { zh: "不只是取数工具人，而是通过数据分析驱动业务效率提升", en: "Not just fetching data, but driving business efficiency through analysis." },
        tags: [{zh: "易间店经验", en: "Yijiandian"}, {zh: "价值创造", en: "Value Create"}]
      },
      {
        title: { zh: "质量的第一道防线", en: "First Line of Defense" },
        desc: { zh: "数据质量是决策的基石，必须建立严格的数据验证意识", en: "Data quality is the cornerstone of decision making. Validation is key." },
        tags: [{zh: "新媒体经验", en: "New Media"}, {zh: "严谨负责", en: "Rigorous"}]
      },
      {
        title: { zh: "自动化思维", en: "Automation Mindset" },
        desc: { zh: "将AI工具融入工作流，实现质量控制的自动化", en: "Integrating AI tools into workflow to automate quality control." },
        tags: [{zh: "AI应用", en: "AI App"}, {zh: "效率提升", en: "Efficiency"}]
      }
    ]
  },
  skills: {
    title: { zh: "技能工具：硬实力提升", en: "Skills & Tools" },
    groups: [
      { title: { zh: "数据工具体系", en: "Data Tools" }, items: ["Norma", "数询 (Query)", "数语 (Speak)", "蓝图智慧"] },
      { title: { zh: "SQL 进阶", en: "Advanced SQL" }, items: ["CTE (简化嵌套)", "Union (多源整合)", "Hive vs Presto"] },
      { title: { zh: "AI 融合", en: "AI Integration" }, items: ["DeepSeek", "豆包 (Doubao)", "自动化质控"] },
      { title: { zh: "办公技能", en: "Office Skills" }, items: ["Excel 高级应用", "数据可视化", "汇报表达"] },
    ]
  },
  project3: {
    title: { zh: "核心项目：易鑫投流", en: "Core Project: Yixin Ad Traffic" },
    stats: [
      { label: { zh: "线索转化率", en: "Conversion Rate" }, val: "↑", sub: { zh: "持续提升", en: "Increasing" } },
      { label: { zh: "播放量", en: "Views" }, val: "↗", sub: { zh: "稳定增长", en: "Stable Growth" } },
      { label: { zh: "互动量", en: "Interactions" }, val: "+", sub: { zh: "优化建议", en: "Optimized" } },
    ]
  },
  project4: {
    title: { zh: "核心项目：MCP", en: "Core Project: MCP" },
    subtitle: { zh: "成长最快的项目：数据分析与自动化运维", en: "Fastest Growth: Analysis & Automated Ops" },
    automation: [
      { icon: <BarChart3 />, label: { zh: "行为分析", en: "Behavior Analysis" }, desc: { zh: "用户行为与返空分析", en: "User Behavior & Nulls" } },
      { icon: <Calendar />, label: { zh: "日常看板", en: "Daily Dashboard" }, desc: { zh: "每日数据监控", en: "Daily Monitoring" } },
      { icon: <Zap />, label: { zh: "自动推送", en: "Auto Email" }, desc: { zh: "首版自动化邮件", en: "First Auto Email" } }
    ],
    peak: { label: { zh: "峰值调用量", en: "Peak Calls" }, val: "600,000" }
  },
  achievements: {
    title: { zh: "阶段性成果与荣誉", en: "Achievements & Honors" },
    cards: [
      { icon: <MessageCircle />, title: { zh: "MCP自动化邮件", en: "MCP Auto Email" }, desc: { zh: "首版推送落地", en: "First Edition Launched" } },
      { icon: <Mic />, title: { zh: "部门分享演讲", en: "Dept Presentation" }, desc: { zh: "首次全中文公开分享", en: "First Public Speech" } },
      { icon: <Award />, title: { zh: "公益融裕证书", en: "Public Welfare Cert" }, desc: { zh: "社会责任践行", en: "Social Responsibility" } },
      { icon: <Award />, title: { zh: "AI视频梦工厂", en: "AI Video Award" }, desc: { zh: "1024活动优秀奖", en: "Excellence Award" } }
    ],
    summary: [
      { val: "1", label: { zh: "个自动化突破", en: "Automation" } },
      { val: "1", label: { zh: "次自我突破", en: "Breakthrough" } },
      { val: "2", label: { zh: "项活动荣誉", en: "Honors" } }
    ]
  },
  future: {
    title: { zh: "未来规划：职业进阶", en: "Future Planning" },
    grid: [
      { title: { zh: "思维转变", en: "Mindset Shift" }, desc: { zh: "从应届生心态转向职业化，培养Leader意识", en: "Develop professional & leader mindset." } },
      { title: { zh: "业务深化", en: "Business Depth" }, desc: { zh: "不局限于分析，理解产品管理与业务全局", en: "Understand product mgmt & global view." } },
      { title: { zh: "技术拓展", en: "Tech Expansion" }, desc: { zh: "掌握Python/ML，深化AI与Agent应用", en: "Master Python, ML, AI Agents." } },
      { title: { zh: "行业洞察", en: "Industry Insight" }, desc: { zh: "持续加深对易车业务及汽车生态的理解", en: "Deepen auto industry insights." } },
      { title: { zh: "成果沉淀", en: "Deliverables" }, desc: { zh: "主动争取项目，产出可量化、可复用的成果", en: "Produce quantifiable, reusable results." } },
      { title: { zh: "沟通能力", en: "Communication" }, desc: { zh: "保持积极、自信、稳定的职业心态", en: "Positive, confident, stable." } },
    ],
    goal: { zh: "从旁观者转变为推动者", en: "From Observer to Driver" }
  }
};
