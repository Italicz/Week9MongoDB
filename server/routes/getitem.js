module.exports = function(db, app, ObjectID) {
    app.post('/api/getitem', function(req, res) {
        if (!req.body) {
            return res.sendStatus(400)
        }
        product = req.body
        var objectid = new ObjectID(product.id)
        const collection = db.collection('products');
        collection.findOne({_id:objectid}, function(err, data) {
            if (err) throw err;
            console.log(data)
            res.send(data)
        })
    })
}