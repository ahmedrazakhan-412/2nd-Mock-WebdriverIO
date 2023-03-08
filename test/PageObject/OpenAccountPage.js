import { expect } from "chai";

import GenericUtilityPage from '../PageObject/GenericUtilitypage.js'

class OpenAccountModule {

    get OpenAccount_link () {
        return $("//li[normalize-space()='Open Account']");
    }

    //Open Account Details

    get Name_tf () {
        return $("input[placeholder='Name']");
    }
    get Gender_dp () {
        return $("select[name='gender']");
    }
    get Mobileno_tf () {
        return $("input[placeholder='Mobile no']");
    }
    get Email_tf () {
        return $("input[placeholder='Email id']");
    }
    get Landlineno_tf () {
        return $("input[placeholder='Landline no']");
    }
    get DateofBirth_tf () {
        return $("input[placeholder='Date of Birth']");
    }
    get PANNumber_tf () {
        return $("input[placeholder='PAN Number']");
    }
    get CitizenshipNumber_tf () {
        return $("input[placeholder='Citizenship Number']");
    }
    get HomeAddress_tf () {
        return $("input[placeholder='Home Address']");
    }
    get OfficeAddress_tf () {
        return $("input[placeholder='Office Address']");
    }
    get state_dp () {
        return $("select[name='state']");
    }
    get city_dp () {
        return $("select[name='city']");
    }
    get PinCode_tf () {
        return $("input[placeholder='Pin Code']");
    }
    get AreaLocality_tf () {
        return $("input[placeholder='Area/Locality']");
    }
    get NomineeName_tf () {
        return $("input[placeholder='Nominee Name (If any)']");
    }
    get NomineeAccount_tf () {
        return $("input[placeholder='Nominee Account no']");
    }
    get acctype_tf () {
        return $("select[name='acctype']");
    }
    get Submit_btn () {
        return $("input[value='Submit']");
    }
    get Confirm_btn () {
        return $("input[value='Confirm']");
    }
    get AllDetails_Text () {
        return $$("//div[@class='cnfrm_info']/span");
    }
    Name = "";
    FullDetails = [this.Name,"Male","9480196003","ahmedrazakhan412@gmail.com","08532-235612","22-10-1992","BYKPP2375G","US00785",
    "A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053","Test Yantra Bangalore 560053","California",
"Fresno","560053","K K Lane Bangalore 560053","Md Mustaq Ahmed ","1011801011046","Saving"];
    ConfirmDetails = [];

    async createAccount () {

        await this.OpenAccount_link.scrollIntoView();
        await this.OpenAccount_link.click();
        expect(await browser.getTitle()).to.equal('Registration Form');
        let ran = await GenericUtilityPage.randombetween(500,900);
        await browser.pause(2000);
        
        // Open Account Details
        let name = "Md Ahmed Raza Khan "+ran;
        this.Name=name;
        await this.Name_tf.setValue(name);
        await this.Gender_dp.selectByVisibleText('Male');
        await this.Mobileno_tf.setValue("9480196003");
        await this.Email_tf.setValue("ahmedrazakhan412@gmail.com");
        await this.Landlineno_tf.setValue("08532-235612");
        await this.DateofBirth_tf.setValue("22-10-1992");
        await this.PANNumber_tf.setValue("BYKPP2375G");
        await this.CitizenshipNumber_tf.setValue("US00785");
        await this.HomeAddress_tf.setValue("A R Enclave Ground Floor 10,2nd Cross K K Lane Bangalore 560053");
        await this.OfficeAddress_tf.setValue("Test Yantra Bangalore 560053");
        await this.state_dp.selectByVisibleText('California');
        await this.city_dp.selectByVisibleText('Fresno');
        await this.PinCode_tf.setValue("560053");
        await this.AreaLocality_tf.setValue("K K Lane Bangalore 560053");
        await this.NomineeName_tf.setValue("Md Mustaq Ahmed ");
        await this.NomineeAccount_tf.setValue("1011801011046");
        await this.acctype_tf.selectByVisibleText('Saving');
        await browser.pause(3000);
        await this.Submit_btn.scrollIntoView();
        await this.Submit_btn.click();
       
    }

   async checkDetails() {
        await browser.pause(3000);
        expect(await browser.getTitle()).to.equal('Confirm');
        await browser.pause(3000);
        this.AllDetails_Text.forEach(async element => {
        let fullDetails = await element.getText();
        await browser.scroll(0,50);
        await browser.refresh();
        this.FullDetails.push(fullDetails);
        });
        for (let index = 0; index < this.FullDetails.length; index++) {
        if (this.ConfirmDetails[index].includes(this.FullDetails[index])) {
        console.log(+index+"--->"+this.FullDetails[index]+" and "+this.ConfirmDetails[index]+" Both Data are same"); 
            }
        } 
        await browser.pause(3000);
        await this.Confirm_btn.scrollIntoView();
        await this.Confirm_btn.click();
        
    }
}
export default new OpenAccountModule();
