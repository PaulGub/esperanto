import { Researcher, Tag, User } from "@server/models";
import { UserInterface } from "@server/types";
import { Op } from "sequelize";
import CONST from "@server/CONST";


export const getAllResearchers = async (args: { start: number, limit: number }): Promise<{rows: UserInterface[], count: number}> => {
  const { start, limit } = args;
  return await User.findAndCountAll({
    where: {role: CONST.ROLES.RESEARCHER},
    order: [['lastname', 'ASC']],
    include: [Researcher, Tag],
    distinct: true,
    offset: start,
    limit: limit,
  });
};

export const getResearchersBySearch = async (args: { start: number, limit: number, search: string }): Promise<{rows: UserInterface[], count: number}> => {
  const { start, limit, search } = args;
  return await User.findAndCountAll({
    where: {
      [Op.or]: [
        { 'firstname': { [Op.like]: '%' + search + '%' } },
        { 'lastname': { [Op.like]: '%' + search + '%' } },
        { 'description': { [Op.like]: '%' + search + '%' } },
      ],
      role: CONST.ROLES.RESEARCHER
    },
    order: [['lastname', 'ASC']],
    include: [Researcher, Tag],
    distinct: true,
    offset: start,
    limit: limit,
  });
};