
const asyncHandler=(reqestHandler)=>{
    (req,res,next)=>{
        Prmovise.resolve(reqestHandler(req,res,next)).
        catch((err)=>next(err))
    }

}
export default {asyncHandler}



