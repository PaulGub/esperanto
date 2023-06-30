import {HealthActor, Industrial, Need, Researcher, Tag, User} from "@models/index"
import {Model} from "sequelize";
import * as module from "module";

export const getAllNeeds = async () => {
    return Need.findAll({
    });
}
export const getNeedsById = async (needId: number) => {
    const needs = await Need.findByPk(needId);
    console.log(needs)
    return needs;
}