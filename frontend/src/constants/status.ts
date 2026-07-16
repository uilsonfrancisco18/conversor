export const STATUS = {
  IDLE: "idle",
  PREPARING: "preparing",
  DOWNLOADING: "downloading",
  SUCCESS: "success",
  ERROR: "error",
} as const;

export type StatusType = (typeof STATUS)[keyof typeof STATUS];