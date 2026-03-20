import { MapPin } from 'lucide-react';

interface Responsibility {
  title: string;
  items: string[];
}

interface Showcase {
  title: string;
  highlight: string;
  image: string;
  link?: string;
  linkText?: string;
}

interface AdditionalLink {
  text: string;
  url: string;
}

interface WorkExperienceProps {
  company: string;
  logo: string;
  position: string;
  period: string;
  location: string;
  responsibilities: Responsibility[];
  showcases: Showcase[];
  additionalLinks?: AdditionalLink[];
}

export function WorkExperience({
  const base = import.meta.env.BASE_URL;
  company,
  logo,
  position,
  period,
  location,
  responsibilities,
  showcases,
  additionalLinks
}: WorkExperienceProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-3xl p-8 shadow-sm">
      {/* Company Header */}
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8 pb-8 border-b border-gray-200">
        <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white border border-gray-100 p-2 flex items-center justify-center">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-1">
          <h3 className="text-xl text-foreground mb-2 font-semibold">{company}</h3>
          <div className="text-base text-muted-foreground mb-2">{position}</div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground">
            <span>{period}</span>
            <span className="hidden md:inline">•</span>
            <span>{location}</span>
          </div>
        </div>
      </div>

      {/* Responsibilities */}
      <div className="space-y-6 mb-10">
        {responsibilities.map((resp, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-start gap-2">
              <span className="text-sm font-medium text-gray-900 flex-shrink-0">{index + 1}.</span>
              <h4 className="text-sm font-medium text-gray-900">{resp.title}</h4>
            </div>
            <ul className="space-y-2 ml-4">
              {resp.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                  <span className="text-gray-400 flex-shrink-0">○</span>
                  <span className="flex-1">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Showcases */}
      <div className="space-y-6">
        <h4 className="text-lg text-foreground font-semibold">Showcase</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {showcases.map((showcase, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <div className="aspect-video bg-gray-100 overflow-hidden">
                <img
                  src={showcase.image}
                  alt={showcase.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 space-y-2">
                <h5 className="text-sm text-foreground leading-snug min-h-[2.5rem] font-medium">
                  {showcase.link ? (
                    <>
                      {showcase.title.split(showcase.linkText!)[0]}
                      <a
                        href={showcase.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline hover:no-underline transition-colors"
                      >
                        {showcase.linkText}
                      </a>
                      {showcase.title.split(showcase.linkText!)[1]}
                    </>
                  ) : (
                    showcase.title
                  )}
                </h5>
                <p className="text-xs text-muted-foreground leading-relaxed border-t border-gray-100 pt-2">
                  {showcase.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Links */}
      {additionalLinks && additionalLinks.length > 0 && (
        <div className="mt-8 pt-8 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-900 mb-4">Additional</h4>
          <ul className="space-y-2">
            {additionalLinks.map((link, index) => (
              <li key={index} className="flex gap-2">
                <span className="flex-shrink-0 text-gray-400">•</span>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-foreground underline hover:no-underline leading-relaxed"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
