import fs from "fs";
import path from "path";

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
  error: "\x1b[31m",
  warn: "\x1b[33m",
  notice: "\x1b[35m",
  http: "\x1b[34m",
  info: "\x1b[36m",
  verbose: "\x1b[90m",
  silly: "\x1b[95m",
  reset: "\x1b[0m",
};

export interface LoggerOptions {
  level?: LogLevel;
  logToFile?: boolean;
  logFilePath?: string;
}

export class Logger {
  private level: LogLevel;
  private logToFile: boolean;
  private logFilePath: string;

  constructor(options: LoggerOptions = {}) {
    this.level = options.level ?? "info";
    this.logToFile = options.logToFile ?? false;
    this.logFilePath = options.logFilePath ?? path.join(__dirname, "../ado.log");
  }

  private shouldLog(level: LogLevel): boolean {
    return LEVELS[level] <= LEVELS[this.level] && this.level !== "silent";
  }

  private writeLog(level: LogLevel, message: string): void {
    const timestamp = new Date().toISOString();
    const color = COLORS[level] || COLORS.info;
    const formatted = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    if (this.shouldLog(level)) {
      console.log(`${color}${formatted}${COLORS.reset}`);
    }

    if (this.logToFile) {
      const dir = path.dirname(this.logFilePath);
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      fs.appendFileSync(this.logFilePath, formatted + "\n");
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
