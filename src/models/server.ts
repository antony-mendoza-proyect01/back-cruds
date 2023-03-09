import express, {Application, Request, Response} from 'express';
import routesDrivers from '../routes/driver';

class Server {
 private app: express.Application;
 private port: string;

 constructor(){
 
    this.app = express();
    this.port= process.env.PORT || '3001';
    this.listen();
    this.midleware();
    this.routes();
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
    this.app.use(express.json());;
 }

}
export default Server; 