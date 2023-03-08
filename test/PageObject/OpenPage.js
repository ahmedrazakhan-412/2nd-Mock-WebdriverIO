import { expect } from "chai";

class OnlineBankingSystem {

    async Open () {
        await browser.maximizeWindow();
        await browser.url(`http://testingserver/domain/Online_Banking_System/`);
        await browser.pause(2000);
        expect(await browser.getTitle()).to.equal('Online Banking System');
     }
    }

export default new OnlineBankingSystem();
