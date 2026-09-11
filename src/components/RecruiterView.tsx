import React from 'react';
import { DeveloperProfile } from '../types';
import { downloadCvPdf } from '../utils/downloadCv';
import {
  Sparkles,
  Mail,
  X,
  Award,
  Zap,
  Download
} from 'lucide-react';

interface RecruiterViewProps {
  profile: DeveloperProfile;
  onClose: () => void;
  onContact: () => void;
}

export const RecruiterView: React.FC<RecruiterViewProps> = ({
  profile,
  onClose,
  onContact,
}) => {
  return (
    <div className="bg-blue-50/95 border-b border-blue-200 p-6 shadow-sm relative animate-in slide-in-from-top duration-300">
      <div className="max-w-[1220px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        
        {/* Left: Summary */}
        <div className="space-y-3 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white text-blue-800 border border-blue-200 shadow-2xs">
              <Sparkles className="w-3.5 h-3.5 text-blue-600" />
              Recruiter & Hiring Manager Fast-Track Mode
            </span>
            <span className="text-xs font-medium text-slate-700 bg-white px-2.5 py-0.5 rounded border border-blue-200 shadow-2xs">
              🟢 {profile.availability}
            </span>
          </div>

          <h3 className="text-xl font-bold text-slate-900">
            Executive Candidate Summary: {profile.name} — {profile.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {profile.resumeSummary}
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 pt-1">
            <span className="flex items-center gap-1 text-slate-900 font-semibold">
              <Award className="w-4 h-4 text-blue-600" /> 5+ Years Full-Stack Experience
            </span>
            <span>•</span>
            <span className="flex items-center gap-1 text-slate-900 font-semibold">
              <Zap className="w-4 h-4 text-blue-600" /> 25+ Custom Web Applications & MIS Solutions
            </span>
            <span>•</span>
            <span className="text-slate-800 font-semibold">
              📍 {profile.location}
            </span>
          </div>
        </div>

        {/* Right: Actions & Close */}
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            onClick={downloadCvPdf}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-xs shadow-2xs transition-all active:scale-95 cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>Download CV (PDF)</span>
          </button>

          <button
            onClick={onContact}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs shadow-2xs transition-all active:scale-95 cursor-pointer"
          >
            <Mail className="w-4 h-4" />
            <span>Fast-Track Interview Request</span>
          </button>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white border border-blue-200 text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors shadow-2xs"
            title="Exit Recruiter Mode"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
