'use strict'
import { Router } from "https://deno.land/x/oak/mod.ts";
import { Inventory } from './data/inventory.js';
import {log} from './log.js'
import {cart} from './cart.js'

const router = new Router();

let inventory = new Inventory();

const logger = new log();

router
    .get("/api/products", context => {
        logger.info("Fetching all products");
        context.response.body = inventory.products})
    .get("/api/products/:title", context => {
        logger.info("Fetching products by title");
        context.response.body = inventory.products.find(item => item.title)})
    /*.post("/api/cart", async context => {
        logger.info("Adding Product to cart");
        if (!await context.state.session.has("cart")) {
            const shoppingCart = new cart();
            await context.state.session.set("cart", shoppingCart)
        }
        const shopingCart = await context.state.session.get("cart");
        sessionItem.add(await context.request.body({ type: "json" }).value)
    })
    .delete("/api/cart", async context => {
        logger.info("Removing Product from cart");
        if (await context.state.session.has("cart")) {
            await context.state.session.get("cart").remove(
                await context.request.body({ type: "json" }).value
                );
        }
    })*/
    ;

export const apiRoutes = router.routes();