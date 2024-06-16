import mongoose , {Schema} from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"

const userSchema = new Schema(
    {
    username : {
        type: String,
        required :true,
        lowercase : true,
        unique : true,
        trim: true,
        index: true
    },
    email : {
        type: String,
        required :true,
        lowercase : true,
        unique : true,
        trim: true,
    },
    fullName : {
        type: String,
        required :true,
        lowercase : true,
        trim: true,
        index: true
    },
    avatar : { 
        type:String,
        required :  true
    },
    coverImage : 
    {
        type: String
    },

    watchHistory : [
        {
            type : Schema.Types.ObjectID,
            ref : "Video"
        }],

    password: {
            type :  String,
            required :  [true, "Please enter pass"]
        },
    refreshToken: {
        type: String
    }
}, 
{
    timestamps : true
}
)


userSchema.pre("save", async function (next){
    if(!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password ,10)
    next();
})

userSchema.methods.isPasswordMatched = async function (password)
{
    return bcrypt.compare(password, this.password)
}

userSchema.methods.genrateAccessToken =  function ()
{
    return jwt.sign(
        {
        _id : this._id,
        email : this.email,
        userName : this.userName,
        fullName : this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

userSchema.methods.genrateRefreshToken =  function ()
{
    return jwt.sign(
        {
        _id : this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const User = mongoose.model("User", userSchema)