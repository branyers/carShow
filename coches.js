const coches = [
    {
        id:1,
        brand :"Toyota",
        model:"Camry",
        color: "Red",
        year:   "2010",
        image: "https://gossipvehiculo.com/wp-content/uploads/2019/09/2020-toyota-camry-trd-first-drive.jpg",
        price: "RD$2,0000"
    },
    {
        id:2,
        brand :"Honda",
        model:"Civic",
        color: "Grey",
        year:   "2011",
        image: "https://i.pinimg.com/236x/66/4c/c9/664cc9adc4546328b01890c91140938f.jpg",
        price: "RD$2,0000"
    },
    {
        id:3,
        brand :"Hyndai",
        model:"Sonata",
        color: "Orange",
        year:   "2012",
        image: "https://upload.wikimedia.org/wikipedia/commons/5/58/2014_Hyundai_Sonata_%28YF%29_LPi_Taxi_by_seoul.JPG",
        price: "RD$2,0000"
    },
    {
        id:4,
        brand :"BMW",
        model:"LXZ",
        color: "Blue",
        year:   "2013",
        image: "https://ddjkm7nmu27lx.cloudfront.net/149521125549255/cover/59254706f1e0d4.65562190.jpg",
        price: "RD$2,0000"
    },
    {
        id:5,
        brand :"Porche",
        model:"Cayenne",
        color: "Black",
        year:   "2020",
        image: "https://pict1.reezocar.com/images/660/gebrauchtwagen.at/RZCGBWAT022AF5C08952/PORSCHE-CAYENNE-00.jpg",
        price: "RD$2,0000"
    },
    {
        id:6,
        brand :"Ferrari",
        model:"Turbo",
        color: "White",
        year:   "2019",
        image: "https://s1.cdn.autoevolution.com/images/news/ferrari-458-italia-to-go-turbo-in-2015-81998_1.jpg",
        price: "RD$2,0000"
    },
]




function printCars(){
    let html = '';
    let container = document.getElementById("data.cars");
    coches.forEach((coches) =>{
        html += `<tr>
                    <td>${coches.id}</td>
                    <td><img src="${coches.image}"alt="" srcset="" class="images"></td>
                    <td>${coches.brand}</td>
                    <td>${coches.model}</td>
                    <td>${coches.year}</td>
                    <td>${coches.color}</td>
                    <td>${coches.price}</td>
                    <td>
                        <button onclick="updateCars(${coches.id})" class="btn btn-primary"">
                       Update
                    </button>
                    <button onclick="deleteCars(${coches.id})" class="btn btn-danger">
                   Delete
                </button>
                    </td>
                </tr>`;
    });

    container.innerHTML = html

}


function deleteCars(id) {
    const index = coches.findIndex((coches) => coches.id == id );
    coches.splice(index, 1);
    printCars();
}

function addCars() {

    const brand = document.getElementById('brand').value;
    const model = document.getElementById('model').value;
    const year = document.getElementById('year').value;
    const color = document.getElementById('color').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value;

   

    const id = coches[coches.length -1].id + 1;

    const newCars = {
         id,
        brand,
        model,
        color,
        price,
        year,
        image,
    }
    if(brand=="" && model=="" && year=="" && color== "" && price==""){
        alert("Por favor revisa que allas llenado todos los campos de manera correcta...")
    }else{
    coches.push(newCars);
    }
    printCars();


    document.getElementById('form-cars').reset();
}

printCars();

function updateCars(id){
    const brand = document.getElementById('brand').value  
    const model = document.getElementById('model').value 
    const year = document.getElementById('year').value 
    const color = document.getElementById('color').value
    const price = document.getElementById('price').value;
    const image = document.getElementById('image').value 

    const updateCars = {
        id,
        brand,
        model,
        year,
        color,
        price,
        image,
    }
    if(brand=="" && model=="" && year=="" && color== "" && price== ""){
        alert("Por favor revisa que allas llenado todos los campos de manera correcta...")
    }else{
    coches.splice(id-1,1,updateCars)
    }
    document.getElementById('form-cars').reset();
    printCars();

}



