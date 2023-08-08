import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class AllFieldsRequired {
    @IsString()
    email: string;

    @IsString()
    name: string;
}

export class FieldPickEmail extends PickType(AllFieldsRequired, ['email'] as const) {}

export class PartialAllThenPickEmail extends PickType(PartialType(AllFieldsRequired), ['email'] as const) {}

export class PickEmailThenPartial extends PartialType(PickType(AllFieldsRequired, ['email'] as const)) {}

export class ExtendAllButName extends OmitType(AllFieldsRequired, ['name'] as const) {}
