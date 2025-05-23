import { Logger, LoggerOptions } from "./src/logger";

export default function createLogger(options: LoggerOptions = {}): Logger {
  return new Logger(options);
}

export { Logger, LoggerOptions };
