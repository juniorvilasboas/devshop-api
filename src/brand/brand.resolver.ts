import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { GraphQLUpload } from 'apollo-server-express'
import { FileUpload } from 'graphql-upload'
import { BrandMapper } from './brand.mapper'
import { BrandService } from './brand.service'
import { BrandPublic } from './dto/brand'
import { BrandCreateInput } from './dto/brandCreate.input'
import { BrandUpdateInput } from './dto/brandUpdate.input'

@Resolver(of => BrandPublic)
export class BrandResolver {
  constructor(private readonly brandService: BrandService) {}

  @Query(returns => [BrandPublic], { name: 'getAllBrands' })
  async getAllBrands(): Promise<BrandPublic[]> {
    return await this.brandService.findAll()
  }

  @Query(returns => BrandPublic, { name: 'getBrandById' })
  async getBrandById(@Args('id') id: string): Promise<BrandPublic> {
    return await this.brandService.findById(id)
  }

  @Query(returns => BrandPublic, { name: 'getBrandBySlug' })
  async getBrandBySlug(@Args('slug') slug: string): Promise<BrandPublic> {
    return await this.brandService.findBySlug(slug)
  }

  @Mutation(returns => BrandPublic, { name: 'createBrand' })
  async createBrand(
    @Args('input') input: BrandCreateInput
  ): Promise<BrandPublic> {
    return this.brandService.create(BrandMapper.toEntity(input))
  }

  @Mutation(returns => BrandPublic, { name: 'uploadBrandLogo' })
  async uploadLogo(
    @Args('id') id: string,
    @Args('file', { type: () => GraphQLUpload }) file: FileUpload
  ): Promise<BrandPublic> {
    const { createReadStream, filename, mimetype } = await file
    return this.brandService.uploadLogo(
      id,
      createReadStream,
      filename,
      mimetype
    )
  }

  @Mutation(returns => BrandPublic, { name: 'updateBrand' })
  async updateBrand(
    @Args('input') input: BrandUpdateInput
  ): Promise<BrandPublic> {
    return this.brandService.update(input)
  }

  @Mutation(returns => Boolean, { name: 'deleteBrand' })
  async deleteBrand(@Args('id') input: string): Promise<boolean> {
    return this.brandService.delete(input)
  }
}
