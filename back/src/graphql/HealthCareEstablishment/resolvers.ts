import { HealthCareEstablishmentT } from "@server/models";
import {
  getAllHealthCareEstablishments,
  getHealthCareEstablishmentsBySearch
} from "@controllers/HealthCareEstablishmentController";

export default {
  Query: {
    healthCareEstablishments: async (
      _,
      args: { start: number, limit: number },
    ): Promise<{rows: HealthCareEstablishmentT[], count: number}> => getAllHealthCareEstablishments(args),
    healthCareEstablishmentsBySearch: async (
      _,
      args: { start: number, limit: number, search: string },
    ): Promise<{rows: HealthCareEstablishmentT[], count: number}> => getHealthCareEstablishmentsBySearch(args),
  },
}