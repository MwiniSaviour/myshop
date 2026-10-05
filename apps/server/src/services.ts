import { createAuth } from "@mystore/auth";
import { createDb } from "@mystore/db";

import { ENV } from "./env.server";

export const db = createDb(ENV);
export const auth = createAuth(ENV, db);
