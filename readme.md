
# Selenium Web Scraping Script: Get Owenr Phone number from azovy

This guide provides a detailed explanation and step-by-step instructions for setting up and executing the Selenium script for interacting with the azovy gasy apps  Get Owenr Phone number

## Prerequisites

Before running the script, ensure you have:

- Node.js installed on your system
- Chrome browser installed
- The ChromeDriver executable compatible with your Chrome version
- Internet access to access the Vozona Gasy website

---

## Step 1: Clone the Repository

Run the following commands in your terminal to clone the project repository and navigate to the directory:

```bash
git clone https://github.com/raharinjatovo/scrapping-vozona-gasy.git
cd scrapping-vozona-gasy
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

The following is the script used for web scraping. It uses Selenium WebDriver with Node.js and interacts with the Vozona Gasy website.

```javascript
const { Builder, By, until } = require('selenium-webdriver');
require('chromedriver');

async function scrapeExample() {
  // Create a new instance of the Chrome browser
  let driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigate to the website you want to scrape
    await driver.get('https://vozonagasy.vercel.app/');

    // Wait for the page to load and for a specific element to be present
    await driver.wait(until.elementLocated(By.tagName('h1')), 10000);

    // Wait for the page to load and for the <textarea> with the specific placeholder to be available
    await driver.wait(until.elementLocated(By.css('textarea[placeholder="Entrez un texte à traduire"]')), 10000);

    // Locate the <textarea> by its placeholder attribute
    const textarea = await driver.findElement(By.css('textarea[placeholder="Entrez un texte à traduire"]'));
    
    // Clear the textarea (optional, in case there is already text in it)
    await textarea.clear();

    // Insert text into the textarea
    await textarea.sendKeys('Hello, this is the text I want to translate!');
    // Wait for the button with class 'buttonSend' to be available
    const buttonSend = await driver.wait(until.elementLocated(By.className('buttonSend')), 10000);

    // Click the button to submit or trigger the action
    await buttonSend.click();

     // Wait for the child element with class 'text-white-50' inside 'mt-4 p-4 rounded' to be present
     const textElement = await driver.wait(
        until.elementLocated(By.css('.mt-4.p-4.rounded .text-white-50')), 10000
     );
  
      // Extract the text from the element
      const extractedText = await textElement.getText();
      console.log('Extracted text:', extractedText);
  
      // Optional: wait a moment to see the action performed
      await driver.sleep(2000);  // Sleep for 2 seconds for visualization
   
    // You can add more scraping logic for other elements
   
    
  } catch (error) {
    console.log('Error occurred:', error);
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
