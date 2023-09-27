import express from "express";
const app: express.Application = express()
const cors = require('cors')
const db = require('./utils/db')
const authRouter = require('./routes/auth.routes')
const PORT: number = 3001

app.use(express.json())
app.use(cors())

app.use('/api/auth', authRouter)

const start = async () => {
    try {
        db.connect()

        app.listen(PORT, () => {
            console.log(`Express web-server has started on ${PORT} port`)
        })
    } catch (e) {
        console.error(e)
    }
}

start()

// app.get('/', (_req, _res) => {
//     _res.send('Hello world! This is nodejs backend with TypeScript!')
// })

// app.get('/posts', (_req, _res) => {
//     let posts: any;
//     db.query('SELECT * FROM public."Posts" as posts, public."Users" as users WHERE posts.user_id = users.uid;', (err: any, data: any) => {
//         if (err) console.error(err);
//         posts = data.rows
//         _res.json(posts)
//         // db.end();
//     });
// })