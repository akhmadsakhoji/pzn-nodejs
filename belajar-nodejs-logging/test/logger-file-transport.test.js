import winston from "winston";

test("create new logger", ()=>{
    const logger = winston.createLogger({
        level: "info",
        transports: [
            new winston.transports.Console({}),
            new winston.transports.File({
                filename: "application.log"
            }),
            new winston.transports.File({
                filename: "akhmad.log"
            })
        ]
    });

    logger.info("Hello World!")
    logger.info("Hello World!")
    logger.info("Hello World!")
    logger.info("Hello World!")
})