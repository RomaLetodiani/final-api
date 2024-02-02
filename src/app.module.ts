import { Module } from '@nestjs/common';
import { AppController } from './app.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AppService } from './app.service';

import { Users } from './users/users.entity';
import { Product } from './product/product.entity';
import { ProductCategory } from './product-category/product-category.entity';
import { LikedProduct } from './liked-product/liked-product.entity';

import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { ProductCategoryModule } from './product-category/product-category.module';
import { LikedProductModule } from './liked-product/liked-product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'root',
      password: 'root',
      database: 'final',
      entities: [Users, ProductCategory, Product, LikedProduct],
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    AuthModule,
    ProductModule,
    ProductCategoryModule,
    LikedProductModule,
  ],
  providers: [AppService],
  controllers: [AppController],
})
export class AppModule {}
