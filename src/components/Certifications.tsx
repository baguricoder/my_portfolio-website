import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Python Basics for Data Science",
    issuer: "IBM",
    date: "ss",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://drive.google.com/file/d/1nt588oVgq3BVGYkQ96dWWgI9G4qIDLr_/view?usp=drivesdk "
  },
  {
    title: "UI & UX Developer –",
    issuer: "L & T",
    date: "2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://coursera.org"
  },
  {
    title: "Software Intern Certificate",
    issuer: "HackerRank",
    date: "2025",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://www.hackerrank.com/certificates/34049c71ab1c?utm_medium=email&utm_source=mail_template_1393&utm_campaign=hrc_skills_certificate "
  },
  {
    title: "Machine learning with python for finance professionals –",
    issuer: "ACCA",
    date: "2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://drive.google.com/file/d/1nk9IiEUiiSK3SFWxbGXOY_vXRxuXym6R/view?usp=drivesdk"
  },
  {
    title: "Apache Spark for Data Engineering and Machine Learning–",
    issuer: "IBM",
    date: "2024",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    link: "https://drive.google.com/file/d/1nlP1Ee-wJocfJX-KJTsnT4A5Hb1029Et/view?usp=drivesdk "
  }
];

export default function Certifications() {
  return (
    <div className="h-full w-full overflow-y-auto bg-gradient-to-br from-yellow-500 to-red-600 rounded-3xl p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Certifications</h2>
        <div className="grid gap-6">
          {certifications.map((cert) => (
            <div
              key={cert.title}
              className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden"
            >
              <div className="relative h-40">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="w-6 h-6 text-white" />
                  <h3 className="text-xl font-bold text-white">{cert.title}</h3>
                </div>
                <p className="text-white/80 mb-4">
                  Issued by {cert.issuer} • {cert.date}
                </p>
                <a
                  href={cert.link}
                  className="flex items-center gap-2 text-white hover:text-yellow-300 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>View Certificate</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}