// @ts-check

import Ajv from "ajv";
import ajvErrors from "ajv-errors";
import formatsPlugin from "ajv-formats";

/**
 * 
 * @param {object} object - object to validate against schema
 * @param {object} schema - entity schema
 * @returns {boolean} true/false: whether validation succeeded or not
 */
export function validator(object, schema){
	let isValid = false;
	try{
		const ajv = new Ajv({ allErrors: true, strict: "log" });
		formatsPlugin(ajv);
		ajvErrors(ajv);

		// validate only returns true/false,
		// if it returns false then throw error otherwise return true
		const validate = ajv.compile(schema);
		isValid = validate(object);
		if(isValid === false){	throw validate.errors; }
		return isValid;
	}catch(e){
		console.error("validation error ->\n", e);
		return isValid;
	}
}