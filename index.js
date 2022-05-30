const { request } = require('express');
let express = require('express');
let app = express();
app.listen(3000, () => {
    console.log("This runs in port 3000! (product)");
});

let Page = []
function addHeader() {
    Page.push(`
    <!doctype html> 
    <html>
    <head>
        <title>Products</title>
    </head>
    <body>
`)}
function addFooter() {
    Page.push(`
    </body>
    </html>
`)
}
product = [
    {name: "bread", price:1, count:50, id:001},
    {name: "Milk", price:3, count:30, id:002}, 
    {name: "yougrt", price:4, count:30, id:003}, 
    {name: "butter", price:5, count:20, id:004}, 
    {name: "honey", price:10, count:10, id:005}, 
    {name: "sugar", price:2, count:100, id:006}, 
    {name: "salt", price:2, count:90, id:007}, 
    {name: "apple", price:3 , count:30, id:008}, 
    {name: "tomato", price:3 , count:30, id:009}, 
    {name: "brocoli", price:2,  count:150, id:010}
    ]
app.get('/product/:id', function (req, res) {
    let find = -1;
    addHeader();
   for (let i=0; i< product.length; i++) {
        if (product[i].id == req.params.id) {     
        find = i;
        }
    };
    if (find > -1) {
        Page.push(`<h1>Product: ${product[find].name}</h1>`);
        Page.push(`<h2>Price: ${product[find].price}</h2>`);
        Page.push(`<h2>Count: ${product[find].count}</h2>`);
    } else {
        Page.push(`<h2>No product by that id</h2>`);
    }
    addFooter();
    res.send(Page.join(''));
    Page.splice(0);
})
app.get('/product', function (req, res) {
    addHeader();
    Page.push("<h3>List of products</h3>");
    product.forEach(eachProduct => {
        Page.push(`${eachProduct.name} &nbsp; ${eachProduct.price}&nbsp; ${eachProduct.count} <br/>`);
    });
    addFooter();
    res.send(Page.join(''));
    Page.splice(0);
})