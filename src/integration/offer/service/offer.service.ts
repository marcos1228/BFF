import { Injectable } from "@nestjs/common";
import  axios from 'axios'; 
import { CreateOfferInput } from "../dto/create-offer.input";
import { OfferDTOList } from "../dto/offer.dto.list";
import { UpdateOfferInput } from "../dto/update-offer.input";


@Injectable()
export class OfferService {

    async create(createOfferInput: CreateOfferInput ) {
        const {data} = await axios.post('http://localhost:8083/api/offers', createOfferInput);
        return await data;
      }

    async findAll(): Promise<OfferDTOList[]> {
        const { data }  = await axios.get('http://localhost:8083/api/offers');
         return data.content;
      }

      async update(id: string, updateOfferInput: UpdateOfferInput){
        const {data} = await axios.put(`http://localhost:8083/api/offers/${id}`, updateOfferInput);
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

