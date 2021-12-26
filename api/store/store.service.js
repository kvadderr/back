const pool = require("../../config/database");


module.exports = {
    create: (data, callBack) => {
        pool.query(
          `insert into product(model, detail, articul, price, image, catalog, sex) 
                    values(?,?,?,?,?,?,?)`,
          [
            data.model,
            data.detail,
            data.articul,
            data.price,
            data.image,
            data.catalog,
            data.sex
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },

    remove: (id, callBack) => {
        pool.query(
          `DELETE from product WHERE id_product=?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
    update: (data, callBack) => {
        pool.query(
          `update product set model = ? , detail = ?, articul = ?, price = ?, image = ?, catalog = ?, sex=? WHERE id_product=?`,
          [
            data.model,
            data.detail,
            data.articul,
            data.price,
            data.image,
            data.catalog,
            data.sex,
            data.id
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
    getStoreProducts : callBack => {
        pool.query(
            `select * from product`,
            [],
            (error, results, fields) => {
              if (error) {
                callBack(error);
              }
              return callBack(null, results);
            }
          );
    }
}
