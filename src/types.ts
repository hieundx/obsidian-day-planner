import type { Moment } from "moment";
import type { Readable, Writable } from "svelte/store";

import type { VaultFacade } from "./service/vault-facade";
import type { WorkspaceFacade } from "./service/workspace-facade";
import type { DayPlannerSettings, IcalConfig } from "./settings";
import type { LocalTask } from "./task-types";
import { useEditContext } from "./ui/hooks/use-edit/use-edit-context";
import { createShowPreview } from "./util/create-show-preview";
import type { useSearch } from "./ui/hooks/use-search.svelte";

export type OnUpdateFn = (
  base: Array<LocalTask>,
  next: Array<LocalTask>,
) => Promise<void>;

export type RelationToNow = "past" | "present" | "future";

export interface Overlap {
  columns: number;
  span: number;
  start: number;
}

export type CleanUp = () => void;
export type RenderMarkdown = (el: HTMLElement, markdown: string) => CleanUp;

export interface ObsidianContext {
  workspaceFacade: WorkspaceFacade;
  initWeeklyView: () => Promise<void>;
  refreshTasks: (source: string) => void;
  dataviewLoaded: Readable<boolean>;
  renderMarkdown: RenderMarkdown;
  toggleCheckboxInFile: VaultFacade["toggleCheckboxInFile"];
  editContext: ReturnType<typeof useEditContext>;
  showPreview: ReturnType<typeof createShowPreview>;
  isModPressed: Readable<boolean>;
  reSync: () => void;
  isOnline: Readable<boolean>;
  isDarkMode: { current: boolean };
  settings: Writable<DayPlannerSettings>;
  settingsSignal: { current: DayPlannerSettings };
  pointerDateTime: Writable<{ date?: Moment; time?: Moment }>;
  // todo: searchEngine/timeBlockSearch...
  search: ReturnType<typeof useSearch>;
}

export type ComponentContext = Map<string, unknown>;

declare global {
  /**
   * Placeholders expanded at build-time
   */
  const currentPluginVersion: string;
  const changelogMd: string;
  const supportBanner: string;
}

export type WithIcalConfig<T> = T & { calendar: IcalConfig };

export type DateRange = Writable<Moment[]> & { untrack: () => void };
