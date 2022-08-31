import { Field, InputType } from '@nestjs/graphql'
import { IsUUID, Length, Matches, Validate } from 'class-validator'
import { ProductSlugUnique } from '../validation/ProductSlugUnique'

@InputType()
export class ProductUpdateInput {
  @Field()
  @IsUUID()
  id: string

  @Field()
  @Length(3)
  name: string

  @Field()
  @Length(10)
  description: string

  @Field()
  @Length(3)
  @Matches(/^[a-z0-9]+(?:(?:-|_)+[a-z0-9]+)*$/)
  @Validate(ProductSlugUnique)
  slug: string

  @Field()
  @IsUUID()
  category: string
}
