export function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-14 max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
          {eyebrow}
        </p>
      )}
      <h2 className="font-heading text-3xl font-bold text-textmain sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-muted">{description}</p>}
    </div>
  );
}
