module.exports = (router, Words) =>{
  router.post('/search', async (req,res)=>{
    let word = await Words.findOne(req.body);
    if(!word)
      return res.status(404).json({message:"word not found"});
    else await res.status(200).json(word);
  })
  .post('/add',async (req,res)=>{
    var new_word = req.body;
    var result = await Words.findOne(new_word);
    if(!result){
      new_word = new Words(new_word);
      let word = await new_word.save();
      if(word){
        console.log('New Word! : ' + word);
        return res.status(200).json(word);
      }
    }
    else {
      console.log('Save Fail!');
      return res.status(412).json({message:"Save Fail..."});
    }
  });
  return router;
};
