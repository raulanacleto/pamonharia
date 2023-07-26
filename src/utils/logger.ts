export class Logger {
  private static instance: Logger | null = null;
  private logFile = 'app.log';

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timestamp = new Date().toISOString();
    const logMessage = `${timestamp}: ${message}\n`;

    // Simulate writing the log message to a log file
    console.log(`Writing to ${this.logFile}: ${logMessage}`);
  }
}
