async function enviarRegisto() {
    const textSearch = document.getElementById("textSearch").value;
    const urlBase = "http://localhost:8080/api/:" + textSearch;
  
    if (textSearch == ""){
        //listArticles.innerHTML = "Deve informar os nomes da disciplina e do docente!";
      return;
    }
  
    const listArticles = document.getElementById("articles");
    let texto = "";
    var myHeaders = new Headers();

    var myInit = { method: "GET", headers: myHeaders};

    var myRequest = new Request(`${urlBase}`, myInit);

    await fetch(myRequest).then(async function (response){
        if(!response.ok) {
            listArticles.innerHTML = "Não posso mostrar artigos de momento!";
        }else{
            listArticles.innerHTML = "";
            articles = await response.json();
            console.log(articles);
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

  }
  