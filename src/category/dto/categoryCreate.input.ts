import { Field, InputType } from '@nestjs/graphql'
import { Length, Matches, Validate } from 'class-validator'
import { CategorySlugUnique } from '../validation/CategorySlugUnique'

@InputType()
export class CategoryCreateInput {
  @Field()
  @Length(3)
  name: string

  @Field()
  @Length(3)
  @Matches(/^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/)
  @Validate(CategorySlugUnique)
  slug: string
}
