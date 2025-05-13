let data=[];
let currentData=[];
var inputText = document.getElementById("search").value
document.addEventListener("DOMContentLoaded",function(){
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
    .then(res=>{return res.json()}).then(res=>{
        data=res;
        createLayout(res);
    })
    // name , id , image , symbol , currentPrice and total volume
})
function createLayout(dataArray){
    var dataSection = document.querySelector(".data-section");
    dataSection.innerHTML=""
    console.log("data-array",dataArray)
    dataArray.forEach(element => {
        
    var row = document.createElement("div");
    row.className="row";

    var nameImg = document.createElement("div");
    nameImg.className="name-img";
    var img = document.createElement("img");
    img.src=element.image
    var span = document.createElement("span");
    span.className="name";
    nameImg.appendChild(img);
    nameImg.appendChild(span);
    span.innerText=element.name

    var symbol = document.createElement("div");
    symbol.className="symbol";
    symbol.innerText=element.symbol;

    var price = document.createElement("div");
    price.className="price";
    price.innerText=element.current_price

    var totalVolume = document.createElement("div");
    totalVolume.className="total-volume";
    totalVolume.innerText=element.total_volume

    row.appendChild(nameImg);
    row.appendChild(symbol);
    row.appendChild(price);
    row.appendChild(totalVolume);
    dataSection.appendChild(row);
    });
    
    
}
function sortByVolume(){
    createLayout(data.filter((el)=>(el.name.trim().toLowerCase().includes(inputText.trim().toLowerCase()) || el.symbol.trim().toLowerCase().includes(inputText.trim().toLowerCase()))).sort((a,b)=>a.total_volume-b.total_volume))
}
function sortByPrice(){
    createLayout(data.filter((el)=>(el.name.trim().toLowerCase().includes(inputText.trim().toLowerCase()) || el.symbol.trim().toLowerCase().includes(inputText.trim().toLowerCase()))).sort((a,b)=>a.current_price-b.current_price))
}
function onSearch(){
    inputText =document.getElementById("search").value
    console.log(inputText,document.getElementById("search").value)
    createLayout(data.filter((el)=>(el.name.trim().toLowerCase().includes(inputText.trim().toLowerCase()) || el.symbol.trim().toLowerCase().includes(inputText.trim().toLowerCase()))))
}