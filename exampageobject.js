

class exampageobject{

    //Scenario 1
    //This keywords is for Enter Vehicle Data Tab
    ErrorMsgifBlank(){
    cy.xpath('//span[@id="selectedinsurance"]/following::span[contains(text(),"7")][1]').should('have.text','7'); //validation for blank forms
    }
    AutomobileTab(){
    cy.get("a").contains('Automobile').click().wait(1000);}
    MakeDropdown(){
    cy.get('select[id="make"]').select('Nissan').should('have.value', 'Nissan');}
    EnginePerformance(){
    cy.get('input[id="engineperformance"]').type('245');}
    DateofManufacture(){
    cy.get('input[id="dateofmanufacture"]').type('03/17/2021');}
    NumberofSeats(){
    cy.get('select[id="numberofseats"]').select('6').should('have.value', '6');}
    Fueltype(){
    cy.get('select[name="Fuel Type"]').select('Petrol').should('have.value', 'Petrol');}
    ListPrice(){
    cy.get('input[id="listprice"]').type('29999');}
    LicensePlateNumber(){
    cy.get('input[id="licenseplatenumber"]').type('DNW360');}
    AnnualMileage(){
    cy.get('input[id="annualmileage"]').type('5000');}
    NextButton(){
    cy.get('button[id="nextenterinsurantdata"]').click();}
    //This Keywords is for Enter Insurance Data Tab
    ErrorMsgifBlank1(){
    cy.xpath('//span[@id="selectedinsurance"]/following::span[contains(text(),"7")][1]').should('have.text','7');} //validation for blank forms
    

    UrlValidation(){
    cy.url().should('include','app.php')}
    FirstName(){
    cy.get('input[id="firstname"]').type('Ryan');}
    LastName(){
    cy.get('input[id="lastname"]').type('Bang');}
    DateofBirth(){
    cy.get('input[id="birthdate"]').type('10/12/1990');}
    Gender(){
    cy.get('span[class="ideal-radio"]').first().click();}
    StreetAddress(){
    cy.get('#streetaddress').type('Hacksaw Ridge');   }
    Country(){
    cy.get('select[name="Country"]').select('United States').should('have.value', 'United States');   }
    ZipCode(){
    cy.get('#zipcode').type('2500');}
    City(){
    cy.get('#city').type('Peninsula');}
    Occupation(){
    cy.get('select[name="Occupation"]').select('Employee').should('have.value', 'Employee');}
    Hobbies(){
    cy.get('span[class="ideal-check"]').first().click();}
    Website(){
    cy.get('#website').type('www.google.com');}
    Picture(){
    cy.get('#picturecontainer').attachFile('car.jpg');}
    NextButtonInsurance(){
    cy.get('#nextenterproductdata').click();}
    PreviousButtonInsurance(){
    cy.get('#preventervehicledata').click();}

//This keywords is for Enter Product Data
    ErrorMsgifBlank2(){
    cy.xpath('//span[@id="selectedinsurance"]/following::span[contains(text(),"6")][1]').should('have.text','6');} //validation for blank forms
    StartDate(){
    cy.get('#startdate').type('10/12/2023');}
    InsuranceSum(){
    cy.get('#insurancesum').select('3000000').should('have.value', '3000000');}
    MeritRating(){
    cy.get('#meritrating').select('Bonus 4').should('have.value', 'Bonus 4');}
    DamageInsurance(){
    cy.get('#damageinsurance').select('Partial Coverage').should('have.value', 'Partial Coverage');}
    OptionalProducts(){
    cy.xpath('//label[contains(text(),"Optional Products")]/following::span[1]').click();}
    CourtesyCar(){
    cy.get('#courtesycar').select('Yes').should('have.value', 'Yes');}
    PreviousButtonProductData(){
    cy.get('#preventerinsurancedata').click();}
    NextProductData(){
    cy.get('#nextselectpriceoption').click();}

    //This keywords is for Select Price Option
    SilverRadioButton(){
    cy.xpath('//th[contains(text(),"Select Option")]/following::span[1]').click();} //Silver option
    GoldRadioButton(){
    cy.xpath('//th[contains(text(),"Select Option")]/following::span[2]').click();} //Gold option
    PlatinumRadioButton(){ 
    cy.xpath('//th[contains(text(),"Select Option")]/following::span[3]').click();} //Platinum option
    UltimateRadioButton(){
    cy.xpath('//th[contains(text(),"Select Option")]/following::span[4]').click();} //Ultimate option
    SelectAtLeast1Option(){ //Error validation when no radio button selected
    cy.xpath('//th[contains(text(),"Ultimate")]/following::span[@class="error"][1]');}  
    PreviousButtonSelectPriceOption(){ //Previous Button validation in select price tab
    cy.xpath('//button[@id="preventerproductdata"]').click();}
    NextButtonPriceQOption(){
    cy.xpath('//button[@id="nextsendquote"]').click();}

