import { Field, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class OfferDTOList{
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