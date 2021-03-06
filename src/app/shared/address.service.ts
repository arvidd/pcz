import { Injectable } from '@angular/core';
import { Address } from './address.model'
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AddressService {
	url: string = 'http://api.postcodedata.nl/v1/postcode/';
	address: Address;

	constructor(private http: HttpClient) {
	}

	getAddress(zipcode:any, housenumber:any): any { // TODO any => Address ?
		return this.http.get(this.url + `?postcode=${zipcode}&streetnumber=${housenumber}& ref=domeinnaam.nl&type=json`)
		.map((result:any) => result.details[0])
		;
	}

	// http://api.postcodedata.nl/v1/postcode/?postcode=7555KG&streetnumber=434& ref=domeinnaam.nl&type=json
	//
	// {"status":"error","errormessage":"no results"}
	//{"status":"ok","details":[{"street":"Breemarsweg","city":"Hengelo","municipality":"Hengelo","province":"Overijssel","postcode":"7555 KG","pnum":"7555","pchar":"KG","rd_x":"249303.37640000000000000000","rd_y":"475064.81656666666666666667","lat":"52.2555358704666","lon":"6.7683877171651"}]}	
}