export const schema = {
	"title": "property-details",
	"description": "property detail record of pnn",
	"type":"object",
	"properties": {
		"_id":{
			"type":"string",
			"format":"uuid"
		},
		"NIC_Code":{
			"type":"number",
			"minimum": 1000000000000,
			"maximum": 99999999999999
		},
		"ComputerCode":{
			"type":"number",
			"minimum": 100000000,
			"maximum": 9999999999
		},
		"Owner_Name":{
			"type":"string"
		},
		"Father_Name":{
			"type":"string"
		},
		"HNo":{
			"type":"string"
		},
		"AddressLine1":{
			"type":"string"
		},
		"ZoneId":{
			"type":"string"
		},
		"WardId":{
			"type":"string"
		},
		"LocaityId":{
			"type":"string"
		},
		"MobileNo":{
			"type":"number",
			"minimum": 6000000000,
			"maximum": 9999999999
		}
	},
	"required":["_id", "NIC_Code", "ComputerCode","Owner_Name","AddressLine1","ZoneId","WardId","LocaityId"],
	"additionalProperties": false
};