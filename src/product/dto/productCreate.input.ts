import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class ProductCreateInput {
  @Field()
  name: string

  @Field()
  description: string

  @Field()
  slug: string

  @Field()
  category: string
}
