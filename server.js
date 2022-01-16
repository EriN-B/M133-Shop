'use strict'
import { Application } from "https://deno.land/x/oak/mod.ts";
import { Session } from "https://deno.land/x/oak_sessions/mod.ts";
import { apiRoutes } from "./backend/app.js";
import { frontendFiles } from "./backend/fileserver.js";
import {log} from './backend/log.js'

const logger = new log();

logger.info("Starting up")

const session = new Session();

const app = new Application();
app.use(session.initMiddleware())
app.use(apiRoutes);
app.use(frontendFiles);

app.listen({port: 8000});

logger.info("Running on port: 8000");
