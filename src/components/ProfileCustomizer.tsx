import React, { useState } from 'react';
import { DeveloperProfile } from '../types';
import {
  X,
  Sliders,
  Save,
  RotateCcw,
  CheckCircle2,
  User,
  Mail,
  Github,
  Linkedin,
  MapPin,
  Briefcase
} from 'lucide-react';

interface ProfileCustomizerProps {
  profile: DeveloperProfile;
  onSave: (updated: DeveloperProfile) => void;
  onReset: () => void;
  onClose: () => void;
}

export const ProfileCustomizer: React.FC<ProfileCustomizerProps> = ({
  profile,
  onSave,
  onReset,
  onClose,
}) => {
  const [formData, setFormData] = useState<DeveloperProfile>({ ...profile });
  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleChange = (field: keyof DeveloperProfile, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl border border-slate-200 shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col text-slate-900">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Sliders className="w-5 h-5 text-slate-900" />
            <h3 className="text-lg font-bold text-slate-900">Customize Developer Portfolio Profile</h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-100 text-slate-500 hover:text-slate-900 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-5 overflow-y-auto text-xs font-sans">
          
          <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-blue-800 font-medium">
            💡 Update your info here to personalize this MERN portfolio. Changes are saved locally to your browser!
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-slate-700 font-semibold">Developer Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold">Job Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleChange('title', e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
                required
              />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-slate-700 font-semibold">Tagline / Headline</label>
            <input
              type="text"
              value={formData.tagline}
              onChange={(e) => handleChange('tagline', e.target.value)}
              className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
              required
            />
          </div>

          <div className="space-y-1">
            <label className="text-slate-700 font-semibold">Short Bio</label>
            <textarea
              value={formData.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
              rows={3}
              className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 resize-none shadow-2xs"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-slate-700 font-semibold">Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold">Availability Status</label>
              <select
                value={formData.availability}
                onChange={(e) => handleChange('availability', e.target.value as any)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
              >
                <option value="Available for Hire">Available for Hire</option>
                <option value="Contract / Freelance">Contract / Freelance</option>
                <option value="Open to Discussion">Open to Discussion</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-slate-700 font-semibold">Email Address</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
                required
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold">GitHub URL</label>
              <input
                type="text"
                value={formData.github}
                onChange={(e) => handleChange('github', e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-slate-700 font-semibold">LinkedIn URL</label>
              <input
                type="text"
                value={formData.linkedin}
                onChange={(e) => handleChange('linkedin', e.target.value)}
                className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
              />
            </div>

            <div className="space-y-1">
              <label className="text-slate-700 font-semibold">WhatsApp Link</label>
              <input
                type="text"
                value={formData.whatsapp || ''}
                onChange={(e) => handleChange('whatsapp', e.target.value)}
                placeholder="https://wa.me/93707187916"
                className="w-full p-2.5 rounded-xl bg-white border border-slate-200 text-slate-900 focus:outline-none focus:border-slate-900 shadow-2xs"
              />
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-200">
            <button
              type="button"
              onClick={onReset}
              className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-medium border border-slate-200 transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Defaults
            </button>

            <div className="flex items-center gap-2">
              {savedSuccess && (
                <span className="text-blue-600 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4" /> Saved!
                </span>
              )}
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs shadow-2xs transition-all active:scale-95"
              >
                <Save className="w-4 h-4" />
                <span>Save Profile Changes</span>
              </button>
            </div>
          </div>

        </form>
      </div>
    </div>
  );
};
