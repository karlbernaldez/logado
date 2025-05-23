import { Logger, LoggerOptions } from "./logger";

export default function createLogger(options: LoggerOptions = {}): Logger {
  return new Logger(options);
}

export { Logger, LoggerOptions };
