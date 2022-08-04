import { getPageHtml } from "./scraper.js";

// eslint-disable-next-line no-undef
test("Is scraper working", async () => {
	let URL = "https://www.prayagrajsmartcity.org/dpayment/dpayment.php?cmd=search&t=hirani&z_PropertyReg_Owner_Name=LIKE&x_PropertyReg_Owner_Name=&z_PropertyReg_ZoneId=%3D&x_PropertyReg_ZoneId=1&z_PropertyReg_WardId=%3D&x_PropertyReg_WardId=&z_PropertyReg_LocaityId=%3D&x_PropertyReg_LocaityId=&psearch=&psearchtype=";
	let parsedHtml = await getPageHtml(URL);
	// console.log(parsedHtml);
	// eslint-disable-next-line no-undef
	expect(typeof parsedHtml).toBe(typeof "string");
}, 25000);