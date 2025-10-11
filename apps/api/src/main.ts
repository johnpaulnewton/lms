import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://f25-cisc474-individual-2zzz.onrender.com'],
    methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  });

  const port = process.env.PORT || 3000; 
  const host = process.env.HOST || '0.0.0.0'; 

  await app.listen(port, host);
}

bootstrap();