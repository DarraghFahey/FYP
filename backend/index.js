const express = require('express');
const cors = require('cors');
const knex = require('knex');
require('dotenv').config();

const db = knex({
    client: 'pg',
    connection: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE,
    },
});

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    db.select('*')
        .from('playstation_4_data')
        .where('metascore', '!=', 'No score yet')
        .orderBy('metascore', 'DESC')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/predictions/:uuid', (req, res) => {
    const uuid = req.params.uuid;
    db.select('*')
        .from('user_game_predictions')
        .where('uuid', '=', uuid)
        .orderBy('rating', 'DESC')
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});


app.get('/gameId/:ugid', (req, res) => {
    const ugid = req.params.ugid;
    db.select('*')
        .from('playstation_4_data')
        .where('ugid', '=', ugid)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/:gameName', (req, res) => {
    const gameName = req.params.gameName;
    db.select('*')
        .from('playstation_4_data')
        .where('title', '=', gameName)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/login/:email', (req, res) => {
    const email = req.params.email;
    db.select('*')
        .from('user_login_details')
        .where('email', '=', email,)
        .then((data) => {
            console.log(data);
            res.json(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post('/register', (req, res) => {
    const { uuid, email, password, name} = req.body;
    db('user_login_details')
        .insert({
            uuid: uuid,
            email: email,
            password: password,
            name: name,
        })
        .then(() => {
            console.log('New user added');
            return res.json({ msg: 'New user added' });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post('/addRating', (req, res) => {
    const { uuid, ugid, gameName, rating} = req.body;
    db('user_game_recomendations')
        .insert({
            uuid: uuid,
            ugid: ugid,
            game_name: gameName,
            rating: rating,
        })
        .then(() => {
            console.log('New rating added');
            return res.json({ msg: 'New rating added' });
        })
        .catch((err) => {
            console.log(err);
        });
});


const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}, http://localhost:${port}`));