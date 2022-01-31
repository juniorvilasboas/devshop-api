import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Category {
  @Field({ nullable: true })
  id: String

  @Field({ nullable: true })
  name: String
}
