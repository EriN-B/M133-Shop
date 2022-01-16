'use strict'
import { Application } from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { apiRoutes } from "./backend/app.js";
import { frontendFiles } from "./backend/fileserver.js";
import { oakCors } from "https://deno.land/x/cors/mod.ts"
import { Logger } from './backend/logger.js'

const app = new Application();
let logger = new Logger();

app.use(oakCors({ origin: "*" }));

app.use(apiRoutes);
app.use(frontendFiles);

app.listen({ port: 8000 });
logger.info('Server is running on localhost:8000');



