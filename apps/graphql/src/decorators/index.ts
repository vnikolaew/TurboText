import { createParameterDecorator } from "type-graphql";
import { MyContext } from "@types";

/**
 * @decorator Returns the User Id from the context.
 * @constructor
 */
export function UserId() {
   return createParameterDecorator<MyContext>(async ({ context }) => context.userId, {});
}

/**
 * @decorator Returns the Session Id from the context.
 * @constructor
 */
export function SessionId() {
   return createParameterDecorator<MyContext>(async ({ context }) => context.sessionId, {});
}
