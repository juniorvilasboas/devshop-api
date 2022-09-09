import { Field, InputType } from '@nestjs/graphql'
import { Length, Matches, Validate } from 'class-validator'
import { BrandSlugUnique } from '../validation/BrandSlugUnique'

@InputType()
export class BrandCreateInput {
  @Field()
  @Length(3)
  name: string

  @Field()
  @Length(3)
  @Matches(/^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/)
  @Validate(BrandSlugUnique)
  slug: string
}
