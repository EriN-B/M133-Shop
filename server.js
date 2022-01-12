'use strict'
import { Application} from "https://deno.land/x/oak@v6.3.1/mod.ts";
import { Session } from "https://deno.land/x/session@1.1.0/mod.ts";
import { apiRoutes } from "./backend/app.js";
import { frontendFiles } from "./backend/fileserver.js";
import {log} from './backend/log.js'

const logger = new log();

logger.info("Starting up")

const app = new Application();

const session = new Session({ framework: "oak" });
await session.init();

app.use(session.use()(session));

app.use(oakCors({ origin: "*" }));;
app.use(apiRoutes);
app.use(frontendFiles);

app.listen({port: 8000});

logger.info("Running on port: 8000");
