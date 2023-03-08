import OpenPage from '../PageObject/OpenPage.js'
import OpenAccountpage from '../PageObject/OpenAccountPage.js'

/*Go to Online Banking System and Open Account along with full details.
 And check wheather same details are displayed in confirm page.*/

describe('My Login application', () => {
    
    it('should login with valid credentials as Admin', async () => {
        await OpenPage.Open();
    })
    it('should click on Open Account and Create An Account along with full details', async () => {
        await OpenAccountpage.createAccount();
    })
    it('should check wheather confirm details are same as full details', async () => {
        await OpenAccountpage.checkDetails();
    })
})