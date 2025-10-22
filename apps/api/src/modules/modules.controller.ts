import { Controller } from '@nestjs/common';
import { ModulesService } from './modules.service';
import { Get, Post, Patch, Delete, Param, Body } from '@nestjs/common';
import { ModuleCreateIn, ModuleUpdateIn } from '@repo/api/modules';

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
    createModule(@Body() createModuleDto: ModuleCreateIn) {
        return this.modulesService.createModule(createModuleDto);
    }

    @Patch(':id')
    updateModuleById(@Param('id') id: string, @Body() updateModuleDto: ModuleUpdateIn) {
        return this.modulesService.updateModuleById(id, updateModuleDto);
    }

    @Delete(':id')
    deleteModuleById(@Param('id') id: string) {
        return this.modulesService.deleteModuleById(id);
    }
}
