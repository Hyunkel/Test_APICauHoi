
let chai = require('chai');
let chaiHttp = require('chai-http');
let expect = require('chai').expect;
var app = require("./app")
chai.use(chaiHttp);

// Unittest
describe('TestNow',function () {
    beforeEach(function () {

    });
    after(function() {
 
    });
    //Test router GET cauhoi/lelve=?
    describe('/Test Router GET /cauhoi?level=1',function () {
        it('should Response One Data With Error_Code',async function () {
                let res = await chai.request(app).get('/cauhoi?level=1');
                    //check status code
                    expect(res, 'Err Status Code').to.have.status(200);
                    // check valid response
                    expect(res, 'Data Not Vaild Json').to.be.json;
                    // check res.body not emty
                    expect(res.body, 'Data Rong').to.not.be.empty;
                    // check type data.body response
                    expect(res.body, 'Data Khong Phai Kieu Object').to.be.an('object');
                    // check struct data respone
                    expect(res.body, 'Struct Data Error').to.have.all.keys('error_code', 'res');
                    // type value data['error_code']
                    expect(res.body.error_code, 'Type Of Error_Code not a number').to.be.a('number')
                    if(res.body.error_code == 0){
                        console.log(res.body)
                        // check type data['res']
                        expect(res.body.res, 'Data[res] not valid object').to.be.an('object')
                        // check key in data['res]
                        expect(res.body.res, 'Err key in data[res]').to.have.all.keys('cauhoi','dapana','dapanb','dapanc','dapand','ketqua','level')
                        for(let i in res.body.res){
                            if(i == 'level'){
                                expect(res.body.res.level, 'Data not a number').to.be.a('number')
                                continue;
                            }
                            expect(i, 'Data not type str').to.be.a('string')
                        }
                    }else{
                        console.log('DATA:',res.body)
                        var err = new TypeError('Data co Loi Xay Ra');
                        var badFn = function () { throw err; };
                        expect(badFn).to.throw(err);
                        badFn()
                    }
                });
        });
    describe(` /Test SQL Injection with Router  " GET /cauhoi?level=1' " `, function () {
        it('Check SQL Injection',async function () {
            let res = await chai.request(app).get("/cauhoi?level=1'");
                //check status code
                expect(res, 'Err Status Code').to.have.status(200);
                // check valid response
                expect(res, 'Data Not Vaild Json').to.be.json;
                // check res.body not emty
                expect(res.body, 'Data Rong').to.not.be.empty;
                // check type data.body response
                expect(res.body, 'Data Khong Phai Kieu Object').to.be.an('object');
                // check struct data respone
                expect(res.body, 'Struct Data Error').to.have.all.keys('error_code', 'res');
                // type value data['error_code']
                expect(res.body.error_code, 'Type Of Error_Code not a number').to.be.a('number')
                if(res.body.error_code != 0){
                    console.log(res.body)
                    // check type data['res']
                    expect(res.body.res, 'Data[res] not valid object').to.be.a('string')
                }else{
                    console.log('DATA:',res.body)
                    var err = new TypeError('Data Response With Error_Code = 0 =>Maybe:SQL Injection');
                    var badFn = function () { throw err; };
                    expect(badFn).to.throw(err);
                    badFn()
                }
        });
    })
});