    //This Keywords is for send quote

    Email(){
    cy.xpath('//input[@id="email"]').type('testingdata@gmail.com');}
    Phone(){
    cy.xpath('//input[@id="phone"]').type('09267259043');}
    Username(){
    cy.xpath('//input[@id="username"]').type('testingdata');}
    Password(){
    cy.xpath('//input[@id="password"]').type('Test1ngdata!');}
    ConfirmPassword(){
    cy.xpath('//input[@id="confirmpassword"]').type('Test1ngdata!');}
    Comments(){
    cy.xpath('//textarea[@id="Comments"]').type('testingdata');}
    PreviousButtonSendQuote(){
    cy.xpath('//button[@id="prevselectpriceoption"]').click();}
    SendButton(){
    cy.xpath('//button[@id="sendemail"]').click();}
    SendingEmailSuccess(){
    cy.xpath('//h2[contains(text(),"Sending e-mail success!")]').should('have.value','Sending e-mail success!');}
    
    //Scenario 2
    //This keywords is for Enter Vehicle Data
    Truck(){
    cy.get("a").contains('Truck').click()}
    EnterVehicleAMValidation(){ 
    cy.xpath('//a[@id="nav_truck"]/following::span[contains(text(),"9")]').should('have.value','9');}
    MakeAM(){
    cy.get('select[name="Make"]').select('Honda').should('have.value', 'Honda');}
    EnginePowerAM(){
    cy.get('#engineperformance').type('452');}
    DateofManufactureAM(){
    cy.get('#dateofmanufacture').type('03/18/2019');}
    NumberofSeatsAM(){
    cy.get('select[name="Number of Seats"]').select('4').should('have.value', '4');}
    FuelTypeAM(){
    cy.get('select[name="Fuel Type"]').select('Gas').should('have.value', 'Gas');}
    PayloadAM(){
    cy.get('#payload').type('300');   }
    TotalWeightAM(){
    cy.get('#totalweight').type('3000');}
    ListPriceAM(){
    cy.get('#listprice').type('3000');}
    LicensePlateNumberAM(){
    cy.get('#licenseplatenumber').type('dnw360');}
    AnnualMilageAM(){
    cy.get('#annualmileage').type('3000');}
    NextButtonVehicleDataAM(){
    cy.get('#nextenterinsurantdata').click();}

    //This keywords is for Enter Insurant Data

    FirstNameAM(){
    cy.get('#firstname').type('Luis');}
    LasttNameAM(){
    cy.get('#lastname').type('Rocky');}
    DateofBirthAM(){
    cy.get('#birthdate').type('05/02/1990');}
    GenderAM(){
    cy.xpath('//input[@id="birthdate"]/following::span[@class="ideal-radio"][1]').click();}
    StreetAddressAM(){
    cy.get('#streetaddress').type('Test');}
    CountryAM(){
    cy.get('select[name="Country"]').select('Albania').should('have.value', 'Albania');}
    ZipCodeAM(){
    cy.get('#zipcode').type('2500');}
    CityAM(){
    cy.get('#city').type('Test');}
    OccupationAM(){
    cy.get('select[name="Occupation"]').select('Farmer').should('have.value', 'Farmer');}
    HobbiesAM(){
    cy.xpath('//input[@id="city"]/following::span[@class="ideal-check"][1]').click();}
    WebsiteAM(){
    cy.get('#website').type('www.google.com');}
    PictureAM(){
    cy.get('#picturecontainer').attachFile('car.jpg');}
    PreviousButtonInsuranceAM(){
    cy.get('#preventervehicledata').click();}
    NextButtonInsuranceAM(){
    cy.get('#nextenterproductdata').click();}

    //This keywords is for Enter Product Data

