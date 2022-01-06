'use strict'
import { DB } from "https://deno.land/x/sqlite@v2.0.0/mod.ts";
import {Logger} from './logger.js'
/*
    Using version 2.0.0 of SqLite due to older version of Deno.
    For reference see: https://deno.land/x/sqlite@v2.0.0
    Use this Link to get to the Reference of the correct Version
*/

export class Database {
    logger = new Logger();
    db = null;
    constructor() {
        this.db = new DB('shop');
    }

    query(query) {
        const response = undefined;
        try {
            response = this.db.query(query);
        } catch (exception) {
            console.log(exception)
        }
        return response;
    }

    async populateFromFile(path) {
        try {
            const sql = await Deno.readTextFile(path);
            this.logger.info("dropping Tables");
            await this.db.query("DROP TABLE IF EXISTS categories");
            await this.db.query("DROP TABLE IF EXISTS products");
            this.logger.info("populating db");
            await this.db.query(sql);
        } catch (exception) {
            this.logger.error("Failed to initialize and populate Database - " + exception)
        }
        
    }


}