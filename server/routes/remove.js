module.exports = function(db, app, ObjectID) {
    app.post('/api/delete', function(req, res) {
        if (!req.body) {
            return res.sendStatus(400);
        }
        product = req.body;
        var objectid = new ObjectID(product.productid);
        const collection = db.collection('products')
        collection.deleteOne({_id: objectid}, (err, docs) => {
            collection.find({}).toArray((err, data) => {
                if (err) throw err;
                res.send(data);
            });
        });
    });
}