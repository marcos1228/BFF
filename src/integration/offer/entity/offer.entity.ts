import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Offer{

 @Field()
  id: string;

  @Field()
  idProduct: string;

  @Field()
  title: string;

  @Field()
  dateStart: string;

  @Field()
  dateEnd: string;

  @Field()
  discount: string;
}