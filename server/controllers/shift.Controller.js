//will get the shifts from the database which will be added by the HR
module.exports.getShifts = async (req, res, next) => {
    try{
        const {user}= req;
        if(!user){
            return res.status(401).json({error: "Unauthorized access"});
        }
        const shifts = await shift.find({employee: user._id});
        return res.status(200).json({shifts});
    }
    catch(err){
        console.log(err);
        return res.status(500).json({error: "Internal server error"});
    }
};