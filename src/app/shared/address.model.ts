export class Address{ //xx AddressDetails
	constructor(
		public street: string,
		public city: string,
		public municipality: string,
		public province: string,
		public postcode: string,
		public pnum: string,
		public pchar: string,
		public rd_x: number, //xx
		public rd_y: number,
		public lat: number,
		public lon: number,

		// "street":"Breemarsweg",
		// "city":"Hengelo",
		// "municipality":"Hengelo",
		// "province":"Overijssel",
		// "postcode":"7555 KG",
		// "pnum":"7555",
		// "pchar":"KG",
		// "rd_x":"249303.37640000000000000000",
		// "rd_y":"475064.81656666666666666667",
		// "lat":"52.2555358704666",
		// "lon":"6.7683877171651"		
	){	}
}