import mongoose from "mongoose";
import { DB_NAME } from "../constsant.js";

const connectDB = async () => {
    try {

        const connectionInstance = await mongoose.connect(`${process.env.LOCAL_URL}/${DB_NAME}`)
        console.log((`\n MongoDB connect !! DB HOST:${connectionInstance.connection.host}`))
    } catch (err) {
        console.log('err', err)
        process.exit(1)

    }
}

export default connectDB