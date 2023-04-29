interface ILogger {
    log: (...args: any[]) => void;
    error: (...args: any[]) => void;
}

class Logger implements ILogger {
    error(args: any[]): void {
        console.log(...args)
    }

    log(args: any[]): void {
        console.error(...args)
    }

}