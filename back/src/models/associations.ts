import {
    Company,
    HealthActor,
    HealthCareEstablishment,
    Industrial,
    Material,
    Need,
    Professional,
    Researcher,
    User,
    Resource,
    Expertise,
    Tag
} from '@models/index';

export const associations = (): void => {
    HealthActor.hasOne(User)
    User.belongsTo(HealthActor, { onDelete: 'CASCADE' });

    HealthActor.belongsTo(Professional);
    Professional.hasMany(HealthActor, { onDelete: 'CASCADE' });

    Industrial.hasOne(User)
    User.belongsTo(Industrial, { onDelete: 'CASCADE' })

    Researcher.hasOne(User)
    User.belongsTo(Researcher, { onDelete: 'CASCADE' })

    Material.belongsTo(Company)
    Company.hasMany(Company, { onDelete: 'CASCADE' })

    Material.belongsTo(HealthCareEstablishment)
    HealthCareEstablishment.hasMany(Material, { onDelete: 'CASCADE' })

    Need.belongsTo(User)
    User.hasMany(Need, {onDelete: 'CASCADE'})

    Professional.belongsToMany(Need, { through: 'Professional_Need' });
    Need.belongsToMany(Professional, { through: 'Professional_Need' });

    Resource.belongsTo(User)
    User.hasMany(Resource, {onDelete: 'CASCADE'})

    Material.belongsToMany(Need, { through: 'Material_Need' });
    Need.belongsToMany(Material, { through: 'Material_Need' });

    Expertise.belongsToMany(User, { through: 'Expertise_User' });
    User.belongsToMany(Expertise, { through: 'Expertise_User' });

    Tag.belongsToMany(Need, { through: 'Tag_Need' });
    Need.belongsToMany(Tag, { through: 'Tag_Need' });

    Tag.belongsToMany(User, { through: 'Tag_User' });
    User.belongsToMany(Tag, { through: 'Tag_User' });

    Industrial.belongsToMany(Company, { through: 'Industrial_company' });
    Company.belongsToMany(Industrial, { through: 'Industrial_company' });

    HealthCareEstablishment.belongsToMany(HealthActor, { through: 'HealthActor_Infrastructure' });
    HealthActor.belongsToMany(HealthCareEstablishment, { through: 'HealthActor_Infrastructure' });
};