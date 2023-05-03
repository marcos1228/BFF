import { Field, InputType } from "@nestjs/graphql";
@InputType()
export class CreateProductInput{
    @Field(() => String)
    name: string;
    
    @Field(() => String)
    price: string;
  
    @Field(() => String)
    theamount: string;
    
    @Field(() => String)
    category: string;
  
    @Field(() => String)
    classification: string;
    
    @Field(() => String)
    description: string;
}