import { Field, InputType, ObjectType } from "@nestjs/graphql";

@InputType()
export class CreateOfferInput{

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