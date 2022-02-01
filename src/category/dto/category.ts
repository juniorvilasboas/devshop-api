import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType('Category')
export class CategoryPublic {
  @Field({ nullable: true })
  id: String

  @Field({ nullable: true })
  name: String
}
