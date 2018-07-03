const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
  /* 
    Define your user information fields for the schema here, DO NOT MAKE "username" and "password" fields, since passport will set those for you

    IF nothing else is put in here, your User collection will look like this automatically because of Passport...

    {
      "_id": ObjectId("5b3aeb21b8a16a4aa772836e"),
      "salt": "2ec720e0a978332f5cb9781341b456cd897a503e09eabd918359018a2b51957e",
      "hash": "63bb5d36fedb33be6948f3389fc6cbf3895a1c251b56058233786d100753aa9fb203ec0d46a432f0233131457be3f2c07c5961415b4fc50eff8d0e4f6e7d3dd66d462ed804a2c44a1d6c709794c700c4bb3b4e9566417b71656b3e669d44fd354dfbbc148f38475b4ab8b96a19ec156753237463c1dea7fb04b0e9de5fb9aba12858816c1e428d5be224f298baea2a9e166de29bcc8c4ba56f6cec672558d612a7862d300db0f4cff968e547db7567198ed8cefc5990cf4150a14abc8ea80b9be120225e69f389049d6227cecef8034ca37c5c8ba11cff253618af65fcac759473aa3ea80bb0ddde121f6369b4059ed0c5d802f910f5778b23d8a16ae694934f9b0890e4781af77d55520b03416b64d7196a79faf6354087d01959d3389e05bf138d98b32f6dff41351750c53d19df32be02705d7bd360b6d08057d0a16b74ebefbdc22da9025fc4e977def4459edaa6f4f549f159f7661166db42d0e18e54db50c45b49fca86fbdbed755c48b727fdbab62b78b96e71dcc0e344df0f1166b91a208348938f99fff58e444c4fa744702b5ceccf9406a8b8cdba3dca68e41e5c6d0fe6582580917e64734ca86189ed8674cc4a1fc6cebeb7f31f9a0f7f8a2b57597cd943e2585514e47a9acc0da6ac7e46c61c8a2611cf7f55eccdff4a516fdf88a108483b5698fa737fbb48502127ddc509362389d447b37832382f61a4f9d03",
      "username": "alex",
      "__v": 0
    }
  */
});

// Set up passport to 
User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);
