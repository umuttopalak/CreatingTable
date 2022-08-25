function kaydet() {
    //inputtaki verileri alma
    var isim = document.getElementById("isim").value;
    var mail = document.getElementById("mail").value;
    var yas = document.getElementById("yas").value;
    var okul = document.getElementById("okul").value;

    //tablonun yazılacağı divi değişkene atma
    var tabloDiv = document.getElementById("tabloDiv");

    //tablonun elemanlarını oluşturma
    var table = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody = document.createElement("tbody");

    //içeriklerin satırını ekleme
    var trKisi = document.createElement("tr");

    //dataların içini doldurma
    var tdAd = document.createElement("td");
    tdAd.innerHTML = isim;
    var tdMail = document.createElement("td");
    tdMail.innerHTML = mail;
    var tdYas = document.createElement("td");
    tdYas.innerHTML = yas;
    var tdOkul = document.createElement("td");
    tdOkul.innerHTML = okul;

    //dataları satıra ekleme
    trKisi.appendChild(tdAd);
    trKisi.appendChild(tdMail);
    trKisi.appendChild(tdYas);
    trKisi.appendChild(tdOkul);

    //satırları tablonun bodysine ekleme
    tbody.appendChild(trKisi);

    //tabloya tbody yi ekleme
    table.appendChild(tbody);

    //dive class ekleme
    tabloDiv.classList.add("table", "text-left");

    //tablonun başlığının olup olmadığını kontrol etme
    var baslikKontrol = document.querySelector("#tabloDiv > table > thead");
    if (baslikKontrol == null) {

        //th başlıklarını oluşturma
        var thAd = document.createElement("th");
        var thMail = document.createElement("th");
        var thYas = document.createElement("th");
        var thOkul = document.createElement("th");
        console.log(baslikKontrol);

        //başlıkların içeriklerini girme
        thAd.innerHTML = "İsim";
        thMail.innerHTML = "Mail";
        thYas.innerHTML = "Yaş";
        thOkul.innerHTML = "Okul";

        //başlıkların etiketlerini ekleme
        thead.appendChild(thAd);
        thead.appendChild(thMail);
        thead.appendChild(thYas);
        thead.appendChild(thOkul);

        //tabloya thead i ekleme
        tabloDiv.appendChild(table);
        table.appendChild(thead);
        table.appendChild(tbody);

        //thead e classlar ekleme
        thead.setAttribute('class' , 'table-warning')

        //tbody ye classlar ekleme
        tbody.setAttribute('class' , 'table-info')

        //table a classlar ekleme
        table.setAttribute('class' , 'table')
        table.setAttribute('class' , 'table-bordered')
        table.setAttribute('class' , 'w-75')
        
        //paragrafın içeriğini değiştirme
        document.getElementById('paragraf').innerHTML = "Bilgileriniz;"

    } else {
        var eklenecekYer = document.querySelector(
            "#tabloDiv > table:nth-child(2) > tbody"
        );
        eklenecekYer.appendChild(trKisi);
    }

    //inputları sıfırlama
    document.getElementById("isim").value = "";
    document.getElementById("mail").value = "";
    document.getElementById("yas").value = "";
    document.getElementById("okul").value = "";
}
