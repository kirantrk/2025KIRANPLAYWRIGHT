//import {test , expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import { HomePage } from '../pages/HomePag';
import { ResultsPage } from '../pages/ResultsPage';
import { ProductInfoPage } from '../pages/ProductInfoPage';
import {test , expect} from '../fixtures/baseFixtures';


let search = [
    {searchkey:'macbook' , productname:'MacBook Pro'},
    {searchkey:'macbook' , productname:'MacBook Air'},
    
]


for(let product of search){
test(`Verify product Header ${product.productname}`,{tag:['@product' , '@sanity' , '@regression']},async({homePage})=>{
    // let loginPage = new LoginPage(page);
    // await loginPage.goToLoginPage();
    // let homePage : HomePage = await loginPage.doLogin('pwtest@nal.com' , 'test123');
    let resultsPage:ResultsPage = await homePage.doSearch('macbook');
    let productInfoPage:ProductInfoPage = await resultsPage.selectProduct('MacBook Pro');

    expect(await productInfoPage.getProductHeader()).toBe('MacBook Pro');

 });
}
 