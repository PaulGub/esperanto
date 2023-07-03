import { SequelizeClient } from '@clients/sequelize';
import { associations } from "@models/associations";
import { ApolloServer, BaseContext } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { getTypeDefs, getResolvers } from "@server/graphql";
import * as dotenv from 'dotenv';

dotenv.config();

const main = async () => {
    try {
        console.log('Connecting to database...');
        await SequelizeClient.authenticate();
        associations();
        console.log('✅  Database connected !');
    } catch (error) {
        console.log(error)
        console.log('⛔  Database connection failed !');
    }

    const [typeDefs, resolvers] = await Promise.all([getTypeDefs(), getResolvers()])

    const server: ApolloServer<BaseContext> = new ApolloServer({
        typeDefs,
        resolvers,
    });

    const { url } = await startStandaloneServer(server, {
        listen: { port: +process.env.SERVER_PORT || 4000 },
    });

    console.log(`🚀  Server ready at: ${url}`);
}

main().catch((error) => {
    console.log(error)
});