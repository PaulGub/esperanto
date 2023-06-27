import {Company} from "./Company";
import {Expertise} from "./Expertise";
import {HealthActor} from "./HealthActor";
import {HealthCareEstablishment} from "./HealthCareEstablishment";
import {Industrial} from "./Industrial";
import {Material} from "./Material";
import {Need} from "./Need";
import {Professional} from "./Professional";
import {Researcher} from "./Researcher";
import {Resource} from "./Resource";
import {Role} from "./Role";
import {Tag} from "./Tag";
import {User} from "./User";

export const Associations = (): void => {
    HealthActor.belongsTo(Professional);
    Professional.hasMany(HealthActor, { onDelete: 'CASCADE' });

    HealthActor.belongsToMany(User, { through: 'User_HealthActor' });
    User.belongsToMany(HealthActor, { through: 'User_HealthActor' });

    Industrial.belongsToMany(User, { through: 'User_Industrial' });
    User.belongsToMany(Industrial, { through: 'User_Industrial' });

    Researcher.belongsToMany(User, { through: 'User_Researcher' });
    User.belongsToMany(Researcher, { through: 'User_Researcher' });

    Material.belongsTo(Need)
    Need.hasMany(Material, {onDelete: 'CASCADE'})

    Material.belongsTo(Company)
    Company.hasMany(Company, {onDelete: 'CASCADE'})

    Material.belongsTo(HealthCareEstablishment)
    HealthCareEstablishment.hasMany(Material, {onDelete: 'CASCADE'})

    Need.belongsTo(User)
    User.hasMany(Need, {onDelete: 'CASCADE'})

    Professional.belongsToMany(Need, { through: 'Professional_Need' });
    Need.belongsToMany(Professional, { through: 'Professional_Need' });

    Need.belongsTo(Material)
    Material.hasMany(Need, {onDelete: 'CASCADE'})

};