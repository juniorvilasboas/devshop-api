import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { ProductService } from '../product.service'

@ValidatorConstraint({ name: 'productSlugUnique', async: true })
export class ProductSlugUnique implements ValidatorConstraintInterface {
  constructor(private readonly productService: ProductService) {}

  async validate(
    text: string,
    validationArguments: ValidationArguments
  ): Promise<boolean> {
    const id = validationArguments.object['id']
    const product = await this.productService.findBySlug(text)
    if (product && id !== product.id) {
      return false
    }
    return true
  }

  defaultMessage(): string {
    return 'Slug must be unique'
  }
}
