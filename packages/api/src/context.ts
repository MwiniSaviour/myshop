import type { Session } from "@mystore/auth";
import type { Database } from "@mystore/db";

export type Context = {
	session: Session | null;
	db: Database;
};
