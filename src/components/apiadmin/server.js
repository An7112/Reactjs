const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./DB.js');
const productsRoute = require('./products.route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
    () => {console.log('Database is connected') },
    err => { console.log('Can not connect to the database'+ err)}
);

//chia sẻ tài nguyên chéo
app.use(cors());

//bodyParser trả về một function hoạt động như một middleware (phần mềm trung gian). Chức năng lắng nghe trên req.on (\'data\') và xây dựng req.body từ các đoạn dữ liệu mà nó nhận được.
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/products', productsRoute);


app.listen(PORT, function(){
    console.log('Server is running on Port:',PORT);
});