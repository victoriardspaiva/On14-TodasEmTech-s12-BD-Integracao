const app = require("./src/app")
// require('dotenv-safe').config()
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Reprograma Music rodando na porta ${PORT}`))