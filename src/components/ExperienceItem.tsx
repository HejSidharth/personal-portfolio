interface ExperienceItemProps {
  company: string;
  title: string;
  period: string;
  logo?: string;
  href?: string;
  description?: string;
}

export default function ExperienceItem({
  company,
  title,
  period,
  logo,
  href,
  description,
}: ExperienceItemProps) {
  const content = (
    <div className="flex items-start gap-4 py-4 group">
      {logo && (
        <div className="flex-shrink-0">
          <img
            src={logo}
            alt={`${company} logo`}
            className="w-8 h-8 rounded-full object-cover grayscale-0 sm:grayscale sm:group-hover:grayscale-0 transition-all duration-200"
          />
        </div>
      )}
      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          <h3 className="font-bold text-base font-inter">{company}</h3>
          <span className="text-muted-foreground text-sm">•</span>
          <span className="text-muted-foreground text-sm">{title}</span>
        </div>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
        <p className="text-sm text-muted-foreground mt-1 ">{period}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:opacity-80 transition-opacity"
      >
        {content}
      </a>
    );
  }

  return <div>{content}</div>;
}
