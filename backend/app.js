'use strict'
import {Router} from 'https://deno.land/x/oak@v6.3.1/mod.ts';
import {v4} from 'https://deno.land/std@0.77.0/uuid/mod.ts';
import {Database} from './database.js'

let list = [
    {id: v4.generate(), beschreibung: "One"},
    {id: v4.generate(), beschreibung: "two"},
    {id: v4.generate(), beschreibung: "three"},
];

const db = new Database();
await db.populateFromFile("./backend/database.txt")

const router = new Router();

router
.get("/api/list", context => context.response.body = list)
.get("/api/id", context => context.response.body = v4.generate())
.post("/api/list", async context => {
    const newItem = await context.request.body({type: "json"}).value;
    console.log("requestBody: ", newItem);
    list = [
        ...list,
        newItem
    ];
    context.response.status = 200;
})
.get("/api/fetch", context => {
    const [response] = db.query("SELECT * FROM products");
    context.response.body = response;
} 
);

export const apiRoutes = router.routes();

