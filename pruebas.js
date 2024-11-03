import { getconnection, mssql } from './Conexion.js';

const  getProducts = async() => {
    try {
         const pool = await getconnection();
         const resultado = await pool.request().query("SELECT ID, NOMBRE, PRECIO, IVA FROM PRODUCTO")
         console.log(resultado);
         console.log("Listado de productos");
        } catch (error) {
        console.log(error);
    }
}


const  insertProducts = async() => {
    try {
         const pool = await getconnection();
         const resultado = await pool
         .request()
         .input("NOMBRE", mssql.VarChar, "Calculadora")
         .input("PRECIO", mssql.Money, 600)
         .input("IVA", mssql.Float, 10)
         .query("insert into PRODUCTO (NOMBRE, PRECIO, IVA)"
            +  " VALUES (@NOMBRE, @PRECIO, @IVA)");
         console.log(resultado);
         console.log("Ingreso productos");
        } catch (error) {
        console.log(error);
    }
}
getProducts();
insertProducts();
getProducts();

