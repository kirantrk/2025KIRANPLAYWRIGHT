import {Locator, Page } from "@playwright/test";
import {ElementUtil} from '../pages/utils/ElementUtil';
import {LoginPage} from '../pages/LoginPage';
import {ProductInfoPage} from '../pages/ProductInfoPage'


export class  ResultsPage{

    private readonly page:Page;
    private readonly eleUtil:ElementUtil;
    private readonly results:Locator;


    constructor(page:Page){

        this.page = page;
        this.eleUtil = new ElementUtil(page);
        this.results = page.locator('.product-thumb');

    }


     async getSearchResultsCount():Promise<number>{

        return await this.results.count();
     }


     async selectProduct(productName:string):Promise<ProductInfoPage>{

        console.log("======product name=======" +productName);
        await this.eleUtil.click(this.page.getByRole('link', { name: `${productName}` }));
        return new ProductInfoPage(this.page);

     }

}