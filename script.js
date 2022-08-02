var characters = [
    {
        name : 'All charaters',
        image : 'image/all-charecters.jpg',
        link : 'https://ortadunya.fandom.com/wiki/Orta_D%C3%BCnya',
        explanation: "Bu kıta, Ambarkanta'da gösterilen Hither Lands'in kuzeyinde ve Doğu Denizi'nin batısındaydı; ve Birinci Çağ ve İkinci Çağ boyunca, Iluvatar'ın neden olduğu dramatik coğrafi değişikliklere uğradı. ..."
    },
    {
        name : 'Aragorn II Elessar',
        image : 'image/aragorn.jpg',
        link : 'https://ortadunya.fandom.com/wiki/Aragorn_II_Elessar?so=search',
        explanation: "Aragorn II, II. Arathorn'un ve Gilraen'in oğlu, ayrıca Elessar ve Yolgezer olarak da bilinen , Kuzey'in 16. Dúnedain Şefi; daha sonra Kral Elessar Telcontar (1 Mart 2931 - DÇ 120 veya SH 1541), 26. Arnor Kralı ve 35. Gondor Kralı - ve Isildur'un kısa saltanatının ardından ilk Gondor ve Arnor Yüksek Kralı. Büyük bir korucu ve savaşçıydı ve Isildur'un varisi olarak, Yüzük Savaşı'nda Narsil'in parçalarını yeniden dövdü ve ismini Andúril olarak yeniden adlandırdı..."
    },
    {
        name : 'Frodo Baggins',
        image : 'image/frodo.jpg',
        link : 'https://ortadunya.fandom.com/wiki/Frodo_Baggins',
        explanation: "Drogo Baggins'in oğlu Frodo Baggins, Üçüncü Çağ buyunca Shire Hobbitiydi. Geçmişte ve halen, Tek Yüzük'ü hüküm dağına götürdüğü Yüzük Görevindeki lider rolü ile ..."

    },
    {
        name : 'Gandalf The Grey',
        image : 'image/gandalf.jpg',
        link : 'https://ortadunya.fandom.com/wiki/Gandalf',
        explanation: "Drogo Baggins'in oğlu Frodo Baggins, Üçüncü Çağ buyunca Shire Hobbitiydi. Geçmişte ve halen, Tek Yüzük'ü hüküm dağına götürdüğü Yüzük Görevindeki lider rolü ile ..."
    },
    {
        name : 'Gimli',
        image : 'image/gimli.jpg',
        link : 'https://ortadunya.fandom.com/wiki/Gimli',
        explanation: "Glóin'in oğlu Gimli, Yaşlı Yıllar boyunca Orta Dünya'da saygın bir cüce savaşçısıydı. Yüzük Kardeşliği'nin bir üyesiydi ve Üçüncü Çağ'ın sonunda Sauron'a karşı yapılan savaşta elflerin yanında savaşan tek cüceydi. Sauron'un yenilgisinden sonra, Miğfer Dibi'ndeki Işıltılı Mağaralar'ın lordluğu ona verildi...."
    },
    {
        name : 'Legolas',
        image : 'image/legolas.jpg',
        link : 'https://ortadunya.fandom.com/wiki/Legolas',
        explanation: "Legolas, Üçüncü Çağdaki Yüzük Kardeşliği'nin bir parçası olan bir Sindarin elfiydi. Mirkwood'un Elf Kralı Thranduil'in oğlu olduğu için Orman Diyarının (Mirkwood) prensiydi. Legolas bir haberci ve usta bir okçuydu. Görme keskinliği, hassas duyma ve mükemmel yay kullanımıyla Legolas, Kardeşliğin diğer üyeleri için değerli bir kaynaktı. Uzun süreli farklılıklarına rağmen, cüce Gimli ile arkadaş olduğu biliniyordu ..."
    },
    {
        name : 'Samwise Gamgee',
        image : 'image/sam.jpg',
        link : 'https://ortadunya.fandom.com/wiki/Samwise_Gamgee',
        explanation: "Sam olarak bilinen Samwise Gamgee, bir Shire Hobbitiydi. Frodo Baggins'in bahçıvanı ve en iyi arkadaşıydı. Sam, Frodo'nun Yüzük Kardeşliğinde en sadık ve en güvenilir arkadaşı olduğunu kanıtladı ve Frodo'nun korunmasında ve Tek Yüzük'ün yok edilmesinde kritik bir rol oynadı. ..."
    },
    {
        name : 'Sauron',
        image : 'image/sauron.jpg',
        link : 'https://ortadunya.fandom.com/wiki/Sauron',
        explanation: "Yüzüklerin Efendisi adıyla anılan Sauron Tek Yüzüğün yaratıcısı düşmüş bir Maia idi. Efendisi Melkor 'un en güvenilir teğmeni (Morgoth , ilk Karanlık Lord). Melkor'un Valar tarafından yenilmesinden sonra , Sauron zamanla ikinci Karanlık Lord oldu ve Güç Yüzükleri ni yaratarak Arda 'yı fethetmek için çabaladı. İkinci Çağ da, Son İttifak Savaşı nda son savunma hattıyla, Gil-galad ve Elendil kralları altındaki Elfler ve İnsanlar tarafından, yenildi. ... "
    },
];

var index = 0;
var slaytCount = characters.length;
 var interval;

var settings = {
    duration : '2000',
    random: false

}
init(settings);
document.querySelector('.fa-circle-left').addEventListener('click', function(){

    index--;
    showSlayt(index);
    console.log(index);

});

showSlayt(index);

document.querySelector('.fa-circle-right').addEventListener('click', function(){
    index++;
    showSlayt(index);
    console.log(index);


});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
})

document.querySelectorAll('.arrow').forEach(function(item) {
    item.addEventListener('mouseleave',function() {
        init(settings)
    })
})


function init(settings) {
    var prev;
    interval = setInterval(function(){
        if(settings.random) {
            // random index
            do{
                index = Math.floor (Math.random() * slaytCount);

            }while (index == prev) {
                prev = index;
            }
        }else{
            //artan index
            if(slaytCount == index + 1) {
                index = -1;
            }
            showSlayt(index)
            index++;
        }
        showSlayt(index);

    },settings.duration) 
}


function showSlayt(i) {

    index = i;

    if (i<0) {
        index = slaytCount - 1;

    }
    if (i >= slaytCount) {
        index = 0;
    }

    document.querySelector('.card-title').textContent = characters[index].name;
    document.querySelector('.card-text').textContent = characters[index].explanation;

    document.querySelector('.card-img-top').setAttribute('src',characters[index].image);

    document.querySelector('.card-link').setAttribute('href', characters[index].link);

}

