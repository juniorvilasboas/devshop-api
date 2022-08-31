import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { CategoryService } from '../category.service'

@ValidatorConstraint({ name: 'categorySlugUnique', async: true })
export class CategorySlugUnique implements ValidatorConstraintInterface {
  constructor(private readonly categoryService: CategoryService) {}

  async validate(
    text: string,
    validationArguments: ValidationArguments
  ): Promise<boolean> {
    const id = validationArguments.object['id']
    const category = await this.categoryService.findBySlug(text)
    if (category && id !== category.id) {
      return false
    }
    return true
  }

  defaultMessage(): string {
    return 'Slug must be unique'
  }
}