    StartDateAM(){
    cy.get('#startdate').type('05/11/2023');}
    InsuranceAM(){
    cy.get('select[name="Insurance Sum"]').select('3000000').should('have.value', '3000000');}
    DamageInsuranceAM(){
    cy.get('select[name="Damage Insurance"]').select('No Coverage').should('have.value', 'No Coverage');}
    OptionalProducts(){
    cy.xpath('//select[@id="damageinsurance"]/following::span[@class="ideal-check"][1]').click();}
    PreviousButtonProductDataAM(){
    cy.get('#preventerinsurancedata').click();}
    NextButtonProductDataAM() {
    cy.get('#nextselectpriceoption').click(); }

    //This keywords is for Select Price Option
    SilverAM(){
    cy.xpath('//input[@id="selectsilver"]/following::span[1]').click();}
    GoldAM(){
    cy.xpath('//input[@id="selectsilver"]/following::span[2]').click();}
    PlatinumAM(){
    cy.xpath('//input[@id="selectsilver"]/following::span[3]').click();}
    UltimateAM(){
    cy.xpath('//input[@id="selectsilver"]/following::span[4]').click();}
    PreviousButtonSelectPriceAM(){
    cy.get('#preventerproductdata').click();}
    NextButtonSelectPriceAM(){
    cy.get('#nextsendquote').click();}


    //This Keywords is for invalid Send Quote
    EmailAM1(){
    cy.xpath('//input[@id="email"]').type('test');}
    InvalidEmailError(){
    cy.xpath('//input[@id="email"]/following::span[@class="error"][1]').should('have.text','Must be at least a valid email format');}
    UserName1(){
    cy.xpath('//input[@id="username"]').type('tes');}
    InvalidUserNameError(){
    cy.xpath('//input[@id="email"]/following::span[@class="error"][3]').should('have.text','Must be between 4 and 32 characters long and start with a letter. You may use letters, numbers, underscores, and one dot');}
    Password1(){
    cy.xpath('//input[@id="password"]').type('t');}
    InvalidPasswordError(){
    cy.xpath('//input[@id="email"]/following::span[@class="error"][4]').should('have.text','Must be at least 6 characters long, and contain at least one number, one uppercase and one lowercase letter');}
    ConfirmPassword1(){
    cy.xpath('//input[@id="confirmpassword"]').type('a');}
    InvalidConfirmPasswordError(){
    cy.xpath('//input[@id="email"]/following::span[@class="error"][5]').should('have.text','Must have the same value as the Password field');}
    //This Keywords is for valid Send Quote
    EmailAM(){
    cy.xpath('//input[@id="email"]').type('testingdata@gmail.com');}
    PhoneAM(){
    cy.xpath('//input[@id="phone"]').type('09267259043');}
    UsernameAM(){
    cy.xpath('//input[@id="username"]').type('testingdata');}
    PasswordAM(){
    cy.xpath('//input[@id="password"]').clear().type('Test1ngdata!');}
    ConfirmPasswordAM(){
    cy.xpath('//input[@id="confirmpassword"]').clear().type('Test1ngdata!');}
    CommentsAM(){
    cy.xpath('//textarea[@id="Comments"]').type('testingdata');}
    PreviousButtonSendQuoteAM(){
    cy.xpath('//button[@id="prevselectpriceoption"]').click();}
    SendButtonAM(){
    cy.xpath('//button[@id="sendemail"]').click();}
    SendingEmailSuccessAM(){
    cy.wait(7000).xpath('//h2[contains(text(),"Sending e-mail success!")]').should('have.text','Sending e-mail success!');}
    

    //Scenario 3 MotorCycle
    //This keywords is for Enter Vehicle Data
    Motorcycle(){
    cy.get("a").contains('Motorcycle').click()}
    EnterVehicleAMValidationMC(){ 
    cy.xpath('//a[@id="nav_truck"]/following::span[contains(text(),"8")]').should('have.text','8');}
    MakeMC(){
    cy.get('select[name="Make"]');}
    MakeMCErrorValidation(){
    cy.xpath('//a[@id="nav_truck"]/following::span[contains(text(),"Select an option")][1]').should('have.text', 'Select an option');}   // Blank Make validation 
    
    ModelMC(){
    cy.get('select[name="Model"]');} 
    ModelMCErrorValidation(){
    cy.xpath('//a[@id="nav_truck"]/following::span[contains(text(),"Select an option")][2]').should('have.text', 'Select an option');} // Model Make validation

