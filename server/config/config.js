//Puerto
process.env.PORT = process.env.PORT || 3000;

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

let urlDB;

if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://Ralmtz:ChzOVpaZbLCprwoI@cluster0-jikn6.mongodb.net/cafe?retryWrites=true';
}

process.env.URLDB = urlDB;