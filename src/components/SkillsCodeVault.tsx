import React, { useState } from 'react';
import { SkillGroup, CodeSnippet } from '../types';
import {
  Copy,
  Check,
  Cpu,
  Database,
  Globe,
  Layout,
  Server,
  Terminal
} from 'lucide-react';

interface SkillsCodeVaultProps {
  skillGroups: SkillGroup[];
  codeSnippets?: CodeSnippet[];
}

export const SkillsCodeVault: React.FC<SkillsCodeVaultProps> = ({
  skillGroups,
  codeSnippets = []
}) => {
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  const [selectedSnippetId, setSelectedSnippetId] = useState<string>(
    codeSnippets[0]?.id || ''
  );
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const activeGroup = skillGroups[selectedGroupIndex] || skillGroups[0];
  const activeSnippet = codeSnippets.find(s => s.id === selectedSnippetId) || codeSnippets[0];

  const handleCopy = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'frontend development':
        return <Layout className="w-5 h-5" />;
      case 'backend & server':
        return <Server className="w-5 h-5" />;
      case 'database & data storage':
        return <Database className="w-5 h-5" />;
      case 'tools, devops & cloud':
        return <Cpu className="w-5 h-5" />;
      default:
        return <Globe className="w-5 h-5" />;
    }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/50 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h2 className="section-title text-2xl font-bold tracking-[-0.035em] text-slate-900 dark:text-white sm:text-3xl">Technical skills</h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400 sm:text-base">
            A comprehensive breakdown of my core technical stack, proficiency levels, and production-tested code implementations.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 flex-wrap mb-12">
          {skillGroups.map((group, idx) => {
            const isSelected = selectedGroupIndex === idx;
            return (
              <button
                key={group.category}
                onClick={() => setSelectedGroupIndex(idx)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-medium text-xs sm:text-sm transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20 scale-102'
                    : 'bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                {getCategoryIcon(group.category)}
                <span>{group.category}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {activeGroup.skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 rounded-2xl p-6 shadow-2xs hover:shadow-md transition-all group"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-slate-900 dark:text-white text-base">
                  {skill.name}
                </h3>
                <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-indigo-400">
                  {skill.level}
                </span>
              </div>
              
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 line-clamp-2">
                {skill.experience}
              </p>

              {/* Proficiency Bar */}
              <div className="space-y-1.5">
                <div className="flex justify-between text-2xs font-semibold text-slate-500 dark:text-slate-400">
                  <span>Proficiency</span>
                  <span>{skill.proficiency || 85}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                    style={{ width: `${skill.proficiency || 85}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Code Snippet Preview */}
        {codeSnippets.length > 0 && (
          <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">Live Code Vault</h3>
                  <p className="text-xs text-slate-400">Real production architecture & reusable modules</p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-wrap">
                {codeSnippets.map((snippet) => (
                  <button
                    key={snippet.id}
                    onClick={() => setSelectedSnippetId(snippet.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      (activeSnippet?.id === snippet.id)
                        ? 'bg-indigo-600 text-white'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {snippet.title}
                  </button>
                ))}
              </div>
            </div>

            {activeSnippet && (
              <div>
                <div className="flex items-center justify-between bg-slate-950 px-4 py-2.5 rounded-t-xl border border-slate-800 border-b-0 text-xs">
                  <span className="font-mono text-indigo-400">{activeSnippet.language}</span>
                  <button
                    onClick={() => handleCopy(activeSnippet.code, activeSnippet.id)}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
                  >
                    {copiedId === activeSnippet.id ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedId === activeSnippet.id ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="bg-slate-950 p-4 rounded-b-xl border border-slate-800 text-xs font-mono text-slate-300 overflow-x-auto leading-relaxed">
                  <code>{activeSnippet.code}</code>
                </pre>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
