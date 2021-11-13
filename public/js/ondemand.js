async function getArticles() {
    var selected = '';
    var ele = document.getElementsByName('btnradio');
              
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
          selected = ele[i].getAttribute("value")
        }
        
    }

    console.log(selected)
    document.getElementById
    const urlBase = "http://localhost:8080/api/";
    
    const listaArticles = document.getElementById("articles");
    let texto = "";
    let myHeaders = new Headers();
    let url = urlBase + selected;
  
    console.log("URL: " + url);
    const myInit = { method: "GET", headers: myHeaders };
    const myRequest = new Request(url, myInit);
  
    await fetch(myRequest).then(async function (response) {
      if (!response.ok) {
        listaArticles.innerHTML = "Não posso mostrar artigos de momento!";
      } else {
        articles = await response.json();
        listaArticles.innerHTML = "";
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
        
        listaArticles.innerHTML = texto;
      }
    });

  }
  