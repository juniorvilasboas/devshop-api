import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Category } from './category.entity'
import { CategoryResolver } from './category.resolver'
import { CategoryService } from './category.service'
import { CategorySlugUnique } from './validation/CategorySlugUnique'

@Module({
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoryService, CategoryResolver, CategorySlugUnique]
})
export class CategoryModule {}
