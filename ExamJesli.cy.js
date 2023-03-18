import exampageobject from "../pageobject/exampageobject.js"
describe('Cypress Examination', () => {
   


   //Scenario 1
   //Run Enter Vehicle Script
    it('Scenario 1, Auotomobile Page Validation', () => {
    const PO=new exampageobject();
    cy.fixture('examfixture.json').then(user=> {
    
        
    cy.visit(user.url)
    PO.AutomobileTab();
    PO.ErrorMsgifBlank(); //validation for blank forms
    PO.MakeDropdown();
    PO.EnginePerformance();
    PO.DateofManufacture();
    PO.NumberofSeats();
    PO.Fueltype();
    PO.ListPrice();
    PO.LicensePlateNumber();
    PO.AnnualMileage();
    PO.NextButton();

    //Run Enter Insurant Data Script
    PO.ErrorMsgifBlank1(); //validation for blank forms
    PO.FirstName();
    PO.LastName();
    PO.DateofBirth();
    PO.Gender();
    PO.StreetAddress();
    PO.Country();
    PO.ZipCode();
    PO.City();
    PO.Occupation();
    PO.Hobbies();
    PO.Website();
    PO.Picture();
    PO.PreviousButtonInsurance(); //Validate Previous Button
    PO.NextButton();
    PO.NextButtonInsurance();

    //Run Product Data Script
    PO.ErrorMsgifBlank2(); //validation for blank forms
    PO.StartDate();
    PO.InsuranceSum();
    PO.MeritRating();
    PO.DamageInsurance();
    PO.OptionalProducts();
    PO.CourtesyCar();
    PO.PreviousButtonProductData(); //Validate Previous Button
    PO.NextButtonInsurance();
    PO.NextProductData();
    PO.SilverRadioButton();
    PO.GoldRadioButton();
    PO.PlatinumRadioButton();
    PO.UltimateRadioButton();
    PO.PreviousButtonSelectPriceOption();
    PO.NextProductData();
    PO.NextButtonPriceQOption();

    //Run Send Quote Tab
    
    PO.PreviousButtonSendQuote();
    PO.NextButtonPriceQOption();
    PO.Email();
    PO.Phone();
    PO.Username();
    PO.Password();
    PO.ConfirmPassword();
    PO.Comments();
    PO.SendButton();
    
})
})
//Scenario 2
    it('Scenario 2, Truck Page Validation', () => {
        cy.fixture('examfixture.json').then(user=> {
        const PO=new exampageobject();
        cy.visit(user.url);
        
        // Run Enter Vehicle Data
        PO.Truck();
        PO.MakeAM();
        PO.EnginePowerAM();
        PO.DateofManufactureAM();
        PO.NumberofSeatsAM();
        PO.FuelTypeAM();
        PO.FuelTypeAM();
        PO.PayloadAM();
        PO.TotalWeightAM();
        PO.ListPriceAM();
        PO.LicensePlateNumberAM();
        PO.AnnualMilageAM();
        PO.NextButtonVehicleDataAM();

        //Run Enter Insurant Data
        PO.FirstNameAM();
        PO.LasttNameAM();
        PO.DateofBirthAM();
        PO.GenderAM();
        PO.StreetAddressAM();
        PO.GenderAM();
        PO.StreetAddressAM();
        PO.CountryAM();
        PO.ZipCodeAM();
        PO.CityAM();
        PO.OccupationAM();
        PO.HobbiesAM();
        PO.WebsiteAM();
        PO.PictureAM();
        PO.PreviousButtonInsuranceAM();
        PO.NextButtonVehicleDataAM();
        PO.NextButtonInsuranceAM();

        //Run Enter Product Data
        PO.StartDateAM();
        PO.InsuranceAM();
        PO.DamageInsuranceAM();
        PO.OptionalProducts();
        PO.PreviousButtonProductDataAM();
        PO.NextButtonInsuranceAM();
        PO.NextButtonProductDataAM();    
         
        //Run Enter Product Data
        PO.PreviousButtonSelectPriceAM();
        PO.NextButtonProductDataAM();
        PO.SilverAM();
        PO.GoldAM();
        PO.PlatinumAM();
        PO.UltimateAM();
        PO.NextButtonSelectPriceAM();

        //Run Send Quote Tab
    
        //Invalid Data
        PO.PreviousButtonSendQuote();
        PO.NextButtonPriceQOption();
        PO.EmailAM1();
        PO.InvalidEmailError(); //invalid Email Validation
        PO.UserName1();
        PO.InvalidUserNameError(); //invalid UserName Validation
        PO.Password1();
        PO.InvalidPasswordError(); //invalid Password Validation
        PO.ConfirmPassword1(); 
        PO.InvalidConfirmPasswordError(); //invalid Confirm Password Validation

        //Entering a Valid Data on the Send Quota Page
        PO.EmailAM(); 
        PO.Phone();
        PO.Username();
        PO.PasswordAM();
        PO.ConfirmPasswordAM();
        PO.Comments();
        PO.SendButton();
        PO.SendingEmailSuccessAM(); //Validation of Sending Email Sucess  


    })
})
//Scenario 3
    it('Scenario 3, Motorcycle Page Validation', () => {
        cy.fixture('examfixture.json').then(user=> {
        const PO=new exampageobject();
        cy.visit(user.url);
        
        //Enter Vehicle Data
        //Invalid Data 
        PO.Motorcycle();
        PO.EnterVehicleAMValidationMC(); // Blank Forms Validation
        PO.MakeMC();
        PO.MakeMCErrorValidation(); //Blank Make Validation
        PO.ModelMC();
        PO.ModelMCErrorValidation();
        PO.CylinderCapacity();
        PO.CylinderCapacityErrorValidation();
        PO.EnginePowerMC();
        PO.EnginePowerMCErrorValidation();
        PO.DateofManufactureMC();
        PO.DateofManufactureMCErrorValidation();
        PO.NumberofSeatsMC();
        PO.NumberofSeatsMCErrorValidation();
        PO.ListPriceMC();
        PO.ListPriceErrorMCValidation();
        PO.AnnualMilageMC();
        PO.AnnualMilageMCErrorValidation();

        //Valid Data Script
        PO.MakeMCValid();
        PO.ModelMCValid();
        PO.CylinderCapacityValid();
        PO.EnginePowerMCValid();
        PO.DateofManufactureMCValid();
        PO.NumberofSeatsMCValid();
        PO.ListPriceMCValid();
        PO.AnnualMilageValid();
        PO.NextButtonVehicleDataMC();

        //Enter Insurant Data Script
        //Invalid Data 
        
        PO.FirstNameMC1();
        PO.FirstNameErorMessageMC();
        PO.LasttNameMC1();
        PO.LastNameErrorValidationMC();
        PO.DateofBirthMC1();
        PO.DateofBirthErrorValidationMC();
        PO.CountryMC1();
        PO.CountryErrorValidationMC();
        PO.ZipCodeMC1();
        PO.ZipCodeMCErrorValidationMC();
        PO.OccupationMC1();
        PO.DateofManufactureMCErrorValidation();
        //Valid Data
        PO.FirstNameMC();
        PO.LasttNameMC();
        PO.DateofBirthMC();
        PO.GenderMC();
        PO.StreetAddressMC();
        PO.CountryMC();
        PO.ZipCodeMC();
        PO.CityMC();
        PO.OccupationMC();
        PO.HobbiesMC();
        PO.WebsiteMC();
        PO.PictureMC();
        PO.PreviousButtonInsuranceMC();
        PO.NextButtonVehicleDataMC();
        PO.NextButtonInsuranceMC();

        //Enter Product Data
        //Invalid Data
        PO.StartDateMC1();
        PO.StartDateErrorValidationMC();
        PO.InsuranceMC1();
        PO.InsuranceSumValidationMC();
        PO.DamageInsuranceMC1();
        PO.DamageInsuranceValidationMC();
        //Valid Data
        PO.StartDateMC();
        PO.InsuranceMC();
        PO.DamageInsuranceMC();
        PO.OptionalProductsMC();
        PO.PreviousButtonProductDataMC();
        PO.NextButtonInsuranceMC();
        PO.NextButtonProductDataMC();
        
        //Select Price Option
        PO.SelectErrorValidationMC();
        PO.SilverMC();
        PO.GoldMC();
        PO.PlatinumMC();
        PO.UltimateMC();
        PO.NextButtonSelectPriceMC();

        //Invalid Data
        //Send Quote
        PO.EmailAM1();
        PO.InvalidEmailError(); //invalid Email Validation
        PO.UserName1();
        PO.InvalidUserNameError(); //invalid UserName Validation
        PO.Password1();
        PO.InvalidPasswordError(); //invalid Password Validation
        PO.ConfirmPassword1(); 
        PO.InvalidConfirmPasswordError(); //invalid Confirm Password Validation

        //Valid Data
        PO.EmailAM();
        PO.Phone();
        PO.Username();
        PO.PasswordAM();
        PO.ConfirmPasswordAM();
        PO.Comments();
        PO.SendButton();
        PO.SendingEmailSuccessAM(); //Validation of Sending Email Sucess  
        
        //end of script

    })
})
})