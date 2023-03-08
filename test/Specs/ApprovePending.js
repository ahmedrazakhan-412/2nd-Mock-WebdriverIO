
import HomePage from "../PageObject/HomePage.js"
import OpenAccountPage from "../PageObject/OpenAccountPage.js"
import ConfirmPage from "../PageObject/ConfirmPage.js"
import StaffLoginPage from "../PageObject/StaffLoginPage.js"
import StaffHomePage from "../PageObject/StaffHomePage.js"
import ApprovePendingPage from "../PageObject/ApprovePendingPage.js"
import ActiveCustomerPage from "../PageObject/ActiveCustomerPage.js"

/*Open the browser and application
  click on open account link
  Enter all the valid details and click on submit
  Capture the application number generated in the popup 
  click on ok in the popup
  click on staff login and enter the login details
  click on approve pending in staff home page
  Enter the application number and click on search 
  click on approve to generate account number
  capture the account number from alert popup and accept it
*/

describe("Online Banking",async()=>{
     let ApplicationNo
     let AccountNum=11

    it("navigate to application",async ()=>{
        await browser.maximizeWindow()
        await browser.url("http://testingserver/domain/Online_Banking_System/")
        let title=await browser.getTitle()
        expect(title).to.equal("Online Banking System")
    })
      it("click on openAccount",async ()=>{
        await HomePage.clickOnOpenAccount_link()
        let title=await browser.getTitle();
        expect(title).to.include("Registration Form")
    })
      it("Enter all the valid details",async ()=>{
        await OpenAccountPage.validDetails()
    })
      it("click on submit",async ()=>{
        await OpenAccountPage.clickOnSubmit_btn()
    })
      it("confirm",async ()=>{
        let title=await browser.getTitle();
        expect(title).to.equal("Confirm")
        await ConfirmPage.clickOnConfirm_btn()
        await ConfirmPage.isAlertPresent()
        ApplicationNo= await ConfirmPage.capture_ApplicationNo()
        console.log("Application_Number ="+ApplicationNo);
    })
      it("click on staffLogin",async ()=>{
        await HomePage.clickOnStaffLogin_link()
        expect(await browser.getTitle()).to.include("Staff Page")
    })
    it("Navigate to StaffLogin Page",async ()=>{
        await StaffLoginPage.StaffLogin_details()
        let title=await browser.getTitle();
        expect(title).to.equal("Staff Home")
      })
    
    it("click on approve pending",async ()=>{
        await StaffHomePage.clickOnApprovePending_btn()
        expect(await browser.getTitle()).to.equal("Pending Customers")
        await ApprovePendingPage.searchApplication_Approve(Applicationo)
        AccountNum=await ApprovePendingPage.capture_AccountNumber()
        console.log("Account number ="+AccountNum);
      })

    it("Navigate to staff Homepage",async ()=>{
        await StaffHomePage.clickOnStaff_home_link()
        expect(await browser.getUrl()).to.include("staff_profile.php")
      })
      
    it("click on active customer",async ()=>{
        await StaffHomePage.clickOnActiveCustomer_btn()
        expect(await browser.getUrl()).to.include("active_customers.php")
        await ActiveCustomerPage.check_Account_no(AccountNum)
      })
})