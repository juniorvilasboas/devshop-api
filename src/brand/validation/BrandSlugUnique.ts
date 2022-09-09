import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface
} from 'class-validator'
import { BrandService } from '../brand.service'

@ValidatorConstraint({ name: 'brandSlugUnique', async: true })
export class BrandSlugUnique implements ValidatorConstraintInterface {
  constructor(private readonly brandService: BrandService) {}

  async validate(
    text: string,
    validationArguments: ValidationArguments
  ): Promise<boolean> {
    const id = validationArguments.object['id']
    const brand = await this.brandService.findBySlug(text)
    if (brand && id !== brand.id) {
      return false
    }
    return true
  }

  defaultMessage(): string {
    return 'Slug must be unique'
  }
}
