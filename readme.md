
# Selenium Web Scraping Script: Get Owenr Phone number from azovy

This guide provides a detailed explanation and step-by-step instructions for setting up and executing the Selenium script for interacting with the azovy gasy apps  Get Owner Phone number

## Prerequisites

Before running the script, ensure you have:

- Node.js installed on your system


---
##  Privacy Policy
I am not responsible for all usage og this code, the user take the entire responsibility of his usage , on the way of getting this code and using this code you agree with the privacy policy


## Step 1: Clone the Repository

Run the following commands in your terminal to clone the project repository and navigate to the directory:

```bash
git clone https://github.com/raharinjatovo/scrapping-azovy.git
cd scrapping-azovy
```

---

## Step 2: Install Selenium Dependencies

Use `npm` to install the required Selenium WebDriver and related packages:

```bash
npm install
```

This will install all dependencies listed in the `package.json` file.

---

## Step 3: Review the Script

The following is the script used the apis of .  Node.js and interacts with the Azovy  apis.

```javascript
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


```

---

## Step 4: Run the Script

Run the script by executing the following command in your terminal:

```bash
node script.js
```

Replace `index.js` with the actual file name where the above script is saved.

---

