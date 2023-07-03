import { Material, MaterialT } from "@server/models";
import {Op} from "sequelize";

export const getAllMaterials = async (args: { start: number, limit: number }): Promise<{rows: MaterialT[], count: number}> => {
  const { start, limit } = args;
  return await Material.findAndCountAll({
    order: [['name', 'ASC']],
    offset: start,
    limit: limit
  });
};

export const getMaterialsBySearch = async (args: { start: number, limit: number, search: string }): Promise<{rows: MaterialT[], count: number}> => {
  const { start, limit, search } = args;
  return await Material.findAndCountAll({
    where: {
      [Op.or]: [
        { 'name': { [Op.like]: '%' + search + '%' } },
        { 'description': { [Op.like]: '%' + search + '%' } },
      ],
    },
    order: [['name', 'ASC']],
    offset: start,
    limit: limit
  });
};