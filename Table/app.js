let file = {
    "success": true,
    "data": [
        {
            "id": "9cc04680-7386-11ea-a901-e56331e2eed2",
            "sellerId": "8de151a0-7385-11ea-9ed3-f3b5e9d2790f",
            "productId": "8de178b2-7385-11ea-9ed3-f3b5e9d2790f",
            "buyerId": "d2f168bd-6381-46ce-9e76-a3609ffb0735",
            "createdAt": "2020-03-31T19:34:18.089Z",
            "updatedAt": "2020-03-31T19:34:18.089Z",
            "buyer": {
                "firstName": "Pet"
            },
            "seller": {
                "firstName": "Niko"
            },
            "product": {
                "price": 1500
            }
        },
        {
            "id": "9cc0e2c0-7386-11ea-a901-e56331e2eed2",
            "sellerId": "8de151a0-7385-11ea-9ed3-f3b5e9d2790f",
            "productId": "8de178b6-7385-11ea-9ed3-f3b5e9d2790f",
            "buyerId": "d2f168bd-6381-46ce-9e76-a3609ffb0735",
            "createdAt": "2020-03-31T19:34:18.092Z",
            "updatedAt": "2020-03-31T19:34:18.092Z",
            "buyer": {
                "firstName": "Pet"
            },
            "seller": {
                "firstName": "Niko"
            },
            "product": {
                "price": 2000
            }
        }
    ],
    "info": []
};

function generateTable() {
    
    let  x = document.createElement("TABLE");
    x.setAttribute("id", "myTable");
    document.body.appendChild(x);

    let thead = x.createTHead();
    let row = thead.insertRow();

    let th = document.createElement('th');
    let text = document.createTextNode('Buyer');
    th.appendChild(text);
    row.appendChild(th);

    
    let th2 = document.createElement('th');
    let text2 = document.createTextNode('Price');
    th2.appendChild(text2);
    row.appendChild(th2);
    
    let th3 = document.createElement('th');
    let text3 = document.createTextNode('Seller');
    th3.appendChild(text3);
    row.appendChild(th3);
    
    let th4 = document.createElement('th');
    let text4 = document.createTextNode('Time');
    th4.appendChild(text4);
    row.appendChild(th4);


    for(let i = 0; i < file.data.length; i++) {

        let y = document.createElement("TR");
        y.setAttribute("id", "myTr" + i);
        document.getElementById("myTable").appendChild(y);

        let z = document.createElement("TD");
        let t = document.createTextNode(file.data[i].buyer.firstName);
        z.appendChild(t);
        y.appendChild(z);

        let s = document.createElement("TD");
        let w = document.createTextNode('for ' + file.data[i].product.price);
        s.appendChild(w);
        y.appendChild(s);

        let a = document.createElement("TD");
        let b = document.createTextNode('from ' + file.data[i].seller.firstName);
        a.appendChild(b);
        y.appendChild(a);

        let c = document.createElement("TD");
        let d = document.createTextNode(file.data[i].createdAt);
        c.appendChild(d);
        y.appendChild(c);
    };
};

generateTable();
