<h1 align="center">
<img src="https://raw.githubusercontent.com/karlbernaldez/adolib/main/assets/adolib.png" width="300">
</h1><br>



[![npm version](https://badge.fury.io/js/ado-logger.svg)](https://www.npmjs.com/package/ado-logger)  
[![Build Status](https://github.com/karlbernaldez/ado-logger/actions/workflows/test.yml/badge.svg)](https://github.com/karlbernaldez/ado-logger/actions)  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

A powerful, production-grade, file-capable, and color-coded logger for Node.js.

- **Website:** https://adovelopers.com/nodejs/packages/logado/
- **Documentation:** https://adovelopers.com/nodejs/packages/logado/docs
- **Source code:** https://github.com/adovelopers/logado
  

# LogAdo

**LogAdo** is a collection of small but helpful tools designed to make life easier for new Python developers. Whether you're just learning the language or building your first projects, AdoLib gives you lightweight, no-nonsense utilities like easy logging, formatting, and more — all in a beginner-friendly way.

---

## 🔧 Why use ado-logger?

- ✅ Supports **8 log levels**
- ✅ Configurable **log level filtering**
- ✅ **File output** for persistent logs
- ✅ Colorful and timestamped **console output**
- ✅ Fully typed with **TypeScript** definitions
- ✅ Lightweight and zero dependencies
---

## 📦 Installation

```bash
npm install ado-logger

---

## 📘 Usage Example

```javascript
import { createLogger } from 'ado-logger';

const logger = createLogger();

logger.info('Server started');
logger.warn('Memory usage is high');
logger.error('Failed to connect to database');

---

## 🔧 Log Levels

| Level   | Value | Use Case                                   |
|---------|-------|--------------------------------------------|
| silent  | -1    | Suppresses all logging                    |
| error   | 0     | Serious issues or crashes                 |
| warn    | 1     | Warnings about potential problems         |
| notice  | 2     | General notices (non-errors)              |
| http    | 3     | HTTP logs and request tracking            |
| info    | 4     | Informational messages                    |
| verbose | 5     | Detailed operational logs                 |
| silly   | 6     | Highly detailed developer-level logs      |

You can set a minimum log level to control what gets printed.

Example:

```typescript
const logger = createLogger({ level: 'warn' });
logger.info('Will NOT be shown');
logger.warn('This will be shown');

---

## 🛠️ API

### `createLogger(options: LoggerOptions): Logger`

Creates a new logger instance.

#### LoggerOptions

| Option       | Type        | Default         | Description                             |
|--------------|-------------|-----------------|-----------------------------------------|
| `level`      | `LogLevel`  | `info`          | Minimum log level to display            |
| `logToFile`  | `boolean`   | `false`         | Enable/disable file logging             |
| `logFilePath`| `string`    | `"./ado.log"`   | Path to log file (when logToFile is true) |

---

### Methods

Each log level has its own method:

```typescript
logger.error("Fatal error occurred");
logger.warn("Low disk space");
logger.notice("User account created");
logger.http("GET /api/items");
logger.info("Starting application");
logger.verbose("Loaded 3 modules");
logger.silly("Variable x = 42");
You can also use the generic .log(level, message) method:

```typescript
logger.log("error", "This is equivalent to logger.error()");

---
## 📁 File Logging

Enable file output by setting `logToFile: true` and providing `logFilePath`:

```typescript
const logger = createLogger({
  logToFile: true,
  logFilePath: "./logs/output.log"
});

If the file doesn’t exist, it will be created.

---

## 💡 Best Practices

- Use "silly" and "verbose" in development only.
- Log to file for audit trails and production issues.
- Use "http" for request tracing in Express/Koa apps.
- Keep log level to "warn" or "error" in CI/CD and tests.

---

## 🛠️ Contributing

- Fork the repo
- Create a feature branch
- Make changes and add tests
- Run `npm run build && npm run test`
- Submit a pull request

---

## 📜 License

[© Adovelopers](https://www.npmjs.com/package/ado-logger)

---

## 📍 Links

- [NPM Package](https://www.npmjs.com/package/ado-logger)
- [GitHub Repo](https://github.com/adovelopers/ado-logger)

---

> Built with ❤️ by Adovelopers
