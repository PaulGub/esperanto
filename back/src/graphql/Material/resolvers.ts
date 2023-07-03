import { MaterialT } from "@server/models";
import { getAllMaterials, getMaterialsBySearch } from "@controllers/MaterialController";

export default {
  Query: {
    materials: async (
      _,
      args: { start: number, limit: number },
    ): Promise<{rows: MaterialT[], count: number}> => getAllMaterials(args),
    materialsBySearch: async (
      _,
      args: { start: number, limit: number, search: string },
    ): Promise<{rows: MaterialT[], count: number}> => getMaterialsBySearch(args),
  }
}