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
  var elementsearch = await driver.findElement(By.xpath("//*[@id='ctl00_SmallSearchInputBox1_csr_sbox']"))
  elementsearch.clear();

  //#4  send a search query by passing the value in searchString.
  elementsearch.sendKeys(searchString, Key.RETURN);

  //Verify the page title and print it
  var title = await driver.getTitle();
  console.log('Title is:', title);

  //#4  send a search query by passing the value in searchString.
  var elementnextpage= await driver.findElement(By.id("PageLink_2"));
  elementnextpage.click();

  
//*[@id="PageLink_2"]

  //It is always a safe practice to quit the browser after execution
  //await driver.quit();

}

example()