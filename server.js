'use strict'
import {Application} from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { apiRoutes } from "./backend/app.js";
import { frontendFiles } from "./backend/fileserver.js";


let commands = ["echo moin", "echo hallo"];

const app = new Application();

commands.forEach((command) => {
    const p = Deno.run(
        {
            cmd: [command.split(' ')[0], command.split(' ')[1]]
        }
    );

}.then(() => {
    app.use(apiRoutes);
    app.use(frontendFiles);
    
    
    
    app.listen({port: 8000});

    console.log("running")
}));












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
