import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema';
import fs from 'fs';

const json = JSON.stringify(jsf(schema));
/*eslint-disable  no-console*/
fs.writeFile("./src/api/db.json", json, function (err){
   if(err){
      return console.log(err);
   } else{
      console.log("Mock data Generated ... :)");
   }
});