    //Invalid Data
    CylinderCapacity(){
    cy.get('#cylindercapacity').type('AA');   }
    CylinderCapacityErrorValidation(){
    cy.xpath('//select[@id="make"]/following::span[contains(text(),"Must be a number between 1 and 2000")][1]').should('have.text','Must be a number between 1 and 2000');}
    EnginePowerMC(){
    cy.get('#engineperformance').type('AA');}
    EnginePowerMCErrorValidation(){
    cy.xpath('//select[@id="make"]/following::span[contains(text(),"Must be a number between 1 and 2000")][2]').should('have.text','Must be a number between 1 and 2000');}  
    
    DateofManufactureMC(){
    cy.get('#dateofmanufacture');}
    DateofManufactureMCErrorValidation(){ //Date of Manufacture Error Msg
    cy.xpath('//select[@id="make"]/following::span[contains(text(),"This field is mandatory")][1]').should('have.text','This field is mandatory');}
    
    NumberofSeatsMC(){
    cy.get('select[name="Number of Seats Motorcycle"]');}
    NumberofSeatsMCErrorValidation(){
    cy.xpath('//select[@id="make"]/following::span[contains(text(),"Select an option")][3]').should('have.text','Select an option');}
    ListPriceMC(){
    cy.get('#listprice').type('AA');}
    ListPriceErrorMCValidation(){  //List of Price Error Msg

    cy.xpath('//select[@id="make"]/following::span[contains(text(),"Must be a number between 500 and 100000")][1]').should('have.text','Must be a number between 500 and 100000');}
    AnnualMilageMC(){
    cy.get('#annualmileage').type('AA');}
    AnnualMilageMCErrorValidation(){  //List of Price Error Msg
    
    cy.xpath('//select[@id="make"]/following::span[contains(text(),"Must be a number between 100 and 100000")][1]').should('have.text','Must be a number between 100 and 100000');}

    //Valid Data

    EnterVehicleAMValidationMC(){ 
    cy.xpath('//a[@id="nav_truck"]/following::span[contains(text(),"8")]').should('have.text','8');}
    MakeMCValid(){
    cy.get('select[name="Make"]').select('Audi').should('have.value', 'Audi');}
    ModelMCValid(){
    cy.get('select[name="Model"]').select('Motorcycle').should('have.value', 'Motorcycle');}

    CylinderCapacityValid(){
    cy.get('#cylindercapacity').clear().type('200');}
    EnginePowerMCValid(){
    cy.get('#engineperformance').clear().type('200');  }
    DateofManufactureMCValid(){
    cy.get('#dateofmanufacture').clear().type('03/01/2023');}   
    NumberofSeatsMCValid(){
    cy.get('select[name="Number of Seats Motorcycle"]').select('1').should('have.value', '1');}
    ListPriceMCValid(){
    cy.get('#listprice').clear().type('501');}
    AnnualMilageValid(){
    cy.get('#annualmileage').clear().type('501');}
    NextButtonVehicleDataMC(){
    cy.get('#nextenterinsurantdata').click();}

    //Enter Insurant Data
    //Invalid Data
    EnterVehicleAMValidationMC(){ 
    cy.xpath('//a[@id="nav_truck"]/following::span[contains(text(),"7")]').should('have.text','7')}
    FirstNameMC1(){
    cy.get('#firstname').type('12');}
    FirstNameErorMessageMC(){
    cy.xpath('//input[@id="firstname"]/following::span[contains(text(),"Must be at least 2 characters long and must only contain letters")][1]').should('have.text','Must be at least 2 characters long and must only contain letters');}
    LasttNameMC1(){
    cy.get('#lastname').type('12');}
    LastNameErrorValidationMC(){
    cy.xpath('//input[@id="lastname"]/following::span[contains(text(),"Must be at least 2 characters long and must only contain letters")][1]').should('have.text','Must be at least 2 characters long and must only contain letters');}
    DateofBirthMC1(){
    cy.get('#birthdate').type('1123');}
    DateofBirthErrorValidationMC(){
    cy.xpath('//input[@id="birthdate"]/following::span[contains(text(),"Must be a valid date")][1]').should('have.text','Must be a valid date ');}
    CountryMC1(){
    cy.get('select[name="Country"]').select('default').should('have.value', 'default');}
    CountryErrorValidationMC(){
    cy.xpath('//input[@id="birthdate"]/following::span[contains(text(),"Select an option")][1]').should('have.text','Select an option');}    
    ZipCodeMC1(){
    cy.get('#zipcode').type('aaa');}
    ZipCodeMCErrorValidationMC(){
    cy.xpath('//input[@id="zipcode"]/following::span[contains(text(),"Must be only digits")][1]').should('have.text','Must be only digits');}
    OccupationMC1(){
    cy.get('select[name="Occupation"]').select('default').should('have.value', 'default');}
    
