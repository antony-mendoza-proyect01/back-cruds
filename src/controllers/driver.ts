import {Request,Response} from 'express'
import Driver from '../models/driver'


export const getDrivers = async (req:Request, res:Response )=>{
   const listDriver = await Driver.findAll()

    res.json(listDriver)
}

export const getDriver =  async (req:Request, res:Response )=>{

const{id} =req.params;
const driver = await Driver.findByPk(id)

if(driver){
    res.json(driver)
}else{
    res.status(404).json({
        msg:`No Existe un drive con el id ${id}`
    })
}}

export const deleteDriver=  async (req:Request, res:Response )=>{

    const{id} =req.params;
    const driver = await Driver.findByPk(id)
    
    if(!driver){
        res.status(404).json({
            msg:`No Existe un drive con el id ${id}`
        })
    }else{

      await driver.destroy();
      res.json({
        msg: 'El producto fue eliminado exitosamente'
      })
    }}
      

    export const postDriver=  async (req:Request, res:Response )=>{
        const{body} =req;
        
        try{
            await  Driver.create(body)
            res.json({
              msg: 'Drive Agregado con exito'
            })
        }catch(error){
            console.log(error);
            res.json({
                msg:"Upps Ocurrio un error, Comuniquese con soporte"
            })

        }
    }

        export const putDriver=  async (req:Request, res:Response )=>{
            const{id} =req.params;
            const{body} =req;
            const driver = await Driver.findByPk(id)

            try{
                if(driver){
                    await  driver.update(body);
                      res.json({
                          msg:  "El producto fue actualizado con exito!"
                      })
                  }else{
                      res.status(404).json({
                          msg:`No Existe un drive con el id ${id}` 
                      })
                   }
            }catch(error) {
                res.json({
                    msg:"Upps Ocurrio un error, Comuniquese con soporte"
                })
            }
 }