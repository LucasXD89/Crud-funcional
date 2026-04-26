const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use(express.json());

//=== HTML ===
app.use(express.static('public'));

//  Base de datos :)
const db = new sqlite3.Database('./colegio.db',(err) => {
    if(err) console.error(err.message);
    else console.log('Conectado a SQLite');
});

//Crear tabla :)
db.run(`CREATE TABLE IF NOT EXISTS productos (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    precio INTEGER,
    stock INTEGER
    )`);

// ------- CRUD ------- 
app.post('/productos',(req, res) => {
    const {nombre, precio, stock} = req.body;
    db.run(
        'INSERT INTO productos (nombre, precio, stock) VALUES (?,?,?)',
        [nombre, precio, stock],
        function(err){
            if(err)return res.status(500).send(err.message);
            res.send('Producto registrado');
        }
    );
});

//Read
app.get('/productos',(req, res) => {
    db.all('SELECT * FROM productos', [], (err,rows) => {
        if(err) return res.status(500).send(err.message);
        res.json(rows);
    });
});

//Read por ID
app.get('/productos/:id',(req,res) => {
    db.get('SELECT * FROM productos WHERE id=?', [req.params.id],(err,row) =>{
        if(err) return res.status(500).send(err.message);
        res.json(row);
    });
});

//Update
app.put('/productos/:id',(req,res) => {
    const{nombre,precio, stock} = req.body;
    db.run(
        'UPDATE productos SET nombre=?, precio=?, stock=? WHERE id=?',
        [nombre, precio, stock, req.params.id],
        function(err){
            if(err) return res.status(500).send(err.message);
            res.send('Producto actualizado');
        }
    );
});

//Delete
app.delete('/productos/:id', (req, res) => {
    db.run('DELETE FROM productos WHERE id=?', [req.params.id], function(err){
        if(err) return res.status(500).send(err.message);
        res.send('Producto eliminado');
    });
});

//Servidor
app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});