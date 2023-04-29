abstract class MyLogger {
    abstract log(message: string): void;

    printDate(message: string) {
        console.log(new Date());
        this.log(message)
    }
}

class RegularLogger extends MyLogger {
    log(message: string): void {
        console.log(message)
    }

    logWithDate(message: string) {
        this.printDate(message)
    }

}

const logger = new RegularLogger();
logger.logWithDate("Message recorded to log...");