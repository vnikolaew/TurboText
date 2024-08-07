import { Arg, Ctx, Field, InputType, ObjectType, Query, Resolver, Int, Float, GraphQLISODateTime } from "type-graphql";
import { MyContext } from "@types";
import { TypingRun } from "@repo/db";
import moment from "moment";
import { GraphQLJSONObject, NegativeIntMock } from "graphql-scalars";
import { query } from "express";

export enum TypingMode {
   TIME = `TIME`,
   QUOTE = `QUOTE`,
   WORDS = `WORDS`,
}

@InputType()
export class GetLeaderboardInput {
   @Field(() => Boolean)
   public daily: boolean = true;

   @Field(() => String)
   public language: string = `English`;
}

function mapRow(run: TypingRun, index: number): LeaderboardRow {
   return {
      position: index + 1,
      date: run.createdAt,
      user: {
         id: run.user.id,
         image: run.user.image,
         level: run.user.experience?.level,
         name: run.user.name,
         og: run.user.metadata?.ogAccount ?? false,
      },
      wpm: Number(run.wpm.toFixed(2)),
      accuracy: Number(run.accuracy.toFixed(2)),
      consistency: Number(run.consistency.toFixed(2)),
      raw: Number( run.rawWpm?.toFixed(2)),
      metadata: {},
   };
}

@ObjectType()
export class LeaderboardUserRow {
   @Field(() => String)
   public id: string = ``;

   @Field(() => String)
   public name: string = ``;

   @Field(() => String)
   public image: string = ``;

   @Field(() => Int)
   public level: number = 0;

   @Field(() => Boolean)
   public og: boolean = false;
}

@ObjectType()
export class LeaderboardRow {

   @Field(() => Int)
   public position: number = 0;

   @Field(() => GraphQLISODateTime)
   public date: Date = new Date();

   @Field(() => LeaderboardUserRow)
   public user: LeaderboardUserRow = null!;

   @Field(() => Float)
   public wpm: number = 0;

   @Field(() => Float)
   public accuracy: number = 0;

   @Field(() => Float)
   public consistency: number= 0;

   @Field(() => Float)
   public raw: number = 0;

   @Field(() => GraphQLJSONObject)
   public metadata = { };
}

@ObjectType()
export class LeaderboardResponse {
   @Field(() => [LeaderboardRow], {nullable: true})
   public time15runs?: LeaderboardRow[] = [];


   @Field(() => [LeaderboardRow], {nullable: true})
   public time60runs?: LeaderboardRow[] = [];

   @Field(() => [String])
   public qualifiedUserIds: string[] = [];
}

@Resolver()
export class LeaderboardResolver {

   @Query(() => LeaderboardResponse)
   async getLeaderboard(@Arg(`input`, () => GetLeaderboardInput) { language, daily }: GetLeaderboardInput, @Ctx() { prisma, userId }: MyContext) {
      const qualifiedUserIds = await prisma.typingRun.groupBy({
         by: [`userId`],
         _sum: {
            totalTimeMilliseconds: true,
         },
         having: {
            totalTimeMilliseconds: {
               _sum: {
                  gt: 1000 * 60,
               },
            },
         },
      });

      const runs = await prisma.typingRun.findMany({
         where: {
            ...(daily
               ? {
                  createdAt: {
                     gte: moment(new Date()).subtract(1, `day`).toDate(),
                  },
               }
               : {}),
            ...(language
               ? {
                  metadata: {
                     path: [`language`],
                     equals: language,
                  },
               }
               : {}),
            // userId:  {
            //    in:  qualifiedUserIds.map(_ => _.userId)
            // }
         },
         include: {
            user: {
               include: {
                  experience: { select: { id: true, level: true } },
               },
            },
         },
         take: 100,
      });

      const time15Runs: LeaderboardRow[] = runs
         .filter((r) => r.mode === TypingMode.TIME && r.time === 15)
         .sort((a, b) => b.wpm - a.wpm)
         .map(mapRow) ?? [];

      const time60Runs: LeaderboardRow[] = runs
         .filter((r) => r.mode === TypingMode.TIME && r.time === 60)
         .sort((a, b) => b.wpm - a.wpm)
         .map(mapRow) ?? [];
      console.log({qualifiedUserIds, time15Runs, time60Runs});

      return { time15Runs, time60Runs, qualifiedUserIds: qualifiedUserIds?.map(q => q.userId) ?? [] };
   }
}