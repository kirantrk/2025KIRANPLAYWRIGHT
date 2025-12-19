 import {dataTest as test, expect} from '../fixtures/dataFixture';
 //import {test} from '@playwright/test';


 function getRandomEmail(): string{
    let randomValue = Math.random().toString(36).substring(2,9);
    return `auto_${randomValue}@nal.com`;
 }

 test('Register a User from CSV' , async ({regData , page , baseURL})=>{

    for(const user of regData){
        
    }

 })