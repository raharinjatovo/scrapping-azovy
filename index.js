const axios = require('axios');
let data = JSON.stringify({
  "phone_number": "0343403434"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'https://azovy.vercel.app/api/whois',
  headers: { 
    'Content-Type': 'application/json'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});
