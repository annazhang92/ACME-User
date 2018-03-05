const Sequelize=require('sequelize');
const _conn =new Sequelize(process.env.DATABASE_URL);

const User = _conn.define('user',{
    name:Sequelize.STRING,
});

const sync=()=>{
    return _conn.sync({force:true});
};

const seed=()=>{
    return Promise.all([
        User.create({name: 'anna'}),
        User.create({name: 'max'})
    ]);
};

module.exports ={
    sync,
    seed,
    models:{
        User
    }
};