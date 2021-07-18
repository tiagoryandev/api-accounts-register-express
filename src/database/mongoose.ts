import colors from "colors";
import mongoose from "mongoose";

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true
}).then(() => console.log(colors.yellow("[DATABASE] - Banco de Dados Conectado com Sucesso!")))
    .catch(err => {
        console.log(colors.red("[DATABASE] - Ocorreu um Problema ao Conectar com Banco de Dados!\n Erro: " + err.message));
        process.exit();
    });