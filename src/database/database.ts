import mongoose from 'mongoose';

mongoose.connect(process.env.mongoDB,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})
    .then( db => {
        console.log('Mongoose is connected');
    })
    .catch( err => {
        console.log(err);
    });

module.exports = mongoose;
