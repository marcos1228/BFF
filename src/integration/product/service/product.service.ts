import { Injectable } from "@nestjs/common";
import { ProductDTOList } from "../dto/product.dto.list";
import  axios from 'axios'; 
import { CreateProductInput } from "../dto/create-product.input";
import { UpdateProductInput } from "../dto/update-product.input";


@Injectable()
export class ProductService {

    async create(createProductInput: CreateProductInput) {
        const {data} = await axios.post('http://localhost:8084/api/products', createProductInput);
        return await data;
      }

    async findAll(): Promise<ProductDTOList[]> {
        const { data }  = await axios.get('http://localhost:8084/api/products');
         return data.content;
      }

      async update(id: string, updateProductInput: UpdateProductInput){
        const {data} = await axios.put(`http://localhost:8084/api/products/${id}`, updateProductInput);
        return await data;
      }

      
      async delete(id: string){
        const {data} = await axios.delete(`http://localhost:8084/api/products/${id}`);
        console.log(data)
        return await id;
      }

      async getById(id: string){
        const {data} = await axios.get(`http://localhost:8084/api/products/${id}`);
        return await data;
      }
}

