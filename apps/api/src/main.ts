import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
// <<<<<<< HEAD
// =======
  const port = process.env.PORT || 3000;
  const host = process.env.HOST || undefined;
  // Read allowed origins from environment variable
  const origins = process.env.CLIENT_ORIGINS
    ? process.env.CLIENT_ORIGINS.split(',').map((origin) => origin.trim())
    : ['http://localhost:3000', 'http://localhost:3001'];
  app.enableCors({
    origin: origins,
    credentials: true,
  });
  await app.listen(port, host);
}
// >>>>>>> upstream/main

  // app.enableCors({
  //   origin: ['http://localhost:3001', 'https://f25-cisc474-individual-2zzz.onrender.com'],
  //   methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  // });

  // const port = process.env.PORT;
  // await app.listen(port);
  // }
bootstrap();