import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateOfferInput } from "./create-offer.input";

@InputType()
export class UpdateOfferInput extends PartialType(CreateOfferInput){
  @Field(() => String)
  id: string;
}