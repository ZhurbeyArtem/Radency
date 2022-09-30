export interface IStats {
  active: IStatsCategory;
  archive: IStatsCategory;
}

interface IStatsCategory {
  Task: number;
  Idea: number;
  'Random Thought': number;
}
