type PageIntroProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  className?: string;
};

export function PageIntro({ body, className = "", eyebrow, heading }: PageIntroProps) {
  return (
    <div className={`max-w-2xl space-y-4 ${className}`}>
      {eyebrow ? <p className="text-base font-semibold text-brand-blue">{eyebrow}</p> : null}
      <h1 className="text-5xl text-text-primary sm:text-7xl lg:text-8xl">{heading}</h1>
      <div className="h-0.5 w-12 rounded-full bg-brand-blue" />
      {body ? <p className="max-w-xl text-base leading-8 text-text-secondary sm:text-lg">{body}</p> : null}
    </div>
  );
}
