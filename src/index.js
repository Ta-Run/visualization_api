import connectDB from './connection/db.js'
import dotenv from 'dotenv'

dotenv.config({ path: './env' });
connectDB().then(() => app.listen(process.env.PORT || 8000, () => { 'server is running on port', process.env.PORT })).catch((err)=>err)


