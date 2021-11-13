const axios = require("axios");
const cheerio = require("cheerio");

let articles4gnews = []
let articlesNoticiaAoMinuto = []
let articlesSapo = []
let articlesTecMundo = []
let articlesTugaTech = []

exports.get4gnews = (req, res ) => {
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

                    })
                }
            })
            res.json(articles4gnews)
        }).catch((err) => console.log(err))
}

exports.getSapo = (req, res ) => {
    articlesSapo = []
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

                    })
                }
            })
            res.json(articlesSapo)
        }).catch((err) => console.log(err))
}



exports.getNoticiaAoMinuto = (req, res ) => {
    articlesNoticiaAoMinuto = []
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

                    })
                }
            })
            res.json(articlesNoticiaAoMinuto)
        }).catch((err) => console.log(err))
}

exports.getTecMundo = (req, res ) => {
    articlesTecMundo = []
    axios.get("https://www.tecmundo.com.br/novidades")
        .then((response) =>{
            const html = response.data;
            const $ = cheerio.load(html);
            
            $('h3', html).each(function () {
                if($(this).attr('class') == 'tec--card__title'){
                    const sc = $(this).children('a').each(function() {
    
                        let title = '';
                        if($(this).attr('title') == null){
                            title = $(this).text().trim();
                        }else{
                            title = $(this).attr('title');
                        }
                        
                        const url = $(this).attr('href');
            
    
                        articlesTecMundo.push({
                            name: "tecmundo",
                            title,
                            url
                        }) 

                    })
                }
            })
            res.json(articlesTecMundo)
        }).catch((err) => console.log(err))
}

exports.getTugaTech = (req, res ) => {
    articlesTugaTech = []
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

                    })
                }
            })
            res.json(articlesTugaTech)
        }).catch((err) => console.log(err))
}
