window.onload = () => {
    (async () => {
        var selected = '';
        var ele = document.getElementsByName('btnradio');
                
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked){
            selected = ele[i].getAttribute("value")
            }
            
        }

        const urlBase = "http://localhost:8080/api/" + selected;
        const listArticles = document.getElementById("articles");
        const desc = document.getElementById("desc");
        let texto = "";

        if(selected == "home"){
            listArticles.innerHTML = "";
            desc.innerHTML = "";
      
            texto += `
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="images/4gnews.png" class="d-block w-100" height="450px" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/noticiasaominuto.png" class="d-block w-100" height="450px" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/sapo.png" class="d-block w-100" height="450px" alt="...">
              </div>
              <div class="carousel-item">
                <img src="images/tugatech.png" class="d-block w-100" height="450px" alt="...">
              </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
            <div class="card">
                <div class="card-body" style="text-align: center; font-size:25px; font-family: sans-serif">
                    Este site tem como objetivo mostrar as notícias sobre tecnologia de diferentes fontes.
                </div>
                </div>
            `
            
            ;
      
      
            desc.innerHTML = texto;
      
            return;
        }else{
          desc.innerHTML = "";
        }

        var myHeaders = new Headers();

        var myInit = { method: "GET", headers: myHeaders};

        var myRequest = new Request(`${urlBase}`, myInit);

        await fetch(myRequest).then(async function (response){
            if(!response.ok) {
                listArticles.innerHTML = "Não posso mostrar artigos de momento!";
            }else{
                articles = await response.json();
                listArticles.innerHTML = texto;
                for(const article of articles){
                   texto += `
                   <div class="col-sm-6">
                        <div class="card mb-3">
                            <div class="card-body">
                            <h5 class="card-title">${article.name}</h5>
                            <p class="card-text">${article.title}</p>
                            <a href="${article.url}" class="btn btn-primary">Go to site</a>
                            </div>
                        </div>
                    </div>
                   
                   `;
                }
                listArticles.innerHTML = texto;
            }
        });

    })();
}