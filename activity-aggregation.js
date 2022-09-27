/* employees table */

/* 1 */
{
    "_id" : ObjectId("63214b63ef893d12eb4935f6"),
    "id" : 312456,
    "employeeName" : "Joongki Song",
    "age" : 28,
    "jobRole" : "Store Manager",
    "salary" : 120000
}

/* 2 */
{
    "_id" : ObjectId("63214b88ef893d12eb499ee6"),
    "id" : 345342,
    "employeeName" : "Joongkuk Jeon",
    "age" : 25,
    "jobRole" : "Store Associate",
    "salary" : 45000
}

/* 3 */
{
    "_id" : ObjectId("63214ba5ef893d12eb49ee68"),
    "id" : 334566,
    "employeeName" : "Jin Kim",
    "age" : 35,
    "jobRole" : "Cashier",
    "salary" : 67500
}

/* 4 */
{
    "_id" : ObjectId("63214bb7ef893d12eb4a216c"),
    "id" : 245345,
    "employeeName" : "Hyekyo Song",
    "age" : 40,
    "jobRole" : "Senior Cashier",
    "salary" : 72500
}

/* 5 */
{
    "_id" : ObjectId("63214bc7ef893d12eb4a4c13"),
    "id" : 445364,
    "employeeName" : "Tae Hyung Kim",
    "age" : 22,
    "jobRole" : "Store Associate",
    "salary" : 35000
}

/* inventory table */

/* 1 */
{
    "_id" : ObjectId("63214e90ef893d12eb51eb87"),
    "id" : "LS0000123",
    "Name" : "XYZ Chocolate Bar - 100g",
    "price" : 5.23,
    "quantity" : 25000,
    "category" : "chocolates, sweets"
}

/* 2 */
{
    "_id" : ObjectId("63214e9cef893d12eb520e3e"),
    "id" : "LS0003123",
    "Name" : "Milk Non-fat - 1lt",
    "price" : 3,
    "quantity" : 1000,
    "category" : "dairy, healthy"
}

/* 3 */
{
    "_id" : ObjectId("63214eaaef893d12eb5231c2"),
    "id" : "LS0004566",
    "Name" : "Eggs - 12 Pack",
    "price" : 6,
    "quantity" : 5000,
    "category" : "poultry, generic"
}

/* 4 */
{
    "_id" : ObjectId("63214eb5ef893d12eb525028"),
    "id" : "LS0008542",
    "Name" : "Whole Chicken",
    "price" : 12.59,
    "quantity" : 1250,
    "category" : "poultry, meat"
}

/* 5 */
{
    "_id" : ObjectId("63214ec4ef893d12eb527995"),
    "id" : "LS0008543",
    "Name" : "Carrots (Packed) 250g",
    "price" : 3.5,
    "quantity" : 3000,
    "category" : "vegetables, healthy, organic"
}

/* 6 */
{
    "_id" : ObjectId("63214ed6ef893d12eb52a9f8"),
    "id" : "LS0009846",
    "Name" : "Beans (Packed) - 250g",
    "price" : 6.75,
    "quantity" : 6000,
    "category" : "vegetables, healthy, organic"
}

/* 7 */
{
    "_id" : ObjectId("63214ee0ef893d12eb52c6ab"),
    "id" : "LS0009100",
    "Name" : "Bell Pepper (Packed) - 250g",
    "price" : 4.95,
    "quantity" : 12000,
    "category" : "vegetables, healthy, organic"
}

/* 8 */
{
    "_id" : ObjectId("63214eeeef893d12eb52ec83"),
    "id" : "LS0002688",
    "Name" : "ZZ Butter - 500g",
    "price" : 25,
    "quantity" : 500,
    "category" : "dairy, healthy, premium"
}

/* payments table */
/* 1 */
{
    "_id" : ObjectId("632150aaef893d12eb57b225"),
    "id" : "BL2021005",
    "grossAmount" : 105.65,
    "discounts" : 10,
    "netAmount" : 95.65,
    "date/time" : ISODate("2021-01-01T16:00:00.000Z")
}

/* 2 */
{
    "_id" : ObjectId("632150baef893d12eb57ddfc"),
    "id" : "BL2021006",
    "grossAmount" : 45.25,
    "discounts" : 0,
    "netAmount" : 45.25,
    "date/time" : ISODate("2021-01-01T16:15:55.000Z")
}

/* 3 */
{
    "_id" : ObjectId("632150c7ef893d12eb5802a2"),
    "id" : "BL2021007",
    "grossAmount" : 153.33,
    "discounts" : 20.33,
    "netAmount" : 133,
    "date/time" : ISODate("2021-01-01T16:31:08.000Z")
}

/* 4 */
{
    "_id" : ObjectId("632150eaef893d12eb586406"),
    "id" : "BL2021008",
    "grossAmount" : 21,
    "discounts" : 0,
    "netAmount" : 21,
    "date/time" : ISODate("2021-01-01T20:25:52.000Z")
}

/* 5 */
{
    "_id" : ObjectId("632150f3ef893d12eb587aca"),
    "id" : "BL2021009",
    "grossAmount" : 89.72,
    "discounts" : 0.72,
    "netAmount" : 89,
    "date/time" : ISODate("2021-01-01T08:45:12.000Z")
}

/* 6 */
{
    "_id" : ObjectId("63215100ef893d12eb589edc"),
    "id" : "BL2021010",
    "grossAmount" : 33.5,
    "discounts" : 20.5,
    "netAmount" : 13,
    "date/time" : ISODate("2021-01-01T11:02:35.000Z")
}

/* promo table */
/* 1 */
{
    "_id" : ObjectId("6321515fef893d12eb59a2a0"),
    "id" : "PROMO01",
    "name" : "Sales Promo",
    "period" : 7,
    "dailySales" : "20, 50, 12, 30, 45, 15, 60"
}

/* 2 */
{
    "_id" : ObjectId("63215180ef893d12eb59feb5"),
    "id" : "PROMO02",
    "name" : "Milk Promo",
    "period" : 2,
    "dailySales" : "120, 200"
}

/* 3 */
{
    "_id" : ObjectId("63215199ef893d12eb5a45af"),
    "id" : "PROMO03",
    "name" : "Meat Promo",
    "period" : 3,
    "dailySales" : "101, 205"
}

/* 4 */
{
    "_id" : ObjectId("632151b8ef893d12eb5a97ed"),
    "id" : "PROMO04",
    "name" : "New Year Promo",
    "period" : 7,
    "dailySales" : "68, 88, 105, 188, 74, 278, 350"
}