var winston = require('winston');

// var appRoot = require('app-root-path');

// const { format, createLogger, transports } = require('winston');
// const { timestamp, combine, printf,json } = format;

// // define the custom settings for each transport (file, console)
// const logFormat = format.printf(({ level, message, timestamp ,stack}) => {
//     return `${timestamp} ${level}: ${stack || message}`;
// });

// var options = {
//   file: {
//     level: 'info',
//     filename: `../../../../var/log/combined.log`,
//     handleExceptions: true,
//     json: true,
//     maxsize: 5242880, // 5MB
//     maxFiles: 5,
//     colorize: false,
//   },
//   console: {
//     level: 'debug',
//     handleExceptions: true,
//     json: false,
//     colorize: true,
//   },
// };

// // instantiate a new Winston Logger with the settings defined above
// var logger = new winston.createLogger({
//     format: combine(
//         timestamp({format : 'YYYY-MM-DD HH:mm:ss'}),
//         // json(),
//         logFormat,
//     ),
//   transports: [
//     new winston.transports.File(options.file),
//     new winston.transports.Console(options.console)
//   ],
//   exitOnError: false, // do not exit on handled exceptions
// });

// // create a stream object with a 'write' function that will be used by `morgan`
// logger.stream = {
//   write: function(message, encoding) {
//     // use the 'info' log level so the output will be picked up by both transports (file and console)
//     logger.info(message);
//   },
// };

const logger = winston.createLogger({
  format: winston.format.json(),
  transports: [new winston.transports.File({ filename: '/var/log/combined.log'})],
});

module.exports = logger;