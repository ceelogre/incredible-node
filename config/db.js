import mongoose from 'mongoose'

const connectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
mongoose.connect(process.env.Dev_DB, connectOptions, (err, res) => {
    if (err) console.error(err)
})