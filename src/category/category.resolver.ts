import { Query, Resolver } from '@nestjs/graphql'
import { CategoryService } from './category.service'
import { Category } from './dto/category'

@Resolver(of => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}
  @Query(returns => [Category], { name: 'getAllCategories' })
  async getAllCategries(): Promise<Category[]> {
    return await this.categoryService.findAll()
  }
}
