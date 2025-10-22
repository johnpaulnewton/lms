import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AnnouncementCreateIn, AnnouncementUpdateIn } from '@repo/api/announcements';

@Injectable()
export class AnnouncementsService {
    constructor(private prisma: PrismaService) {};

    getAnnouncements() {
        return this.prisma.announcement.findMany();
    }

    getAnnouncementById(id: string) {
        return this.prisma.announcement.findUnique({ where: { id } });
    }

    createAnnouncement(data: AnnouncementCreateIn) {
        return this.prisma.announcement.create({ data });
    }

    async updateAnnouncementById(id: string, data: AnnouncementUpdateIn) {
        const findAnnouncement = await this.getAnnouncementById(id);
        if (!findAnnouncement) {
            throw new HttpException('Announcement not Found', 404);
        }
        return this.prisma.announcement.update({ where: { id }, data});
    }

    async deleteAnnouncementById(id: string) {
        const findAnnouncement = await this.getAnnouncementById(id);
        if (!findAnnouncement) {
            throw new HttpException('Announcement not Found', 404);
        }
        return this.prisma.announcement.delete({ where: { id }});
    }

}
