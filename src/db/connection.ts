import { Sequelize} from 'sequelize'


const sequelize = new Sequelize('flotavehiculos', 'root', '12345',{
    host: 'localhost',
    dialect: 'mysql',
    logging: false
});

export default sequelize