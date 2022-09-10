import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { S3 } from '../utils/s3'
import { Brand } from './brand.entity'
import { BrandResolver } from './brand.resolver'
import { BrandService } from './brand.service'
import { BrandSlugUnique } from './validation/BrandSlugUnique'

@Module({
  imports: [TypeOrmModule.forFeature([Brand])],
  providers: [BrandService, BrandResolver, BrandSlugUnique, S3]
})
export class BrandModule {}
