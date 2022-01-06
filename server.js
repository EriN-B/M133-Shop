'use strict'
import {Application} from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { apiRoutes } from "./backend/app.js";
import { frontendFiles } from "./backend/fileserver.js";
import { Logger } from "./backend/logger.js"

const logger = new Logger();

const app = new Application();

app.use(apiRoutes);
if(Deno.args[0] === undefined) {
    throw new Error("please provide an argument")
}
else if(Deno.args[0] === '-prod') {
    app.use(frontendFiles); 
}


app.listen({port: 8000});

logger.info("Running on Port: 8000")














/*
async function runCommands(commands) {
    commands.forEach((command) => {
        const p = Deno.run(
            {
                cmd: [command.split(' ')[0], command.split(' ')[1]]
            }
        );
    
        await p.status();
    })
}
*/
