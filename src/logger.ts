export type LogLevel =
  | "silent"
  | "error"
  | "warn"
  | "notice"
  | "http"
  | "info"
  | "verbose"
  | "silly";

const LEVELS: Record<LogLevel, number> = {
  silent: -1,
  error: 0,
  warn: 1,
  notice: 2,
  http: 3,
  info: 4,
  verbose: 5,
  silly: 6,
};

const COLORS: Record<string, string> = {
  error: "\x1b[31m",  // Red
  warn: "\x1b[33m",   // Yellow
  notice: "\x1b[35m", // Magenta
  http: "\x1b[34m",   // Blue
  info: "\x1b[36m",   // Cyan
  verbose: "\x1b[90m",// Gray
  silly: "\x1b[95m",  // Light Magenta
  reset: "\x1b[0m",   // Reset color
};

export interface LoggerOptions {
  level?: LogLevel;
}

export class Logger {
  private level: LogLevel;

  constructor(options: LoggerOptions = {}) {
    this.level = options.level ?? "info";
  }

  private shouldLog(level: LogLevel): boolean {
    return LEVELS[level] <= LEVELS[this.level] && this.level !== "silent";
  }

  private writeLog(level: LogLevel, message: string): void {
    const timestamp = new Date().toISOString();
    const color = COLORS[level] || COLORS.info;
    const formatted = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    // Only log if the level is appropriate
    if (this.shouldLog(level)) {
      console.log(`${color}${formatted}${COLORS.reset}`);
    }
  }

  public log(level: LogLevel, message: string): void {
    if (!(level in LEVELS)) {
      throw new Error(`Unknown log level: ${level}`);
    }
    this.writeLog(level, message);
  }

  public error(msg: string) { this.log("error", msg); }
  public warn(msg: string) { this.log("warn", msg); }
  public notice(msg: string) { this.log("notice", msg); }
  public http(msg: string) { this.log("http", msg); }
  public info(msg: string) { this.log("info", msg); }
  public verbose(msg: string) { this.log("verbose", msg); }
  public silly(msg: string) { this.log("silly", msg); }
}