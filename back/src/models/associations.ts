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
    Tag,
    ListUser,
    ListNeed,
    ListMaterial
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

    ListUser.belongsToMany(User, { through: 'ListUser_User' });
    User.belongsToMany(ListUser, { through: 'ListUser_User' });

    User.hasMany(ListUser, {onDelete: 'CASCADE'})
    ListUser.belongsTo(User)

    ListNeed.belongsToMany(Need, { through: 'ListNeed_Need' });
    Need.belongsToMany(ListNeed, { through: 'ListNeed_Need' });

    User.hasMany(ListNeed, {onDelete: 'CASCADE'})
    ListNeed.belongsTo(User)

    ListMaterial.belongsToMany(Material, { through: 'ListMaterial_Material' });
    Material.belongsToMany(ListMaterial, { through: 'ListMaterial_Material' });

    User.hasMany(ListMaterial, {onDelete: 'CASCADE'})
    ListMaterial.belongsTo(User)

    User.belongsToMany(User, { as: 'Following', through: 'follower', foreignKey: 'userId', otherKey: 'followerId' });
    User.belongsToMany(User, { as: 'Followers', through: 'follower', foreignKey: 'followerId', otherKey: 'userId' });
};