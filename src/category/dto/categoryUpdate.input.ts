import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length, Matches, Validate } from 'class-validator'
import { CategorySlugUnique } from '../validation/CategorySlugUnique'

@InputType()
export class CategoryUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Field()
  @Length(3)
  name: string

  @Field()
  @Length(3)
  @Matches(/^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/)
  @Validate(CategorySlugUnique)
  slug: string
}
