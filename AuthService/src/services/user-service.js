const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { UserRepository } = require('../repository/index');
const { JWT_KEY } = require('../config/server-config');

const userRepository = new UserRepository();


class UserService{
    async create(data){
        try{
            const user = await userRepository.create(data);
            return user;
        }
        catch(error){
            console.log("some error in service layer");
            throw(error);
        }
    }

    async delete(userId){
        try{
            const response = await userRepository.delete(userId);
            return response;
        }
        catch(error){
            console.log("some error in service layer");
            throw(error);
        }
    }
    
    async sign(data){
        try{
            const user = await userRepository.getUserByEmail(data.email);
            if(!user){
                throw(Error("No user present with this emailId !"));
            }
            const response = bcrypt.compareSync(data.password, user.password);
            if(!response){
                throw(Error("Incorrect password !"));
            }
            const token = jwt.sign({userId:user.id}, JWT_KEY);
            return token;
        }
        catch(error){
            console.log("some error in service layer");
            throw(error);
        }
    }

    async isAuthenticated({ token }){
        try{
            const  data = jwt.verify(token, JWT_KEY);
            const user = await userRepository.getUserById(data.userId);
            if(!user)
                throw(Error("user not exist!"));

            return true;
        }
        catch(error){
            console.log("some error in service layer");
            throw(error);
        }
    }

}

module.exports = UserService;
