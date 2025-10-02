import type { ReportData } from "./ReportData";

export type ReportFile = [
  {
    environment: string;
    reports: ReportData[];
  }
];
