async function detail_display(name,location)
{
    location.innerHTML = "";
    location.style.cssText = 
    `border: transparent;
    overflow-y: scroll;`;

    try{

        let response = await fetch(`http://www.omdbapi.com/?apikey=1e228080&t="${name}"`)

        let data = await response.json()
        let {Actors,country,Director,Genre,Plot,Poster,Released,Runtime,Title,Writer,imdbRating} = data
        
        let image = document.createElement("img")
        image.src = Poster
        
        let content = document.createElement("div")
            let title = document.createElement("h3")
            title.textContent = `" ${Title} "`

            let genre = document.createElement("h5")
            genre.textContent = `Genre : ${Genre}`

            let plot = document.createElement("h5")
            plot.textContent = `Plot : ${Plot}`

            let director = document.createElement("h5")
            director.textContent = `Director : ${Director}`

            let actors = document.createElement("h5")
            actors.textContent = `Actors : ${Actors}`

            let writer = document.createElement("h5")
            writer.textContent = `Writer : ${Writer}`

            let year = document.createElement("h5")
            year.textContent = `Released Date : ${Released}`

            let runtime = document.createElement("h5")
            runtime.textContent = `Runtime : ${Runtime}`

            let Country = document.createElement("h5")
            Country.textContent = `Country : ${country}`

            let Rating = document.createElement("h5")
            Rating.textContent = `Rating : ${imdbRating}⭐`

        content.append(title,genre,plot,director,actors,writer,year,runtime,Country,Rating)
        location.append(image,content)

    }
    catch(error)
    {
        console.log(error)
    }
}



function setdata(link,location)
{
    link.then(function(res){
    
        location.innerHTML = "";
        res.forEach(({poster_path,title}) => {
        
            let movie = document.createElement("div")
            movie.addEventListener("click",function(){
                
                location.style.transform =  "translateY(500px)"
               let div =  document.querySelector("#details")
                detail_display(title,div)
            })

            let image = document.createElement("img")
            image.src = `https://image.tmdb.org/t/p/original${poster_path}`
            
            movie.append(image)
            location.append(movie)
        }); 
    })
}

export {setdata,detail_display}
    