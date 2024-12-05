
# Selenium Web Scraping Script: Get Owenr Phone number from azovy

This guide provides a detailed explanation and step-by-step instructions for setting up and executing the Selenium script for interacting with the azovy gasy apps  Get Owenr Phone number

## Prerequisites

Before running the script, ensure you have:

- Node.js installed on your system
- Chrome browser installed
- The ChromeDriver executable compatible with your Chrome version
- Internet access to access the Vozona Gasy website

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

The following is the script used for web scraping. It uses Selenium WebDriver with Node.js and interacts with the Azovy  website.

```javascript
const { Builder, By, until } = require("selenium-webdriver");
require("chromedriver");
async function scrapeExample() {
  // Create a new instance of the Chrome browser
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    // Navigate to the website you want to scrape
    await driver.get("https://azovy.vercel.app/");

    // Wait for the page to load and for a specific element to be present
    await driver.wait(until.elementLocated(By.tagName("h1")), 10000);

    await driver.wait(until.elementLocated(By.id("phone_number")), 10000);

    // Locate the phone number input field
    let phoneNumberInput = await driver.findElement(By.id("phone_number"));

    // Clear the input field (optional) and enter the phone number
    await phoneNumberInput.clear(); // This ensures the field is cleared
    await phoneNumberInput.sendKeys("0343403434"); // Insert the phone number Ajus as needed

    // Optional: Wait for a short time to see the result
    await driver.sleep(4000);


    
    
    // Locate the submit button by its `type` attribute
    let submitButton = await driver.findElement(
      By.css('button[type="submit"]')
    );

    // Click the submit button
    await submitButton.click();

    // Wait for the specific element to appear
    let targetElementForOwnerName = await driver.wait(
      until.elementLocated(
        By.css(
          "#__nuxt > div.flex.min-h-screen.flex-col > main > section > div.flex.w-full.flex-col.items-center.py-8 > div > div > div.rounded-lg.border.bg-card.text-card-foreground.shadow-sm.mt-16 > div:nth-child(1) > div > div > p.text-md.font-medium.leading-none"
        )
      ),
      10000 // Timeout in milliseconds
    );
    if (targetElementForOwnerName) {
      // Optionally retrieve the text content of the element
      let ownerName = await targetElementForOwnerName.getText();
      console.log("Owner Name:", ownerName);

      // Locate the second element and get its text
      let targetElementForOperatorName = await driver.findElement(
        By.css(
          "#__nuxt > div.flex.min-h-screen.flex-col > main > section > div.flex.w-full.flex-col.items-center.py-8 > div > div > div.rounded-lg.border.bg-card.text-card-foreground.shadow-sm.mt-16 > div:nth-child(1) > div > div > p.text-sm.text-muted-foreground"
        )
      );
      let operatorName = await targetElementForOperatorName.getText();

      console.log("Operator Name:", operatorName);
    }else{
        console.log("Owner Name and Operator Name not found");
    }

    await driver.sleep(2000);
  } catch (e) {
    console.error(e);
  } finally {
    // Close the browser after the operation
    await driver.quit();
  }
}

scrapeExample();

```

---

## Step 4: Run the Script

Run the script by executing the following command in your terminal:

```bash
node script.js
```

Replace `script.js` with the actual file name where the above script is saved.

---

## Notes

- Ensure that ChromeDriver is installed and is in your system's PATH.
- Modify the script as needed if the website structure changes.
- Handle errors and timeouts to make the script robust.
