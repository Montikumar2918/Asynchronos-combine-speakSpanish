async function speaksSpanish(){
    const data = await fetch('https://restcountries.eu/rest/v2/lang/es');
    const countries = await data.json();
    const country = await countries.filter((data) => data.region = 'Europe');

    country.forEach((spanish) => createFlag(spanish));
    return country;
       
    
    try{
        const msg = await speaksSpanish();
        console.log(msg);
    }catch(errMsg){
        console.log(errMsg);
    }
   
};

speaksSpanish();

         var element = document.createElement("div");
         element.className = "main-container";
         document.body.append(element);


         function createFlag({name, flag, population, region, area, capital}){
  
            element.innerHTML +=` 
           <div class="flag-container">
           <img class="flag" src=${flag}>

           <div class="details">
          <h3>${name}</h3>
          <p><b>Population: </b>${population}</p> 
          <p><b>Region: </b>${region}</p>
          <p><b>Area: </b>${area}</p>
          
          </div>
          </div>`;                 
          }
