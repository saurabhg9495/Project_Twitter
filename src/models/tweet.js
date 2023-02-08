const mongoose=require('mongoose');

const tweetScema=new mongoose.Schema({
    content:{ 
        type:String,
        required:true,
        max:[255,'The word limit is exceeded'],
    },
    hashtags:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Hashtag',
    }]
},{timestamps:true});

const Tweet=mongoose.model('Tweet',tweetScema);
module.exports=Tweet;