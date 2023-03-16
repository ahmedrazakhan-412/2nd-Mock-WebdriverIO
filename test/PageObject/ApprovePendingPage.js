import { expect } from "chai"
import OpenAccountpage from '../PageObject/OpenAccountPage.js'


class ApprovePendingPage {

    get applicationNo_tf(){
        return $(`//input[@name="application_no"]`)
    }
    get search_Btn(){
        return $(`//input[@name="search_application"]`)
    }
    get data(){
        return $(`//td[text()="${OpenAccountpage.getName()}"]`)
    }
    get approve_btn(){
        return $(`//input[@name="approve_cust"]`)
    }
    //business library
    async searchApplication_Approve(applicationnum){
        await (this.applicationNo_tf).setValue(applicationnum);
        await browser.pause(2000);
        await (this.search_Btn).click();
        await browser.scroll(0,190);
        await browser.pause(2000);
        const details=await this.data;
        // expect(await details.waitForExist({timeout:10000})).to.be.true;
        await browser.scroll(0,500);
        await (this.approve_btn).click();
        await browser.pause(2000);
    }
       async capture_AccountNumber(){
        let result=await browser.isAlertOpen()
        expect(result).to.be.true;
        await browser.pause(5000);
        const text1= await browser.getAlertText();
        var matches1 = text1.match(/(\d+)/);
        console.log(matches1);
        let accno=matches1[0];
        console.log("Account_Number ="+accno);
        await browser.pause(2000);
        await browser.acceptAlert();
        return accno;
    }

}
export default new ApprovePendingPage()