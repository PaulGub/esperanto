import { UserInterface } from "@server/types";
import { getAllIndustrials, getIndustrialsBySearch } from "@controllers/IndustrialController";

export default {
  Query: {
    industrials: async (
      _,
      args: { start: number, limit: number },
    ): Promise<{rows: UserInterface[], count: number}> => getAllIndustrials(args),
    industrialsBySearch: async (
      _,
      args: { start: number, limit: number, search: string },
    ): Promise<{rows: UserInterface[], count: number}> => getIndustrialsBySearch(args),
  },
}