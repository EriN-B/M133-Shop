'use strict'
import { Router } from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import { Inventory } from './data/inventory.js';
import { Session } from "https://deno.land/x/sessions/mod.ts";
import {log} from './log.js'

const router = new Router();

let inventory = new Inventory();

const logger = new log();

router
    .get("/api/products", context => {
        logger.info("Fetching all products");
        context.response.body = inventory.products})
    .get("/api/products/:title", context => {
        console.log(params.title)
        logger.info("Fetching products by title");
        context.response.body = inventory.products.find(item => item.title)})
    .post("/api/cart", session.initMiddleware(), async context => {
        await sessionStorage.setItem("")
        logger.info("Adding Product to cart");
        const product = await context.request.body({ type: "json" }).value;
        console.log(product);
    });

export const apiRoutes = router.routes();