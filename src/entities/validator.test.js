import { validator } from "./validator.js";

// eslint-disable-next-line no-undef
test("Is validator function working", () => {
	const schema = {
		"title": "test schema",
		"description": "test schema for validator functin",
		"type": "object",
		"properties": {
			"newCode": {
				"type":"number",
				"minimum": 10000000000000,
				"maximum": 99999999999999
			},
			"oldCode":{
				"type":"number",
				"minimum": 100000000,
				"maximum": 9999999999
			}
		},
		"required": ["newCode", "oldCode"],
		"additionalProperties": false
	};

	const data1 = {
		newCode : 38501350053371,
		oldCode : 135177190,
	};

	const validData = validator(data1, schema);
	// eslint-disable-next-line no-undef
	expect(validData).toBe(true);
});