const { By, Key, Builder } = require("selenium-webdriver");
require("chromedriver");

async function example() {

  var searchString = "Automation";

  //#1 build and launch properly
  let driver = await new Builder().forBrowser("chrome").build();

  //#2 navigate 
  await driver.get("https://pnu.edu.sa/ar/Pages/home.aspx");

  await driver.manage().window().maximize();

  //#3  get search element
  var element = await driver.findElement(By.xpath("//*[@id='ctl00_SmallSearchInputBox1_csr_sbox']"))
  element.clear();
  
  //#4  send a search query by passing the value in searchString.
  element.sendKeys(searchString, Key.RETURN);
  
  //Verify the page title and print it
  var title = await driver.getTitle();
  console.log('Title is:', title);

  //It is always a safe practice to quit the browser after execution
  //await driver.quit();

}

example()