    //Valid Data
    FirstNameMC(){
    cy.get('#firstname').clear().type('Luis');}
    LasttNameMC(){
    cy.get('#lastname').clear().type('Rocky');}
    DateofBirthMC(){
    cy.get('#birthdate').clear().type('05/02/1990');}
    GenderMC(){
    cy.xpath('//input[@id="birthdate"]/following::span[@class="ideal-radio"][1]').click();}
    StreetAddressMC(){
    cy.get('#streetaddress').clear().type('Test');}
    CountryMC(){
    cy.get('select[name="Country"]').select('Albania').should('have.value', 'Albania');}
    ZipCodeMC(){
    cy.get('#zipcode').clear().type('2500');}
    CityMC(){
    cy.get('#city').clear().type('Test');}
    OccupationMC(){
    cy.get('select[name="Occupation"]').select('Farmer').should('have.value', 'Farmer');}
    HobbiesMC(){
    cy.xpath('//input[@id="city"]/following::span[@class="ideal-check"][1]').click();}
    WebsiteMC(){
    cy.get('#website').clear().type('www.google.com');}
    PictureMC(){
    cy.get('#picturecontainer').attachFile('car.jpg');}
    PreviousButtonInsuranceMC(){
    cy.get('#preventervehicledata').click();}
    NextButtonInsuranceMC(){
    cy.get('#nextenterproductdata').click();}

    //This Keyword is Used for Enter Product Data
    //Invalid Data 
    StartDateMC1(){
    cy.get('#startdate').type('1111');}
    StartDateErrorValidationMC(){
    cy.xpath('//label[@class="main"]/following::span[contains(text(),"Must be a valid date ")]').should('contain.text','Must be a valid date ');}
    InsuranceMC1(){
    cy.get('select[name="Insurance Sum"]').select('default').should('have.value', 'default');}
    InsuranceSumValidationMC(){
    cy.xpath('//label[contains(text(),"Start Date")]/following::span[contains(text(),"Select an option")][1]').should('have.text','Select an option');}
    DamageInsuranceMC1(){
    cy.get('select[name="Damage Insurance"]').select('default').should('have.value', 'default');  }
    DamageInsuranceValidationMC(){
    cy.xpath('//label[contains(text(),"Start Date")]/following::span[contains(text(),"Select an option")][2]').should('have.text','Select an option');}

    //Valid Data
    StartDateMC(){
    cy.get('#startdate').clear().type('05/11/2023');}
    InsuranceMC(){
    cy.get('select[name="Insurance Sum"]').select('3000000').should('have.value', '3000000'); }
    DamageInsuranceMC(){
    cy.get('select[name="Damage Insurance"]').select('No Coverage').should('have.value', 'No Coverage');}
    OptionalProductsMC(){
    cy.xpath('//select[@id="damageinsurance"]/following::span[@class="ideal-check"][1]').click();}
    PreviousButtonProductDataMC(){
    cy.get('#preventerinsurancedata').click();}
    NextButtonProductDataMC(){
    cy.get('#nextselectpriceoption').click();}

    //This Keyword is Used for Select Price Option
    NextButtonProductDataMC(){
    cy.xpath('//input[@id="selectultimate"]/following::i[@class="fa fa-file-pdf-o"][1]').click({force: true} );}
    SelectErrorValidationMC(){
    cy.xpath('//input[@id="selectultimate"]/following::span[@class="error"][1]').should('have.text','Select at least 1 options').wait(7000);}
    SilverMC(){
    cy.xpath('//input[@id="selectsilver"]/following::span[1]').click();}
    GoldMC(){
    cy.xpath('//input[@id="selectsilver"]/following::span[2]').click();}
    PlatinumMC(){
    cy.xpath('//input[@id="selectsilver"]/following::span[3]').click();}
    UltimateMC(){
    cy.xpath('//input[@id="selectsilver"]/following::span[4]').click();}
    PreviousButtonSelectPriceMC(){
    cy.get('#preventerproductdata').click();}
    NextButtonSelectPriceMC(){
    cy.get('#nextsendquote').click();}














}

export default exampageobject;