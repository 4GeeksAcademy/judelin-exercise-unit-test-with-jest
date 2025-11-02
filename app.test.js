const {fromDollarToYen, fromEuroToDollar,fromYenToPound} = require("./app")

test("to exchange 5 dollars to yen toBe 769.75 ", () =>{
    expect(fromDollarToYen(5, "Dollar")).toBe(769.75)
});

test("to exchange 10, Euro to Dollar toBe 11.60",  ()=>{
    expect(fromEuroToDollar(10, "Euro")).toBe(11.60)
})

test("to exchange 25 yen to pound sterling toBe 0.1225", ()=>{
    expect(fromYenToPound(25, "Yen")).toBe(0.1225)
})

