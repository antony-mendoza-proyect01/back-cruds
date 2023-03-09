import express, {Application, Request, Response} from 'express';
import routesDrivers from '../routes/driver';
import cors from 'cors'
import db from'../db/connection';


class Server {
 private app: express.Application;
 private port: string;

 constructor(){
 
    this.app = express();
    this.port= process.env.PORT || '3001';
    this.listen();
    this.midleware();
    this.routes();
    this.dbConnect();
 }
 listen(){
    this.app.listen(this.port, ()=>{
        console.log(`Aplicacion corriendo en el puerto ${this.port}`)
    })
 }

 routes(){
    this.app.get('/',(req: Request, res: Response)=>{
        res.json({
            msg:' API working'
        })
    })
   this.app.use('/api/drivers', routesDrivers)
 }
 midleware(){
    //parseamos el body
    this.app.use(express.json());
    //cors
    this.app.use(cors());
 }

 async dbConnect(){

try{
   await db.authenticate();
   console.log('Base de datos conectada')

}catch(error){
   console.log(error);
console.log('error al conectarse a la BD')
}

 }

}
export default Server; 