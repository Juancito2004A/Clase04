import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards
} from '@nestjs/common';
import { ProductDto } from './dto/product.dto';
import { ProductsService } from './products.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('api/products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  async list() {
    return { data: await this.productsService.findAll() };
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    return { data: await this.productsService.findOne(id) };
  }

  @Post()
  @HttpCode(201)
  async create(@Body() payload: ProductDto) {
    return { data: await this.productsService.create(payload) };
  }

  @Put(':id')
  async update(@Param('id', ParseIntPipe) id: number, @Body() payload: ProductDto) {
    return { data: await this.productsService.update(id, payload) };
  }

  @Delete(':id')
  @HttpCode(204)
  async remove(@Param('id', ParseIntPipe) id: number) {
    await this.productsService.remove(id);
  }
}
