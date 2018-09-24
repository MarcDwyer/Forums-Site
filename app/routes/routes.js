const ObjectId = require('mongodb').ObjectID;

module.exports = function(app, db) {
    app.get('/api/data', (req, res) => {
        db.collection('data').find({}).toArray((err, result) => {
            if (err) {
                res.send({'error': 'error has occured'})
            } else {
                res.send(result)
        }
})
})
    app.post('/api/create', (req, res) => {
        const obj = { title: req.body.title, body: req.body.body};
         db.collection('data').insert(req.body, (err, result) => {
            if (err) {
                res.send({'error': 'error has occured'})
            } else {
                res.send(result.ops[0])
        }
})
})
app.get('/api/find', (req, res) => {
    let param = req.query._id;
    
     db.collection('data').findOne({'_id' : ObjectId(param)}, (err, result) => {
        if (err) {
            res.send({'error': 'error has occured'})
        } else {
            res.send(result)
    }
})
})
};