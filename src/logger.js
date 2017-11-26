import winston from 'winston';

const LOGGER_NAME = 'logger';

export default function(module) {
  const path = module.filename.split('/').slice(-2).join('/');

  winston.loggers.add(LOGGER_NAME, {
    console: {
      level: 'debug',
      colorize: true,
      label: path,
    }
  });

  return winston.loggers.get(LOGGER_NAME);
}
