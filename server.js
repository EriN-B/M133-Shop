'use strict'
import {Application} from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { apiRoutes } from "./backend/app.js";
import { frontendFiles } from "./backend/fileserver.js";

const app = new Application();

app.use(apiRoutes);

app.listen({port: 8000});













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
