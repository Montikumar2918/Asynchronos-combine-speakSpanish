async function combineCountry(){
    const data = await Promise.all([fetch('https://restcountries.eu/rest/v2/region/asia'),fetch('https://restcountries.eu/rest/v2/region/europe')]);
    const asia =  await data[0].json();
    const europe =  await data[1].json();
    const countries = [...asia, ...europe];
    countries.forEach((country) => createFlag(country));
                return countries;

                try{
                    const msg = await combineCountry();
                    console.log(msg);
                }catch(errMsg){
                    console.log(errMsg);
                }

            }

            combineCountry();

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