import {HealthActor, Tag, User} from "@server/models";
import CONST from "@server/CONST";
import {UserInterface} from "@server/types";
import { Op } from "sequelize";

export const getAllHealthActors = async (args: { start: number, limit: number }): Promise<{rows: UserInterface[], count: number}> => {
  const { start, limit } = args;
  return await User.findAndCountAll({
    where: {role: CONST.ROLES.HEALTH_ACTOR},
    order: [['lastname', 'ASC']],
    include: [HealthActor, Tag],
    distinct: true,
    offset: start,
    limit: limit
  });
};

export const getHealthActorsBySearch = async (args: { start: number, limit: number, search: string }): Promise<{rows: UserInterface[], count: number}> => {
  const { start, limit, search } = args;
  return await User.findAndCountAll({
    where: {
      [Op.or]: [
        { 'firstname': { [Op.like]: '%' + search + '%' } },
        { 'lastname': { [Op.like]: '%' + search + '%' } },
        { 'description': { [Op.like]: '%' + search + '%' } },
      ],
      role: CONST.ROLES.HEALTH_ACTOR
    },
    order: [['lastname', 'ASC']],
    include: [HealthActor, Tag],
    distinct: true,
    offset: start,
    limit: limit
  });
};