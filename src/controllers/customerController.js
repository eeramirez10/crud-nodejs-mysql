const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM customer', (err, customers) => {
            if (err) {
                res.json(err);
            }
            res.render('customers', {
                data: customers
            });
        });
    });
};

controller.save = (req, res) => {
    
    const customer = req.body;

    if (customer.id === '') {
        //Cuando se agrega un nuevo registro

        const { name,address, phone } = customer;
        req.getConnection((err, conn) => {

            conn.query('INSERT INTO customer SET ?', { name,address, phone }, (err, result) => {
                if (err) {
                    res.json(err);
                }

                res.redirect('/');

                console.log('insertado correctamente', result);
            })
        })
    } else {
        //cuando se actualiza un registro
        req.getConnection((err, conn) => {

            conn.query(`UPDATE customer SET ? WHERE id = ${customer.id}` , customer,  (err, result) => {
                if (err) {
                    res.json(err);
                }

                res.redirect('/');

                console.log('actualizado', result);
            })
        })
    }



}


controller.delete = (req, res) => {
    const id = req.params.id;

    req.getConnection((err, conn) => {
        conn.query(`DELETE FROM customer WHERE ID = ?`, id, (err, result) => {
            if (err) {
                res.json(err);
            }

            res.redirect('/');

            console.log('Eliminado Correctamente', result);
        })
    })
}


controller.update = (req, res) => {
    console.log(req.body)
}



module.exports = controller;