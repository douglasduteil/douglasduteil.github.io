//

export type TimelineEventType = "job" | "talk" | "study" | "github" | "music";

export interface TimelineEvent {
  type: TimelineEventType;
  title: string;
  body: string;
  link?: {
    href: string;
    name: string;
  };
}
