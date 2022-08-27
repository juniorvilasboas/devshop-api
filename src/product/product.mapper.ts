import { Category } from 'src/category/category.entity'
import { ProductCreateInput } from './dto/productCreate.input'
import { ProductUpdateInput } from './dto/productUpdate.input'
import { Product } from './product.entity'

export class ProductMapper {
  public static toEntity(input: ProductCreateInput): Product {
    const category = new Category()
    category.id = input.category

    const entity = new Product()
    entity.name = input.name
    entity.slug = input.slug
    entity.description = input.description
    entity.category = category

    return entity
  }

  public static fromUpdateToEntity(input: ProductUpdateInput): Product {
    const category = new Category()
    category.id = input.category

    const entity = new Product()
    entity.id = input.id
    entity.name = input.name
    entity.slug = input.slug
    entity.description = input.description
    entity.category = category

    return entity
  }
}
