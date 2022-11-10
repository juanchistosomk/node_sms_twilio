const randomNumber = require('random-number-csprng');
const dotenv = require('dotenv');

dotenv.config()

const sendSMS = async () => {
// Download the helper library from https://www.twilio.com/docs/node/install
                     // Find your Account SID and Auth Token in Account Info and set the environment variables.
                     // See http://twil.io/secure
                     const accountSid = process.env.TWILIO_ACCOUNT_SID;
                     const authToken = process.env.TWILIO_AUTH_TOKEN;
                     const client = require('twilio')(accountSid, authToken);
                     let numRand= await randomNumber(100000, 300000).then((number)=> { console.log(number); return number; });
                     console.log("Random: ", numRand);  
                     client.messages 
                      .create({body: '\n¡Hola! Esto es una Prueba de SMS enviada por JK. Código generado es: '+numRand+' , www.ejemplo.com', from: '+12342353417', to: '+573028573299'})
                      .then(message => console.log("😎💌 ",message.sid))
                      .catch(err => console.log(err));
};

sendSMS();

                