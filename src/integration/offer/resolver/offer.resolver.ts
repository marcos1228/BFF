import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { OfferDTOList } from "../dto/offer.dto.list";
import { OfferService } from "../service/offer.service";
import { Offer } from "../entity/offer.entity";
import { CreateOfferInput } from "../dto/create-offer.input";
import { UpdateOfferInput } from "../dto/update-offer.input";


@Resolver(() => OfferDTOList)
export class OfferResolver{
    constructor(private readonly offerService: OfferService){}

    @Mutation(() => Offer, {description: "Criar uma oferta"})
     createOffer(@Args('createOfferInput') createOfferInput: CreateOfferInput): Promise<any> {
        const create =  this.offerService.create(createOfferInput);
        return create;
    }
    

    @Query(() => [OfferDTOList], {description: "Lista as ofertas"})
    listOffer(){
      return this.offerService.findAll();
    }

    @Query(() => Offer, { description: 'Buscar uma oferta pelo ID' })
    findOneOffer(@Args('_id', { type: () => String }) id: string) {
      return this.offerService.getById(id);
    }

    @Mutation(() => Offer, {description: "Atualizar uma oferta"})
    updateOffer(@Args('teste') updateOffer: UpdateOfferInput){
      return this.offerService.update(updateOffer.id, updateOffer);

    }

    @Mutation(() => String, {description: "Deleta uma oferta"})
    deleteProduct(@Args('_id', { type: () => String }) id: string){
      return this.offerService.delete(id);
    }
}