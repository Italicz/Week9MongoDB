module.exports = function(db, app) {
    app.get('/api/getList', function(req, res) {
        const collection = db.collection('products')
        collection.find({}).toArray((err, data) => {
            if (err) throw err;
            res.send(data)
        });
    });
}