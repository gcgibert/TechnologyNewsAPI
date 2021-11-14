const axios = require("axios");
const cheerio = require("cheerio");

let allArticles = []

let articles4gnews = []
let articlesNoticiaAoMinuto = []
let articlesSapo = []
let articlesTugaTech = []

axios.get("https://4gnews.pt/")
.then((response) =>{
    const html = response.data;
    const $ = cheerio.load(html);
    
    $('div', html).each(function () {
        if($(this).attr('class') == 'row'){
            const sc = $(this).children('a').each(function() {

                let title = '';
                if($(this).attr('title') == null){
                    title = $(this).text().trim();
                }else{
                    title = $(this).attr('title');
                }
                
                const url = "https://4gnews.pt" + $(this).attr('href');
    

                articles4gnews.push({
                    name: "4gnews",
                    title,
                    url
                }) 

                allArticles.push({
                    name: "4gnews",
                    title,
                    url
                }) 

            })
        }
    })
}).catch((err) => console.log(err))

axios.get("https://www.sapo.pt/noticias/tecnologia")
.then((response) =>{
    const html = response.data;
    const $ = cheerio.load(html);
    
    $('h6', html).each(function () {
        if($(this).attr('class') == '[ no-margin-bottom ] title'){
            const sc = $(this).children('a').each(function() {

                let title = '';
                if($(this).attr('title') == null){
                    title = $(this).text().trim();
                }else{
                    title = $(this).attr('title');
                }
                
                const url = $(this).attr('href');
    

                articlesSapo.push({
                    name: "Sapo",
                    title,
                    url
                }) 

                allArticles.push({
                    name: "Sapo",
                    title,
                    url
                })

            })
        }
    })
    
}).catch((err) => console.log(err))

axios.get("https://www.noticiasaominuto.com/tech")
.then((response) =>{
    const html = response.data;
    const $ = cheerio.load(html);
    
    $('p', html).each(function () {
        if($(this).attr('class') == 'article-thumb-text'){
            const sc = $(this).children('a').each(function() {

                let title = '';
                if($(this).attr('title') == null){
                    title = $(this).text().trim();
                }else{
                    title = $(this).attr('title');
                }
                
                const url = $(this).attr('href');
    

                articlesNoticiaAoMinuto.push({
                    name: "Notícias ao Minuto",
                    title,
                    url
                }) 

                allArticles.push({
                    name: "Notícias ao Minuto",
                    title,
                    url
                }) 

            })
        }
    })
}).catch((err) => console.log(err))

axios.get("https://tugatech.com.pt/f15-noticias-da-internet-e-mercados")
.then((response) =>{
    const html = response.data;
    const $ = cheerio.load(html);
    
    $('h2', html).each(function () {
        if($(this).attr('class') == 'topic-title hierarchy'){
            const sc = $(this).children('a').each(function() {

                let title = '';
                if($(this).attr('title') == null){
                    title = $(this).text().trim();
                }else{
                    title = $(this).attr('title');
                }
                
                const url = "https://tugatech.com.pt/" + $(this).attr('href');
    

                articlesTugaTech.push({
                    name: "TugaTech",
                    title,
                    url
                }) 

                allArticles.push({
                    name: "TugaTech",
                    title,
                    url
                }) 

            })
        }
    })
}).catch((err) => console.log(err))


exports.get4gnews = (req, res ) => {
    res.json(articles4gnews)
}

exports.getSapo = (req, res ) => {
    //articlesSapo = []
    res.json(articlesSapo)
}



exports.getNoticiaAoMinuto = (req, res ) => {
    res.json(articlesNoticiaAoMinuto)
    
}

exports.getTugaTech = (req, res ) => {
    res.json(articlesTugaTech)
}

exports.getAllArticles = (req, res ) => {
    res.json(allArticles)
}

////////////////////////////////////////////

setInterval(() =>{
    allArticles = []
    articles4gnews = []
    axios.get("https://4gnews.pt/")
    .then((response) =>{
        const html = response.data;
        const $ = cheerio.load(html);
        
        $('div', html).each(function () {
            if($(this).attr('class') == 'row'){
                const sc = $(this).children('a').each(function() {

                    let title = '';
                    if($(this).attr('title') == null){
                        title = $(this).text().trim();
                    }else{
                        title = $(this).attr('title');
                    }
                    
                    const url = "https://4gnews.pt" + $(this).attr('href');
        

                    articles4gnews.push({
                        name: "4gnews",
                        title,
                        url
                    }) 

                    allArticles.push({
                        name: "4gnews",
                        title,
                        url
                    }) 

                })
            }
        })
    }).catch((err) => console.log(err))

    articlesSapo =[]
    axios.get("https://www.sapo.pt/noticias/tecnologia")
    .then((response) =>{
        const html = response.data;
        const $ = cheerio.load(html);
        
        $('h6', html).each(function () {
            if($(this).attr('class') == '[ no-margin-bottom ] title'){
                const sc = $(this).children('a').each(function() {

                    let title = '';
                    if($(this).attr('title') == null){
                        title = $(this).text().trim();
                    }else{
                        title = $(this).attr('title');
                    }
                    
                    const url = $(this).attr('href');
        

                    articlesSapo.push({
                        name: "Sapo",
                        title,
                        url
                    }) 

                    allArticles.push({
                        name: "Sapo",
                        title,
                        url
                    })

                })
            }
        })
        
    }).catch((err) => console.log(err))

    articlesNoticiaAoMinuto=[]
    axios.get("https://www.noticiasaominuto.com/tech")
    .then((response) =>{
        const html = response.data;
        const $ = cheerio.load(html);
        
        $('p', html).each(function () {
            if($(this).attr('class') == 'article-thumb-text'){
                const sc = $(this).children('a').each(function() {

                    let title = '';
                    if($(this).attr('title') == null){
                        title = $(this).text().trim();
                    }else{
                        title = $(this).attr('title');
                    }
                    
                    const url = $(this).attr('href');
        

                    articlesNoticiaAoMinuto.push({
                        name: "Notícias ao Minuto",
                        title,
                        url
                    }) 

                    allArticles.push({
                        name: "Notícias ao Minuto",
                        title,
                        url
                    }) 

                })
            }
        })
    }).catch((err) => console.log(err))

    
    articlesTugaTech=[]
    axios.get("https://tugatech.com.pt/f15-noticias-da-internet-e-mercados")
    .then((response) =>{
        const html = response.data;
        const $ = cheerio.load(html);
        
        $('h2', html).each(function () {
            if($(this).attr('class') == 'topic-title hierarchy'){
                const sc = $(this).children('a').each(function() {

                    let title = '';
                    if($(this).attr('title') == null){
                        title = $(this).text().trim();
                    }else{
                        title = $(this).attr('title');
                    }
                    
                    const url = "https://tugatech.com.pt/" + $(this).attr('href');
        

                    articlesTugaTech.push({
                        name: "TugaTech",
                        title,
                        url
                    }) 

                    allArticles.push({
                        name: "TugaTech",
                        title,
                        url
                    }) 

                })
            }
        })
    }).catch((err) => console.log(err))


}, 300000);
