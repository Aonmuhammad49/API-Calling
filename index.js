let Card = document.getElementById("card")


function API(){
    console.log("test")
   
    try{
        fetch("https://fakestoreapi.com/products",)
        .then((response) => response.json())
        .then((result)=>{
            console.log(result)
            for(var i=0;i<20;i++){
                console.log(result[i])
                Card.innerHTML += `<div class="col col-lg-4 col-md-6 col-sm-6"  id="card">
            <div class="card" style="width: 61vh; height: 90vh;" >
                <img src="${result[i].image}" class="card-img-top" alt="..." style="width: 60vh; height: 50vh;">
                <div class="card-body" style="overflow: hidden; font-size: 17px;">
                  <p class="card-text">${result[i].description}</p>
                  <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
              </div>  
            </div>
        </div>`
            }
        })
    }
    catch{
        console.log(error)
    }
    finally{

    }
}
window.onload = function(){
    API()
}