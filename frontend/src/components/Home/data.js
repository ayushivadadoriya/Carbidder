const data = [
    {
        "id":1,
        "company":"Hyundai",
        "color":"Black",
        "model":"Creta",
        "fule":"Diesel",
        "manufectureyear":2020,
        "killometers":10000,
        "intialbid":1000000,
        "img":"https://imgd.aeplcdn.com/664x374/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg?q=80",
    },
    {
        "id":2,
        "company":"BMW",
        "color":"White",
        "model":"Sedan",
        "fule":"Petrol",
        "manufectureyear":2021,
        "killometers":20000,
        "intialbid":10000000,
        "img":"https://i.pinimg.com/736x/9d/e1/db/9de1db51927117de4ff49538366bf5f1.jpg",
    },
    {
        "id":3,
        "company":"Tata",
        "color":"Red",
        "model":"Harrier",
        "fule":"Diesel",
        "manufectureyear":2023,
        "killometers":5000,
        "intialbid":1300000,
        "img":"https://stimg.cardekho.com/images/car-images/large/Tata/Harrier/9850/1681892720393/221_Calypso-Red_971611.jpg?impolicy=resize&imwidth=420",
    },
    {
        "id":4,
        "company":"Mahindra",
        "color":"Blue",
        "model":"XUV700",
        "fule":"Petrol",
        "manufectureyear":2021,
        "killometers":2000,
        "intialbid":1000000,
        "img":"https://imgd.aeplcdn.com/1280x720/n/cw/ec/42355/xuv700-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
        "id":5,
        "company":"Maruti suzuki",
        "color":"Metallic grey",
        "model":"Swift",
        "fule":"Petrol",
        "manufectureyear":2018,
        "killometers":150000,
        "intialbid":600000,
        "img":"https://imgd.aeplcdn.com/370x208/n/0f7l3ra_1429635.jpg?q=80",
    },
    {
        "id":6,
        "company":"Maruti suzuki",
        "color":"white",
        "model":"S-cross",
        "fule":"Diesel",
        "manufectureyear":2016,
        "killometers":11500,
        "intialbid":500000,
        "img":"https://stimg.cardekho.com/images/car-images/large/Maruti/S-Cross-2020/7525/1595838303829/224_Pearl-Arctic-White_dbdbdd.jpg?impolicy=resize&imwidth=420",
    },
    {
        "id":7,
        "company":"Mercedes",
        "color":"Black",
        "model":"Benz A-Class Limousine",
        "fule":"Petrol",
        "manufectureyear":2020,
        "killometers":10000,
        "intialbid":20000000,
        "img":"https://imgd-ct.aeplcdn.com/1056x660/n/tl8njbb_1685321.jpg?q=80",
    },
    {
        "id":8,
        "company":"Kia",
        "color":"Red",
        "model":"Carens",
        "fule":"Petrol",
        "manufectureyear":2019,
        "killometers":100510,
        "intialbid":800000,
        "img":"https://imgd.aeplcdn.com/1280x720/n/cw/ec/144163/carens-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
    {
        "id":9,
        "company":"Audi",
        "color":"Black",
        "model":"RS7",
        "fule":"Petrol",
        "manufectureyear":2015,
        "killometers":250000,
        "intialbid":1500000,
        "img":"https://imgd.aeplcdn.com/1200x900/n/cw/ec/48342/rs7-sportback-exterior-right-front-three-quarter-3.jpeg?q=80",
    },
    {
        "id":10,
        "company":"Maruti",
        "color":"Blue",
        "model":"Fronx",
        "fule":"CNG",
        "manufectureyear":2009,
        "killometers":310000,
        "intialbid":400000,
        "img":"https://imgd.aeplcdn.com/1200x900/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80",
    },
    {
        "id":11,
        "company":"Toyota",
        "color":"Red",
        "model":"Glanza",
        "fule":"CNG",
        "manufectureyear":2021,
        "killometers":100010,
        "intialbid":400000,
        "img":"https://imgd.aeplcdn.com/1200x900/n/cw/ec/112839/glanza-exterior-right-front-three-quarter-5.jpeg?isig=0&q=80",
    },
    {
        "id":12,
        "company":"Skoda",
        "color":"Blue",
        "model":"Kodiaq",
        "fule":"Petrol",
        "manufectureyear":2016,
        "killometers":210510,
        "intialbid":2000000,
        "img":"https://imgd-ct.aeplcdn.com/1056x660/n/cw/ec/49051/kodiaq-exterior-right-front-three-quarter-3.jpeg?isig=0&q=80",
    },
    {
        "id":13,
        "company":"Mahindra",
        "color":"White",
        "model":"Bolero",
        "fule":"Diesel",
        "manufectureyear":2016,
        "killometers":215518,
        "intialbid":650000,
        "img":"https://imgd-ct.aeplcdn.com/1200x900/n/cw/ec/131183/bolero-right-front-three-quarter.jpeg?isig=0&q=80",
    },
    {
        "id":14,
        "company":"Range Rover",
        "color":"White",
        "model":"Land Rover",
        "fule":"Hybrid",
        "manufectureyear":2020,
        "killometers":41000,
        "intialbid":1550000,
        "img":"https://cdni.autocarindia.com/utils/imageresizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Land-Rover-Range-Rover-300320231528.jpeg",
    },
    {
        "id":15,
        "company":"Porsche",
        "color":"Yellow",
        "model":"Porsche 911",
        "fule":"Petrol",
        "manufectureyear":2023,
        "killometers":8000,
        "intialbid":1050000,
        "img":"https://robbreport.com/wp-content/uploads/2023/04/1-12.jpg?w=1000",
    },
]
export default data;