const { Booking } = require('../models/index');
const { AppError,ValidationError } = require('../utils/errors/index');

class BookingRepository {

    async create(data){
        try{
            const result = await Booking.create(data);
            return result;
        }
        catch(error){
            if(error.name == "SequelizeValidationError" ||
               error.name == 'SequelizeUniqueConstraintError'
            ){
                let explanation = [];
                error.errors.forEach((err)=>{
                    explanation.push(err.message);
                });

                throw( new ValidationError({
                    message: "Invalid Atributes !",
                    explanation
                }));
            }
            
            console.log("some Error in repository Layer ");
            throw(
                new AppError()
            );
        }
    }

    async update(bookingId, data){
        try{
            const result = await this.get(bookingId);
            await result.update(data);
            await result.save();
            return result;
        }
        catch(error){
            console.log("some Error in repository Layer ");
            throw(
                new AppError()
            );
        }
    }

    async get(bookingId){
        try{
            const booking = await Booking.findByPk(bookingId);
            if(!booking){
                throw(
                    new ValidationError({
                        message:"Invalid Booking ID !",
                        explanation: "No booking exist With this BookigID !"
                    })
                );
            }
            return booking;
        }
        catch(error){
            if(error.name=="ValidationError")
                throw(error);

            console.log("some Error in repository Layer ");
            throw(
                new AppError()
            );
        }
    }


    async delete(bookingId){
        try{
            const result = await Booking.destroy(bookingId);
            return result;
        }
        catch(error){
            console.log("some Error in repository Layer ");
            throw(
                new AppError()
            );
        }
    }

    async getAll(filter){
        try{
            const result = await Booking.findAll(filter);
            return result;
        }
        catch(error){
            console.log("some Error in repository Layer ");
            throw(
                new AppError()
            );
        }
    }

}

module.exports = BookingRepository;