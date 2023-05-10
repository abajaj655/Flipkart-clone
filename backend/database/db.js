import mongoose from "mongoose"

export const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-wrhijxp-shard-00-00.m35m9mj.mongodb.net:27017,ac-wrhijxp-shard-00-01.m35m9mj.mongodb.net:27017,ac-wrhijxp-shard-00-02.m35m9mj.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-kjlr0u-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Error while connecting with the database", error.message)
    }
}

export default Connection