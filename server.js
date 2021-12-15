'use strict'
import {Application} from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { apiRoutes } from "./backend/app.js";
import { frontendFiles } from "./backend/fileserver.js";
import { exec } from "https://deno.land/x/exec/mod.ts";

const app = new Application();


await exec('cd ./frontend && npm i && ng build && cd ..');

app.use(apiRoutes);
app.use(frontendFiles);



app.listen({port: 8000});


console.log("running")
