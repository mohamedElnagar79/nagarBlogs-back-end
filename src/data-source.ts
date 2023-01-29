import "reflect-metadata"
import { DataSource } from "typeorm"
import { Article } from "./entity/Article"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "More@1234",
    database: "blogs",
    synchronize: true,
    logging: false,
    entities: [Article],
    migrations: [],
    subscribers: [],
})
