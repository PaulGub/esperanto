import { HealthCareEstablishment, HealthCareEstablishmentT } from "@server/models";
import { Op } from "sequelize";

export const getAllHealthCareEstablishments = async (args: { start: number, limit: number }): Promise<{ rows: HealthCareEstablishmentT[], count: number }> => {
  const { start, limit } = args;
  return await HealthCareEstablishment.findAndCountAll({
    order: [['name', 'ASC']],
    offset: start,
    limit: limit
  });
};

export const getHealthCareEstablishmentsBySearch = async (args: { start: number, limit: number, search: string }): Promise<{ rows: HealthCareEstablishmentT[], count: number }> => {
  const { start, limit, search } = args;
  return await HealthCareEstablishment.findAndCountAll({
    where: {
      [Op.or]: [
        { 'name': { [Op.like]: '%' + search + '%' } },
        { 'address1': { [Op.like]: '%' + search + '%' } },
        { 'zipCode': { [Op.like]: '%' + search + '%' } },
        { 'city': { [Op.like]: '%' + search + '%' } },
        { 'country': { [Op.like]: '%' + search + '%' } },
      ],
    },
    order: [['name', 'ASC']],
    offset: start,
    limit: limit
  });
}