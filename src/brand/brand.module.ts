import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Brand } from './brand.entity'
import { BrandResolver } from './brand.resolver'
import { BrandService } from './brand.service'
import { BrandSlugUnique } from './validation/BrandSlugUnique'

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  providers: [BrandService, BrandResolver, BrandSlugUnique]
})
export class BrandModule {}
