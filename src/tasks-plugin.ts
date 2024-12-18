import type { App } from "obsidian";

/**
 * Tasks API v1 interface
 *
 * Source: https://publish.obsidian.md/tasks/Advanced/Tasks+Api
 */
export interface TasksApiV1 {
  /**
   * Executes the 'Tasks: Toggle task done' command on the supplied line string
   *
   * @param line The markdown string of the task line being toggled
   * @param path The path to the file containing line
   * @returns The updated line string, which will contain two lines
   *          if a recurring task was completed.
   */
  executeToggleTaskDoneCommand: (line: string, path: string) => string;

  /**
   * Opens the Tasks UI and returns the Markdown string for the task entered.
   *
   * @returns {Promise<string>} A promise that contains the Markdown string for the task entered or
   * an empty string, if data entry was cancelled.
   */
  createTaskLineModal(): Promise<string>;
}

export const createGetTasksApi = (app: App) => (): TasksApiV1 | undefined => {
  // @ts-expect-error
  return app.plugins.plugins["obsidian-tasks-plugin"]?.apiV1;
};
