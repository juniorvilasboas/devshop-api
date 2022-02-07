import { InputType, Field } from '@nestjs/graphql'

@InputType()
export class CategoryCreateInput {
  @Field()
  name: string

  @Field()
  slug: string
}
