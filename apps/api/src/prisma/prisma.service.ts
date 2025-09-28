import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../../packages/database/generated/client';

@Injectable()
export class PrismaService extends PrismaClient {
    onModuleInit() {
        console.log('DATABASE_URL:', process.env.DATABASE_URL);
        this.$connect()
            .then(() => console.log('Connected to DB'))
            .catch((err) => {
                console.log(err);
            });
    }
}
