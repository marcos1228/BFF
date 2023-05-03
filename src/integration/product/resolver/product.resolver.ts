import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { ProductDTOList } from "../dto/product.dto.list";
import { ProductService } from "../service/product.service";
import { CreateProductInput } from "../dto/create-product.input";
import { Product } from "../entity/product.entity";
import { UpdateProductInput } from "../dto/update-product.input";

@Resolver(() => ProductDTOList)
export class ProductResolver{
    constructor(private readonly productService: ProductService){}

    @Mutation(() => Product)
     createProduct(@Args('createProductInput') createProductInput: CreateProductInput): Promise<any> {
        const create =  this.productService.create(createProductInput);
        return create;
    }
    

    @Query(() => [ProductDTOList])
    listProduct(){
      return this.productService.findAll();
    }

    @Query(() => String, { name: 'product' })
    findOne(@Args('_id', { type: () => String }) id: string) {
    const teste =  this.productService.getById(id);
    console.log(teste)
      return teste;
    }

    @Mutation(() => Product)
    updateProduct(@Args('teste') updateProduct: UpdateProductInput){
      return this.productService.update(updateProduct.id, updateProduct);

    }

    @Mutation(() => String)
    deleteProduct(@Args('_id', { type: () => String }) id: string){
      return this.productService.delete(id);
    }
}