import {Locator , Page} from "@playwright/test"
import {ElementUtil} from "../pages/utils/ElementUtil";
import {LoginPage} from "../pages/LoginPage";
import {ResultsPage} from "../pages/ResultsPage";


export class HomePage {

     readonly page:Page;
    private readonly eleUtil:ElementUtil;
    private readonly logoutlink:Locator;
    private readonly loginLink:Locator;
    private readonly search:Locator;
    private readonly searchIcon:Locator;


    constructor(page:Page){
        this.page=page;
        this.eleUtil=new ElementUtil(page);
        this.logoutlink = page.getByRole('link', { name: 'Logout' });
        this.search = page.getByRole('textbox', { name: 'Search' });
        this.searchIcon = page.locator('.fa.fa-search');
        this.loginLink = page.getByRole('link', { name: 'Login' });
    }

    async isUserLoggedIn():Promise<boolean>    {
        return await this.eleUtil.isVisible(this.logoutlink, 0);
    }

    async logout(){
        await this.eleUtil.click(this.logoutlink , {timeout:5000});
        await this.eleUtil.click(this.loginLink,{timeout:5000});
        return new LoginPage(this.page);
    }
    
    async doSearch(serachKey:string){
        console.log(`search key :{searchKey}`);
        await this.eleUtil.fill(this.search , serachKey);
        await this.eleUtil.click(this.searchIcon);
        return new ResultsPage(this.page);

    }



}