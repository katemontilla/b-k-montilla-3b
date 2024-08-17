import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { PostService } from './post.service';
import { Prisma } from '@prisma/client';

@Controller('post')
export class PostController {
  constructor(private PostService: PostService) {}

  @Get()
  async getAll() {
    try {
      return await this.PostService.getAll();
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Get(':id')
  async get(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.PostService.get(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }

  @Post()
  async create(@Body() dto: Prisma.PostCreateInput) {
    try {
      return await this.PostService.create(dto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: Prisma.PostUpdateInput,
  ) {
    try {
      return await this.PostService.update(id, dto);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    try {
      return await this.PostService.delete(id);
    } catch (error) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
