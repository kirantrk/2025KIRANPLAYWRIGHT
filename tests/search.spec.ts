// import {test , expect} from '@playwright/test';
// import {LoginPage} from '../pages/LoginPage';
// import {HomePage} from '../pages/HomePag';
import { ResultsPage } from '../pages/ResultsPage';
import {test , expect} from '../fixtures/baseFixtures';

let searchData = [
    {searchkey:'macbook' , resultscount:3},
    {searchkey:'samsung' , resultscount:2}
];

for( let product of searchData){

    test(`Verify product search of ${product.searchkey}` , async ({homePage})=>{

    // let loginPage = new LoginPage(page);
    // await loginPage.goToLoginPage();
    // let homePage:HomePage =  await loginPage.doLogin('pwtest@nal.com' , 'test123');
    let resultsPage:ResultsPage = await homePage.doSearch('macbook');
    console.log(await resultsPage.getSearchResultsCount());
    expect(await resultsPage.getSearchResultsCount()) .toBe(3);
})

}

