//

export type TimelineEventType = "job" | "talk" | "study" | "github";

export interface TimelineEvent {
  type: TimelineEventType;
  title: string;
  body: string;
  link?: {
    href: string;
    name: string;
  };
}
