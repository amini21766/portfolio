import jsPDF from 'jspdf';
import {
  initialProfile,
  initialExperiences,
  initialProjects,
  initialCertificates,
  skillGroups,
} from '../data/portfolioData';

export const downloadCvPdf = () => {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const profile = initialProfile;
  const experiences = initialExperiences;
  const projects = initialProjects.slice(0, 4);
  const certificates = initialCertificates;

  const primaryColor = [79, 70, 229]; // Indigo-600 #4F46E5
  const textColor = [30, 41, 59]; // Slate-800
  const lightTextColor = [71, 85, 105]; // Slate-600

  let y = 15;
  const margin = 15;
  const pageWidth = doc.internal.pageSize.getWidth();
  const contentWidth = pageWidth - margin * 2;

  const checkPageBreak = (neededHeight: number) => {
    if (y + neededHeight > 280) {
      doc.addPage();
      y = 15;
    }
  };

  // Header Banner Background
  doc.setFillColor(243, 244, 246);
  doc.rect(margin, y, contentWidth, 32, 'F');

  // Candidate Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
  doc.text(profile.name, margin + 5, y + 10);

  // Candidate Title
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(10.5);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  doc.text(profile.title, margin + 5, y + 16);

  // Contact Info Row
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
  const contactLine1 = `Email: ${profile.email}   |   Phone: ${profile.phone}   |   Location: ${profile.location}`;
  const contactLine2 = `GitHub: ${profile.github}   |   LinkedIn: ${profile.linkedin}`;
  doc.text(contactLine1, margin + 5, y + 22);
  doc.text(contactLine2, margin + 5, y + 27);

  y += 38;

  // Helper Section Heading
  const addSectionHeader = (title: string) => {
    checkPageBreak(12);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(12);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    doc.text(title.toUpperCase(), margin, y);
    y += 2;
    doc.setDrawColor(79, 70, 229);
    doc.setLineWidth(0.6);
    doc.line(margin, y, margin + contentWidth, y);
    y += 6;
  };

  // 1. EXECUTIVE SUMMARY
  addSectionHeader('Executive Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(textColor[0], textColor[1], textColor[2]);
  const summaryLines = doc.splitTextToSize(
    profile.resumeSummary || profile.bio,
    contentWidth
  );
  checkPageBreak(summaryLines.length * 4.5);
  doc.text(summaryLines, margin, y);
  y += summaryLines.length * 4.5 + 4;

  // 2. TECHNICAL SKILLS
  addSectionHeader('Technical Skills');
  doc.setFontSize(8.5);
  skillGroups.forEach((group) => {
    const skillsList = group.skills.map((s) => s.name).join(', ');
    const lineStr = `${group.category}: ${skillsList}`;
    const lines = doc.splitTextToSize(lineStr, contentWidth);
    checkPageBreak(lines.length * 4);

    doc.setFont('helvetica', 'bold');
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(`${group.category}: `, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
    const categoryWidth = doc.getTextWidth(`${group.category}: `);
    doc.text(skillsList, margin + categoryWidth, y, {
      maxWidth: contentWidth - categoryWidth,
    });
    y += lines.length * 4 + 1;
  });
  y += 3;

  // 3. WORK EXPERIENCE
  addSectionHeader('Professional Experience');
  experiences.forEach((exp) => {
    checkPageBreak(25);

    // Role
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(exp.role, margin, y);

    // Period & Location
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(8.5);
    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
    const periodText = `${exp.period}  |  ${exp.location}`;
    const periodWidth = doc.getTextWidth(periodText);
    doc.text(periodText, margin + contentWidth - periodWidth, y);

    y += 4.5;

    // Company Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
    doc.text(exp.company, margin, y);

    y += 4.5;

    // Bullet Points
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);

    const bulletPoints = exp.achievements && exp.achievements.length > 0 ? exp.achievements : [exp.summary];
    bulletPoints.forEach((resp) => {
      const respLines = doc.splitTextToSize(`• ${resp}`, contentWidth - 4);
      checkPageBreak(respLines.length * 4);
      doc.text(respLines, margin + 3, y);
      y += respLines.length * 4;
    });
    y += 3.5;
  });

  // 4. FEATURED PROJECTS
  addSectionHeader('Key Projects');
  projects.forEach((proj) => {
    checkPageBreak(16);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(proj.title, margin, y);

    if (proj.techStack) {
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(8);
      doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
      const techStr = `[${proj.techStack.join(', ')}]`;
      const techWidth = doc.getTextWidth(techStr);
      doc.text(techStr, margin + contentWidth - techWidth, y);
    }

    y += 4;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
    const projDesc = proj.shortDescription || proj.fullDescription;
    const descLines = doc.splitTextToSize(projDesc, contentWidth);
    checkPageBreak(descLines.length * 3.8);
    doc.text(descLines, margin, y);
    y += descLines.length * 3.8 + 2.5;
  });

  // 5. CERTIFICATIONS
  addSectionHeader('Certifications & Credentials');
  certificates.forEach((cert) => {
    checkPageBreak(10);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(textColor[0], textColor[1], textColor[2]);
    doc.text(`• ${cert.title}`, margin, y);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(lightTextColor[0], lightTextColor[1], lightTextColor[2]);
    const certDetails = `${cert.issuer} (${cert.date})`;
    const certWidth = doc.getTextWidth(certDetails);
    doc.text(certDetails, margin + contentWidth - certWidth, y);
    y += 4;
  });

  // Save the generated PDF directly in browser
  const filename = `${profile.name.replace(/\s+/g, '_')}_FullStack_Developer_CV.pdf`;
  doc.save(filename);
};
