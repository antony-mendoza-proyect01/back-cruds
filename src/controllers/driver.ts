import {Request,Response} from 'express'


export const getDrivers = (req:Request, res:Response )=>{

    res.json({
        msg: 'Get Drivers'
    })
}

export const getDriver= (req:Request, res:Response )=>{

const{id} =req.params;

    res.json({
        msg: 'Get Driver',
         id
    })
}

export const deleteDriver= (req:Request, res:Response )=>{

    const{id} =req.params;
    
        res.json({
            msg: 'Delete Driver',
             id
        })
    }

    export const postDriver= (req:Request, res:Response )=>{

        const{body} =req;
        
        
            res.json({
                msg: 'Post Driver',
                body
            })
        }
        export const putDriver= (req:Request, res:Response )=>{
            const{id} =req.params;
            const{body} =req;
            
                res.json({
                    msg: 'Update Driver',
                    id,
                    body
                })
            }