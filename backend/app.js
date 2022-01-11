'use strict'
import { Router } from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import { v4 } from 'https://deno.land/std@0.77.0/uuid/mod.ts';
import { Inventory } from './data/inventory.js';

const router = new Router();

let inventory = new Inventory();

router
    .get("/api/products", context => context.response.body = inventory.products)
    .get("/api/products/:title", context => context.response.body = inventory.products.find(item => item.title))

export const apiRoutes = router.routes();