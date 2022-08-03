//  ts-check

import * as playwright from "playwright";

/**
 * 
 * @param {string} url 
 * @returns {Promise} Parsed Html Of Web Page / empty string
 */

async function getPageHtml( url ){
	try{
		const browser = await playwright.chromium.launch();
		const context = await browser.newContext();
		const page = await context.newPage();
		await page.goto( url );
		const html = await page.content();
		await browser.close();

		return html;
	}
	catch(e){
		console.error("Error while scraping webpage ->\n"+ e);
		return "";
	}
}

export default getPageHtml;