import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ProductUpdateInput {
  @Field()
  id: string

  @Field()
  name: string

  @Field()
  description: string

  @Field()
  slug: string

  @Field()
  category: string
}
