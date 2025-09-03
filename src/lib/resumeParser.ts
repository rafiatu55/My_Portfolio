// @ts-ignore
import * as mammoth from 'mammoth';
// @ts-ignore
import * as pdfjsLib from 'pdfjs-dist';

// Use a data URL for the worker to avoid CORS
pdfjsLib.GlobalWorkerOptions.workerSrc = 'data:application/javascript;base64,';

export interface ResumeData {
  name?: string;
  email?: string;
  phone?: string;
  experience: Array<{
    title: string;
    company: string;
    duration: string;
    description: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    year: string;
  }>;
  skills: string[];
  certifications: Array<{
    name: string;
    year: string;
  }>;
}

export const loadResumeData = async (): Promise<ResumeData | null> => {
  try {
    const response = await fetch('/resume.pdf');
    if (!response.ok) return null;
    
    const arrayBuffer = await response.arrayBuffer();
    const text = await extractTextFromPDFBuffer(arrayBuffer);
    console.log('Extracted text length:', text.length);
    console.log('First 200 chars:', text.substring(0, 200));
    
    const sections = extractSections(text);
    console.log('Sections:', sections);
    
    const resumeData = {
      name: extractName(text),
      email: extractEmail(text),
      phone: extractPhone(text),
      experience: extractExperience(sections.experience || ''),
      education: extractEducation(sections.education || ''),
      skills: extractSkills(sections.skills || ''),
      certifications: extractCertifications(sections.certifications || ''),
    };
    
    console.log('Final resume data:', resumeData);
    return resumeData;
  } catch (error) {
    console.error('Error loading resume:', error);
    return null;
  }
};

const extractTextFromPDFBuffer = async (arrayBuffer: ArrayBuffer): Promise<string> => {
  try {
    const loadingTask = pdfjsLib.getDocument({
      data: arrayBuffer,
      useWorkerFetch: false,
      isEvalSupported: false,
      useSystemFonts: true,
    });
    
    const pdf = await loadingTask.promise;
    let fullText = '';
    
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      const pageText = textContent.items
        .map((item: any) => item.str || '')
        .join(' ')
        .replace(/\s+/g, ' ');
      fullText += pageText + '\n';
    }
    
    return fullText.trim();
  } catch (error) {
    console.error('PDF parsing error:', error);
    throw new Error('Failed to extract text from PDF');
  }
};

const extractSections = (text: string) => {
  const sections: Record<string, string> = {};
  const lines = text.split('\n').map(line => line.trim()).filter(line => line);
  
  let currentSection = '';
  let currentContent: string[] = [];
  
  for (const line of lines) {
    const lowerLine = line.toLowerCase();
    
    if (lowerLine.includes('experience') || lowerLine.includes('work history')) {
      if (currentSection) sections[currentSection] = currentContent.join('\n');
      currentSection = 'experience';
      currentContent = [];
    } else if (lowerLine.includes('education')) {
      if (currentSection) sections[currentSection] = currentContent.join('\n');
      currentSection = 'education';
      currentContent = [];
    } else if (lowerLine.includes('skills')) {
      if (currentSection) sections[currentSection] = currentContent.join('\n');
      currentSection = 'skills';
      currentContent = [];
    } else if (lowerLine.includes('certification')) {
      if (currentSection) sections[currentSection] = currentContent.join('\n');
      currentSection = 'certifications';
      currentContent = [];
    } else if (currentSection) {
      currentContent.push(line);
    }
  }
  
  if (currentSection) sections[currentSection] = currentContent.join('\n');
  return sections;
};

const extractName = (text: string): string => {
  const lines = text.split('\n').filter(line => line.trim());
  return lines[0]?.trim() || '';
};

const extractEmail = (text: string): string => {
  const emailRegex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/;
  const match = text.match(emailRegex);
  return match ? match[0] : '';
};

const extractPhone = (text: string): string => {
  const phoneRegex = /[\+]?[1-9]?[\d\s\-\(\)]{10,}/;
  const match = text.match(phoneRegex);
  return match ? match[0].trim() : '';
};

const extractExperience = (text: string) => {
  const experiences: Array<{ title: string; company: string; duration: string; description: string[] }> = [];
  const lines = text.split('\n').filter(line => line.trim());
  
  let current: any = null;
  
  for (const line of lines) {
    if (line.match(/\d{4}/) && (line.includes('-') || line.includes('to'))) {
      if (current) experiences.push(current);
      current = { title: '', company: '', duration: line.trim(), description: [] };
    } else if (current && !current.title && line.trim()) {
      current.title = line.trim();
    } else if (current && !current.company && line.trim()) {
      current.company = line.trim();
    } else if (current && line.trim().startsWith('•') || line.trim().startsWith('-')) {
      current.description.push(line.trim());
    }
  }
  
  if (current) experiences.push(current);
  return experiences;
};

const extractEducation = (text: string) => {
  const education: Array<{ degree: string; institution: string; year: string }> = [];
  const lines = text.split('\n').filter(line => line.trim());
  
  let current: any = null;
  
  for (const line of lines) {
    if (line.match(/\d{4}/)) {
      if (current) education.push(current);
      current = { degree: '', institution: '', year: line.match(/\d{4}/)?.[0] || '' };
    } else if (current && !current.degree && line.trim()) {
      current.degree = line.trim();
    } else if (current && !current.institution && line.trim()) {
      current.institution = line.trim();
    }
  }
  
  if (current) education.push(current);
  return education;
};

const extractSkills = (text: string): string[] => {
  return text.split(/[,\n•-]/)
    .map(skill => skill.trim())
    .filter(skill => skill && skill.length > 1);
};

const extractCertifications = (text: string) => {
  const certifications: Array<{ name: string; year: string }> = [];
  const lines = text.split('\n').filter(line => line.trim());
  
  for (const line of lines) {
    const yearMatch = line.match(/\d{4}/);
    if (yearMatch) {
      certifications.push({
        name: line.replace(/\d{4}/, '').trim(),
        year: yearMatch[0]
      });
    }
  }
  
  return certifications;
};