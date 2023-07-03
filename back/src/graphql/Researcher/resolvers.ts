import { UserInterface } from "@server/types";
import {getAllResearchers, getResearchersBySearch} from "@controllers/ResearcherController";

export default {
  Query: {
    researchers: async (
      _,
      args: { start: number, limit: number },
    ): Promise<{rows: UserInterface[], count: number}> => getAllResearchers(args),
    researchersBySearch: async (
      _,
      args: { start: number, limit: number, search: string },
    ): Promise<{rows: UserInterface[], count: number}> => getResearchersBySearch(args),
  },
}