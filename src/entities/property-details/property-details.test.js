import { Property_Details } from "./index.js";

// eslint-disable-next-line no-undef
test("Is Property_Details constructor working", () => {
	const newProperty = Property_Details(38501350053371, 135177190, "SMT. SANJU TIWARI", "209/K/5 OM PRAKASH SABHASAD NAGAR PRAYAGRAJ", "Zone-01, KHULDABAD", "WARD-45", "OM PRAKASH SABHASAD NAGAR");
	// eslint-disable-next-line no-undef
	expect(newProperty).not.toBe(null);
});