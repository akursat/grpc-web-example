import {
  AddCountryRequest,
  AddCountryResponse,
  GetCountriesRequest,
  GetCountriesResponse,
  Country
} from "./country_pb";
import { CountryServiceClient } from "./country_grpc_web_pb";

const host = "http://localhost:8080";
const client = new CountryServiceClient(host, null, null);
const metadata = { "Content-Type": "application/grpc-web-text" };

export const getCountries = () => {
  let getRequest = new GetCountriesRequest();
  client.getCountries(getRequest, metadata, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(response.toObject()));
    }
  });
};

export const addCountry = () => {
  let country = new Country();
  country.setId(1);
  country.setName("djibouti");
  country.setFlag(
    "https://tr.wikipedia.org/wiki/Cibuti#/media/Dosya:Flag_of_Djibouti.svg"
  );
  let addRequest = new AddCountryRequest();
  addRequest.setCountry(country);
  client.addCountry(addRequest, metadata, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(response.toObject()));
    }
  });
};

getCountries();
addCountry();
