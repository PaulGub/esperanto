import {
    Company,
    HealthActor,
    HealthCareEstablishment,
    Industrial,
    Material,
    Need,
    Professional,
    Researcher,
    User
} from '@models/index';

export const associations = (): void => {
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