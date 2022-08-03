// @ts-check

import * as uuid from "uuid";
import { validator } from "../validator.js";
import { schema } from "./property-details-schema.js";

/**
 * 
 * @param {number} newComputerCode 
 * @param {number} oldComputerCode 
 * @param {string} ownerName 
 * @param {string} address 
 * @param {string} zone 
 * @param {string} ward 
 * @param {string} locality 
 * @param {string} fatherName 
 * @param {string} houseNumber 
 * @param {number} mobile 
 * @returns {object} property-details
 */

function Property_Details( newComputerCode, oldComputerCode, ownerName, address, zone, ward, locality, fatherName = "", houseNumber = "", mobile = 6000000000){

	let temp = {};
	temp._id = uuid.v4();
	temp.NIC_Code = newComputerCode;
	temp.ComputerCode = oldComputerCode;
	temp.Owner_Name = ownerName;
	temp.Father_Name = fatherName;
	temp.HNo = houseNumber;
	temp.AddressLine1 = address;
	temp.ZoneId = zone;
	temp.WardId = ward;
	temp.LocaityId = locality;
	temp.MobileNo = mobile;

    
	// if validation fails return null otherwise create object & return it
	if( validator( temp, schema ) === true ){
		return Object.seal(temp);
	}
	else{ return null; }
}

export { Property_Details };