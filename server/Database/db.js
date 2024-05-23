import mongoose from "mongoose"

const Connection = async (username, password) => {
    const URL = `mongodb+srv://${username}:${password}@cluster0.ycqp7lt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try{
        await mongoose.connect(URL, { useNewUrlParser: true });
        console.log('Data base connected successfully');
    }
    catch(error){
        console.log('Error while connecting with the data base ', error);
    }
}

export default Connection;