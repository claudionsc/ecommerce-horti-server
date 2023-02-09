const models = require('../models')

async function insert() {
    const maçã = await models.frutas.create({
        genero: "Malus",
        nome: "Maçã",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'http://d3ugyf2ht6aenh.cloudfront.net/stores/001/194/977/products/maca-argentina11-68d8258460c266fbb315897570107345-640-0.jpg'
    })
    const damasco = await models.frutas.create({
        genero: "Prunus",
        nome: "Damasco",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'https://befreshcorp.net/wp-content/uploads/2017/07/product-packshot-apricot.jpg'
    })
    const banana = await models.frutas.create({
        genero: "Musa",
        nome: "Banana",
        familia: "Musaceae",
        ordem: "Zingiberales",
        imagem: 'https://www.hortifrutiorganico.com.br/121-large_default/banana-organica-prata-1-kg.jpg'
    })
    const amora = await models.frutas.create({
        genero: "Rubus",
        nome: "Amora",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'https://atlas-content1-cdn.pixelsquid.com/assets_v2/250/2506038995180328879/jpeg-600/G03.jpg'
    })
    const mirtilo = await models.frutas.create({
        genero: "Fragaria",
        nome: "Mirtilo",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'https://cdn.awsli.com.br/600x450/1348/1348550/produto/110098355/ba6b6f1db3.jpg'
    })
    const cereja = await models.frutas.create({
        genero: "Prunus",
        nome: "Cereja",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Cherry_Stella444.jpg/480px-Cherry_Stella444.jpg'
    })
    const durião = await models.frutas.create({
        genero: "Durio",
        nome: "Durião",
        familia: "Malvaceae",
        ordem: "Malvales",
        imagem: 'https://static.wixstatic.com/media/d40923_ccbd79a1c85b451d8929fa3dbb79109b~mv2.jpg/v1/crop/x_117,y_63,w_772,h_880/fill/w_420,h_482,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d40923_ccbd79a1c85b451d8929fa3dbb79109b~mv2.jpg'
    })
    const figo = await models.frutas.create({
        genero: "Ficus",
        nome: "Figo",
        familia: "Moraceae",
        ordem: "Rosales",
        imagem: 'https://cdn-cosmos.bluesoft.com.br/products/7898558730196'
    })
    const uva = await models.frutas.create({
        genero: "Vitis",
        nome: "Uva",
        familia: "Vitaceae",
        ordem: "Vitales",
        imagem: 'https://supernossoio.vtexassets.com/arquivos/ids/192836/Uva-Vitoria-Sem-Semente-500g.jpg?v=637776893855500000'
    })
    const maçãVerde = await models.frutas.create({
        genero: "Malus",
        nome: "Maçã Verde",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'https://fruityland.co/wp-content/uploads/2021/01/Granny-smith-green-apple-FL.jpg'
    })
    const goiaba = await models.frutas.create({
        genero: "Psidium",
        nome: "Goiaba",
        familia: "Myrtaceae",
        ordem: "Myrtales",
        imagem: 'https://nicliquid.com/189-large_default/guava-flavor-concentrate.jpg'
    })
    const kiwi = await models.frutas.create({
        genero: "Apteryx",
        nome: "Kiwi",
        familia: "Actinidiaceae",
        ordem: "Struthioniformes",
        imagem: 'https://www.varanda.com.br/media/catalog/product/cache/1/image/1200x/9df78eab33525d08d6e5fb8d27136e95/k/i/kiwi.jpg'
    })
    const limãoSiciliano = await models.frutas.create({
        genero: "Citrus",
        nome: "Limão Siciliano",
        familia: "Rutaceae",
        ordem: "Sapindales",
        imagem: 'https://hiperideal.vteximg.com.br/arquivos/ids/167814-1000-1000/95605.jpg?v=636615816672870000'
    })
    const limão = await models.frutas.create({
        genero: "Citrus",
        nome: "Limão",
        familia: "Rutaceae",
        ordem: "Sapindales",
        imagem: 'https://cdn.diferenca.com/imagens/limao-taiti-cke.jpg'
    })
    const lichia = await models.frutas.create({
        genero: "Litchi",
        nome: "Lichia",
        familia: "Sapindaceae",
        ordem: "Sapindales",
        imagem: 'https://xflavors.net/uploads/thumbs/produtos/HbSHT8Fry1slGEShO6g3KIn3l24GnyWhwGBqUA3u.jpeg'
    })
    const manga = await models.frutas.create({
        genero: "Mangifera",
        nome: "Manga",
        familia: "Anacardiaceae",
        ordem: "Sapindales",
        imagem: 'https://saberhortifruti.com.br/wp-content/uploads/2020/05/manga-tipo-rosa.jpg'
    })
    const melão = await models.frutas.create({
        genero: "Cucumis",
        nome: "Melão",
        familia: "Cucurbitaceae",
        ordem: "Cucurbitaceae",
        imagem: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/melaoamarelo1_502698640_jpg_1024x1024[1]-1000x1000.jpg'
    })
    const laranja = await models.frutas.create({
        genero: "Citrus",
        nome: "Laranja",
        familia: "Rutaceae",
        ordem: "Sapindales",
        imagem: 'http://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Orange-Fruit-Pieces.jpg/800px-Orange-Fruit-Pieces.jpg'
    })
    const mamão = await models.frutas.create({
        genero: "Carica",
        nome: "Mamão",
        familia: "Caricaceae",
        ordem: "Caricacea",
        imagem: 'https://mambodelivery.vtexassets.com/arquivos/ids/172967/mamao-papaya-1-unidade.jpg?v=637883310742530000'
    })
    const maracujá = await models.frutas.create({
        genero: "Passiflora",
        nome: "Maracujá",
        familia: "Passifloraceae",
        ordem: "Malpighiales",
        imagem: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/maracuja1-2d546f9511ade610c015221745690678-1024-1024.jpg'
    })
    const pera = await models.frutas.create({
        genero: "Pyrus",
        nome: "Pera",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'http://static3.tcdn.com.br/img/img_prod/450860/muda_de_pera_d_agua_ou_europeia_1m_enxertada_676_1_20190611093602.jpg'
    })
    const caqui = await models.frutas.create({
        genero: "Diospyros",
        nome: "Caqui",
        familia: "Ebenaceae",
        ordem: "Rosales",
        imagem: 'https://www.ammarket.com/wp-content/uploads/2021/12/kaki_ammarket_1.jpg'
    })
    const abacaxi = await models.frutas.create({
        genero: "Ananas",
        nome: "Abacaxi",
        familia: "Bromeliaceae",
        ordem: "Poales",
        imagem: 'https://cdn.awsli.com.br/600x700/305/305913/produto/10189815/abacaxi-1441a8b7.jpg'
    })
    const ameixa = await models.frutas.create({
        genero: "Prunus",
        nome: "Ameixa",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'https://deskontao.agilecdn.com.br/3699_1.jpg'
    })
    const framboesa = await models.frutas.create({
        genero: "Rubus",
        nome: "Framboesa",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'https://p.turbosquid.com/ts-thumb/tW/IuwoWz/mKo6bhnv/render_01/jpg/1529174132/600x600/fit_q87/a4a709689ba4a4443cad57ba2ef22075800a6e53/render_01.jpg'
    })
    const morango = await models.frutas.create({
        genero: "Fragaria",
        nome: "Morango",
        familia: "Rosaceae",
        ordem: "Rosales",
        imagem: 'https://www.infoescola.com/wp-content/uploads/2009/09/morangos1.jpg'
    })
    const tomate = await models.frutas.create({
        genero: "Solanum",
        nome: "Tomate",
        familia: "Solanaceae",
        ordem: "Solanales   ",
        imagem: 'https://scfoods.fbitsstatic.net/img/p/tomate-debora-maduro-para-molho-500g-70892/257510.jpg?w=800&h=800&v=no-change&qs=ignore'
    })
    const umbu = await models.frutas.create({
        genero: "Spondias",
        nome: "Umbu",
        familia: "Anacardiaceae",
        ordem: "",
        imagem: 'https://s.cornershopapp.com/product-images/3797983.jpg?versionId=XVez0L1rxSqSTGlAEo8ZG.9rAF2yQ0Tw'
    })
    const melancia = await models.frutas.create({
        genero: "Citrullus",
        nome: "Melancia",
        familia: "Cucurbitaceae",
        ordem: "Cucurbitales",
        imagem: 'https://us-southeast-1.linodeobjects.com/storage/fazfeira/media/uploads/produto/melancia_comum_peda_o_a9e7c957-b7ab-4613-a008-aec4cbf77be4.jpg'
    })

    console.log('-----> INSERT < ----')
}

insert()