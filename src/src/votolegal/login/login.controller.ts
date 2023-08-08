import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import {
    AllFieldsRequired,
    ExtendAllButName,
    FieldPickEmail,
    PartialAllThenPickEmail,
    PickEmailThenPartial,
} from './dto/login.dto';

@Controller('login')
@ApiTags('Público')
export class LoginController {

    @Post('AllFieldsRequired')
    async AllFieldsRequired(@Body() dto: AllFieldsRequired): Promise<string> {
        return '';
    }

    @Post('FieldPickEmail')
    async FieldPickEmail(@Body() dto: FieldPickEmail): Promise<string> {
        return '';
    }
    @Post('PartialAllThenPickEmail')
    async PartialAllThenPickEmail(@Body() dto: PartialAllThenPickEmail): Promise<string> {
        return '';
    }
    @Post('PickEmailThenPartial')
    async PickEmailThenPartial(@Body() dto: PickEmailThenPartial): Promise<string> {
        return '';
    }

    @Post('ExtendAllButName')
    async ExtendAllButName(@Body() dto: ExtendAllButName): Promise<string> {
        return '';
    }
}
