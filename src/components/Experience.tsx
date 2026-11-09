import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export interface TimelineItem {
  title: string;
  subtitle: string;
  period: string;
  description?: string;
  tags?: string[];
}

interface Props {
  workLabel: string;
  educationLabel: string;
  work: TimelineItem[];
  education: TimelineItem[];
}

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative mt-8 ml-3 border-l border-[var(--lime)]/50">
      {items.map((item) => (
        <li key={item.title + item.period} className="relative pb-10 pl-8 last:pb-0">
          <span
            aria-hidden="true"
            className="absolute top-1 -left-[11px] flex size-[22px] items-center justify-center rounded-full bg-[var(--lime)]"
          >
            <span className="size-2 rounded-full bg-[var(--lime-foreground)]" />
          </span>
          <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
          <p className="text-sm text-muted-foreground">
            {item.subtitle} · {item.period}
          </p>
          {item.description && (
            <p className="mt-3 leading-relaxed text-muted-foreground">{item.description}</p>
          )}
          {item.tags && item.tags.length > 0 && (
            <ul className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <li key={tag} className="rounded-full border bg-background/40 px-3 py-0.5 text-xs">
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Experience({ workLabel, educationLabel, work, education }: Props) {
  return (
    <Tabs defaultValue="work">
      <TabsList className="glass h-auto! w-full rounded-full p-1.5">
        <TabsTrigger
          value="work"
          className="rounded-full py-2.5 data-active:bg-[var(--lime)]! data-active:text-[var(--lime-foreground)]! data-active:border-transparent!"
        >
          {workLabel}
        </TabsTrigger>
        <TabsTrigger
          value="education"
          className="rounded-full py-2.5 data-active:bg-[var(--lime)]! data-active:text-[var(--lime-foreground)]! data-active:border-transparent!"
        >
          {educationLabel}
        </TabsTrigger>
      </TabsList>
      <TabsContent value="work" className="text-base">
        <Timeline items={work} />
      </TabsContent>
      <TabsContent value="education" className="text-base">
        <Timeline items={education} />
      </TabsContent>
    </Tabs>
  );
}
