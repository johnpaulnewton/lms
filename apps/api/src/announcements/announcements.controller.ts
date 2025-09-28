import { Controller, Get, Post, Patch, Delete, Param, Body} from '@nestjs/common';
import { AnnouncementsService } from './announcements.service';
import { CreateAnnouncementDto } from './create-announcement.dto';
import { UpdateAnnouncementDto } from './update-announcement.dto';

@Controller('announcements')
export class AnnouncementsController {
    constructor(private announcementsService: AnnouncementsService) {};

    @Get()
    getAnnouncements() {
        return this.announcementsService.getAnnouncements();
    }

    @Get(':id')
    getAnnouncementById(@Param('id') id: string) {
        return this.announcementsService.getAnnouncementById(id);
    }

    @Post()
    createAnnouncement(@Body() createAnnouncementDto: CreateAnnouncementDto) {
        return this.announcementsService.createAnnouncement(createAnnouncementDto);
    }

    @Patch(':id')
    updateAnnouncementById(@Param('id') id: string, @Body() updateAnnouncementDto: UpdateAnnouncementDto) {
        return this.announcementsService.updateAnnouncementById(id, updateAnnouncementDto);
    }

    @Delete(':id')
    deleteAnnouncementById(@Param('id') id: string) {
        return this.announcementsService.deleteAnnouncementById(id);
    }
}
