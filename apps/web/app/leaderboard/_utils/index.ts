import { ChallengeLeaderboardRow } from "@app/leaderboard/_components/challenges/ChallengeLeaderboardTableRow";
import { UserChallengeLeaderboard } from "@app/leaderboard/_queries";

export function mapUser(
   user: UserChallengeLeaderboard,
   index: number
): ChallengeLeaderboardRow {
   return {
      position: index + 1,
      wins: user.wins,
      draws: user.draws,
      losses: user.losses,
      score: user.score,
      user: {
         id: user.id,
         image: user.image!,
         level: user.experience?.level,
         name: user.name!,
         og: user.metadata?.ogAccount ?? false,
      },
   };
}
