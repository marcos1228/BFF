import { ObjectType, Field, InputType } from '@nestjs/graphql';


@ObjectType()
export class ProductDTOList {

  @Field()
  id: string;
  
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
}

