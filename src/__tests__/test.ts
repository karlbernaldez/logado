import createLogger from "../index";

// Mock for console.log
const spy = jest.spyOn(console, "log").mockImplementation();

describe("ado-logger", () => {
  afterEach(() => {
    spy.mockClear();  // Clear the spy after each test
  });

  it("logs info messages to console", () => {
    const logger = createLogger({ level: "info" });

    // Call logger
    logger.info("Test message");

    // Check if console.log was called with the correct message
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("INFO"));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("Test message"));
  });

  it("respects log levels", () => {
    const logger = createLogger({ level: "warn" });

    // Call logger
    logger.info("Should not print");  // This should be ignored
    logger.warn("This will be shown");  // This should be logged

    // Check that console.log was called only once for the "warn" message
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("[WARN]"));  // Check for [WARN] in the message
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("This will be shown"));
  });

  it("does not log messages below the set log level", () => {
    const logger = createLogger({ level: "error" });

    // Call logger
    logger.info("Info message");  // Should not be logged
    logger.error("Error message");  // Should be logged

    // Check if only error is logged
    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("ERROR"));
    expect(spy).toHaveBeenCalledWith(expect.stringContaining("Error message"));
  });
});
