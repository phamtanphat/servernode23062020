const mongoose = require('mongoose');
mongoose.connect(
    'mongodb+srv://abc:pjoXIiwd1eYySgpr@cluster0.0djds.mongodb.net/servernode2306?retryWrites=true&w=majority',
    {useNewUrlParser: true, useUnifiedTopology: true}
);

const Word = mongoose.model('Word' , {
    en : {type : String , trim : true , unique : true , required : true , uppercase : true},
    vn : {type : String , trim : true , required : true , uppercase : true},
    isMemorized : {type : Boolean , default : false}
})

// Select
// Word.find({})
// .then(words => console.log(words))
// .catch(error => console.log(error))

// Insert
// const newWord = new Word({en : 'One' , vn : 'Mot'})
// newWord.save()
// .then(word => console.log(word))
// .catch(error => console.log(error))

// Delete
// Word.findByIdAndRemove('5f25725e5c720903b5235499')
// .then(word => console.log(word))
// .catch(error => console.log(error))

//Update
// Word.findByIdAndUpdate('5f2573898cfbe403dfc4f567',{isMemorized : true},{new : true})
// .then(word => console.log(word))
// .catch(error => console.log(error))


