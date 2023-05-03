import { Field, InputType, PartialType } from "@nestjs/graphql";
import { CreateProductInput } from "./create-product.input";
import Long from "long";

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => String)
  id: string;
}