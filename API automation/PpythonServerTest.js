const { getOwnEnumerableProperties } = require("chai/lib/chai/utils");
const { request, expect } = require("../Configuration/config");

describe("Get /balances", function(){

    it("Check status code of user API", async function(){
       
        const userResponse = await request.get('/users');

         expect(userResponse.status,200) //to test response code
         expect(userResponse.body.city,'Paris')

    });
})