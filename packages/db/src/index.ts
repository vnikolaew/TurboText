export * from "@prisma/client";
export * from "./prisma";
export * from "./utils";
export { xprisma }  from './prisma'

export * as Models from "@generated/type-graphql/models";
// // export { resolvers } from "@generated/type-graphql";
// export * as Enhance from "@generated/type-graphql/enhance";
// export * as TypeGraphQLPrisma from "@generated/type-graphql";
// export * as Scalars from "@generated/type-graphql/scalars";
// export * as CrudResolvers from "@generated/type-graphql/resolvers/crud";
// // export * as OutputsResolvers from "@generated/type-graphql/resolvers/outputs";
// export * as InputsResolvers from "@generated/type-graphql/resolvers/inputs";
export * as RelationsResolvers from "@generated/type-graphql/resolvers/relations";
// export * as Enums from "@generated/type-graphql/enums";
