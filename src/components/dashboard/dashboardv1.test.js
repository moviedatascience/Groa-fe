import React from "react";
import { render } from "@testing-library/react";
import { getAllByTestId } from "../../utils/test-utils.js";
import puppeteer from 'puppeteer';

// component to be tested.
import Dashboardv1 from "./dashboardv1.js";

it("renders dashboardv1", () => {
  const { container } = render(<Dashboardv1 />);

  const component = getAllByTestId(container, "dashboard-screen");
  expect(component.length).toBe(1);
});
it("renders dashboardv1", () => {
  const { container } = render(<Dashboardv1 />);

  const component = getAllByTestId(container, "box-container");
  expect(component.length).toBe(1);
});
// it("renders dashboardv1", () => {
//   const { container } = render(<Dashboardv1 />);

//   const component = getAllByTestId(container, "box");
//   expect(component.length).toBe(200);
// });

//------------puppeteer 
// test('Validating movie form button', async() => { 
//   const browser = await puppeteer.launch({headless:false,defaultViewport: null});
//   const page = await browser.newPage();

//   await page.goto('localhost:3000/')
//   await page.waitFor(4000);
//   await page.waitForSelector('.forms')
  
//   await page.click('input[name=email]')
//   await page.keyboard.type('puppeteertj123@gmail.com');
//   await page.waitFor(300);
//   await page.click('input[name=username]')
//   await page.keyboard.type('puppeteer10');
//   await page.waitFor(300);
//   await page.click('input[name=password]')
//   await page.keyboard.type('Groa123');
//   await page.waitFor(300);
//   await page.click('input[name=confirmpassword]')
//   await page.keyboard.type('Groa123');

//   const movieInput = await page.$eval('input[name=confirmpassword]', (input) => input.className);
//   expect(movieInput).toBe('form-control')

//   await page.waitFor(1500);

//   // const inputUploadHandle = await page.$('.form .LogBtn input[type=file]');
//   // const fileToUpload = './Users/thomaskatalenas/Labs/Groa-fe-copy-tests/src/zipfile-testing/cooper.zip';
  
//   // await inputUploadHandle.uploadFile(fileToUpload);
//   await page.click('.LoginBtn');


  
  


  
// },40000)

