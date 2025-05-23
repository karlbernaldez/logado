import createLogger from "../index";
import fs from "fs";
import path from "path";

// Ensure the logs directory exists
const logDir = "./logs";
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir);
}

describe("ado-logger", () => {
  const logPath = "./logs/test.log";

  afterEach(() => {
    if (fs.existsSync(logPath)) fs.unlinkSync(logPath);
  });

  it("logs info messages to console and file", () => {
    const logger = createLogger({ level: "info", logToFile: true, logFilePath: logPath });
    logger.info("Test message");

    const fileContent = fs.readFileSync(logPath, "utf-8");
    expect(fileContent).toMatch(/INFO/);
    expect(fileContent).toMatch(/Test message/);
  });

  it("respects log levels", () => {
    const logger = createLogger({ level: "warn", logToFile: false });
    const spy = jest.spyOn(console, "log").mockImplementation();

    logger.info("Should not print");
    logger.error("Should print");

    expect(spy).toHaveBeenCalledTimes(1);
    spy.mockRestore();
  });
});
