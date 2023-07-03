import { getAllHealthActors, getHealthActorsBySearch } from "@controllers/HealthActorController";
import { UserInterface } from "@server/types";

export default {
  Query: {
    healthActors: async (
      _,
      args: { start: number, limit: number },
    ): Promise<{rows: UserInterface[], count: number}> => getAllHealthActors(args),
    healthActorsBySearch: async (
      _,
      args: { start: number, limit: number, search: string },
    ): Promise<{rows: UserInterface[], count: number}> => getHealthActorsBySearch(args),
  },
}