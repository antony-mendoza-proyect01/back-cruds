import {DataTypes } from'sequelize';
import  db from '../db/connection';

const Driver = db.define('driver', {

    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
   },
    lastname: {
        type: DataTypes.STRING
    },
    firstname:
    {
        type: DataTypes.STRING
    },
    ssd : 
    {
        type: DataTypes.STRING
    },
    address:
    {
        type: DataTypes.STRING
    },
    city: 
    {
        type: DataTypes.STRING
    },
    phone: 
    {
        type: DataTypes.INTEGER
    },
},
{
    createdAt:false,
    updatedAt: false
});

export default Driver;