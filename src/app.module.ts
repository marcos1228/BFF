import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ProductResolver } from './integration/product/resolver/product.resolver';
import { ProductService } from './integration/product/service/product.service';
import { OfferResolver } from './integration/offer/resolver/offer.resolver';
import { OfferService } from './integration/offer/service/offer.service';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      playground: true,
      debug: true
    }
    ),
  ],
  providers: [
    ProductResolver, 
    ProductService,
    OfferResolver,
    OfferService
  ]
})
export class AppModule {}