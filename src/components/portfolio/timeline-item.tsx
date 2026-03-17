type TimelineItemProps = {
  year: string;
  description: string;
};

export function TimelineItem({ year, description }: TimelineItemProps) {
  return (
    <div className="relative pl-8 pb-1">
      <span className="absolute left-0 top-1.5 h-3 w-3 rounded-full bg-primary" />
      <span className="absolute left-1.5 top-6 bottom-0 w-px bg-border" />

      <div className="bg-card border border-border rounded-xl p-4">
        <p className="text-sm font-semibold text-primary mb-1">{year}</p>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
