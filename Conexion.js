import mssql from 'mssql'

const connectionSettings = {
  server: "192.168.100.3\\CURLING",
  database: "CAFETERIA",
  user: "sa",
  password: "sa",
  options: {  // Cambiado de option a options
      trustedConnection: true,  // Autenticación de Windows
      encrypt: false,  // Si estás usando un certificado SSL, ponlo en true
      trustServerCertificate: true,
      enableArithAbort: true
  }
};


export async function getconnection() {
   try {
  //  console.log("Exito");
     return await mssql.connect(connectionSettings);
      
   } catch (error) {
    console.error("Error al conectar a la base de datos", error);
   }
}

//saludos("MArio")
//getconnection();
export { mssql};

