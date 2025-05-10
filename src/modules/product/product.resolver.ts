import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { Product } from './product.schema';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/gql-auth.guard';


// @Query(() => [Product])
// @UseGuards(GqlAuthGuard)
// getProducts(@CurrentUser() user: any) {
//   console.log('User ID:', user.userId);
//   return this.productService.findAll();
// }


@Resolver(() => Product)
export class ProductResolver {
  constructor(private productService: ProductService) {}

  @Query(() => [Product])
  async products() {
    return this.productService.findAll();
  }

  @Query(() => Product)
  async product(@Args('id') id: string) {
    return this.productService.findOne(id);
  }

  @Mutation(() => Product)
  @UseGuards(GqlAuthGuard)
  async createProduct(
    @Args('name') name: string,
    @Args('details') details: string
  ) {
    return this.productService.create({ name, details });
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('id') id: string,
    @Args('name', { nullable: true }) name: string,
    @Args('details', { nullable: true }) details: string
  ) {
    return this.productService.update(id, { name, details });
  }

  @Mutation(() => Product)
  async deleteProduct(@Args('id') id: string) {
    return this.productService.delete(id);
  }
}
