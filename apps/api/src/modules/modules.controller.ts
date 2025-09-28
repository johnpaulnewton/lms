import { Controller } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { CreateModuleDto } from './create-module.dto';
import { UpdateModuleDto } from './update-module.dto';

@Controller('modules')
export class ModulesController {
    constructor(private modulesService: ModulesService) {}

    @Get()
    getModules() {
        return this.modulesService.getModules();
    }

    @Get(':id')
    getModuleById(@Param('id') id: string) {
        return this.modulesService.getModuleById(id);
    }

    @Post()
    createModule(@Body() createModuleDto: CreateModuleDto) {
        return this.modulesService.createModule(createModuleDto);
    }

    @Patch(':id')
    updateModuleById(@Param('id') id: string, @Body() updateModuleDto: UpdateModuleDto) {
        return this.modulesService.updateModuleById(id, updateModuleDto);
    }

    @Delete(':id')
    deleteModuleById(@Param('id') id: string) {
        return this.modulesService.deleteModuleById(id);
    }
}
