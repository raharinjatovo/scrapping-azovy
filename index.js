
const getWhois = require('./sources/functions')
const onPhoneNumber = new getWhois();

(async()=>{
  try {
    const response = await onPhoneNumber.getInfos('0343403434');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
 
})()
