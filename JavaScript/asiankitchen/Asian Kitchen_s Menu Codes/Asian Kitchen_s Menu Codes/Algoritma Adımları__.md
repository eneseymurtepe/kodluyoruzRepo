---
title: Algoritma Adımları**
updated: 2021-11-13 13:49:58Z
created: 2021-11-11 15:48:13Z
latitude: 41.03290000
longitude: 28.95290000
altitude: 0.0000
completed?: no
---

**Algoritma Adımları**

* * *

**Öğe Seçimi**

- btn-container ve section-center öğeleri seçilir.

**Sayfa yüklendiğinde devreye girecek fonksiyonu başlatma**

- listAllFoods isimli fonksiyon başlatılır.

**Butonları ID vererek sıfırdan oluşturma**

-  createButton değişkenine, btnName fonksiyonu atanır.
-  btn isimli değişken oluşturulup Bootstrap outline butonu verilir.
-  Butona id ve btnName'i ${btnName} şeklinde tanımlanır.
-  Butona "btn-item" classı dahil edilir.
-  Fonksiyondan, btn sonucunu döndürmesi beklenir.


**Butonları UI kısmına ekleme**

- addButtonsToUI fonksiyonu fat arrow aracılığı ile oluşturulur.
- btnContainer'ın içeriğine createButton metodu, buton isimleri ile birlikte eklenir.
- Yukarıdaki adım tüm butonlara uygulanır.
- addButtonsToUI fonksiyonu çağrılır.

**Button Event Listeners**

- All, Korean, Japan ve China butonları tek tek seçilir.
- Bu butonlara click eventi atanır.

**Bütün yemekleri listeler; sayfa ilk yüklendiğinde ve All butonunun triggerlanması ile çalışır**

- listAllFoods fonksiyonu oluşturulur.
- allMenu değişkeni tanımlanır ve içerisi boş bırakılır.
- menu, map fonksiyonu ile maplenir ve x parametresi verilir.
- `allMenu += createObject(x);`
- Seçilen section-center'ın içeriğine allMenu değişkeni atanır.

**Kore yemeklerini listeleme**

- listKoreanFoods fonksiyonu oluşturulur.
- allMenu değişkeninin içeriği boş bırakılır.
- menu objesi maplenir.
- Eğer parametre olarak verilen x'in category'si Korean'a eşit ise
- `allMenu += createObject(x);`
- Seçilen section-center'ın içeriğine allMenu değişkeni atanır.

**Japan yemeklerini listeleme**

- listJapanFoods fonksiyonu oluşturulur.
- allMenu değişkeninin içeriği boş bırakılır.
- menu objesi maplenir.
- Eğer parametre olarak verilen x'in category'si Japan'a eşit ise
- `allMenu += createObject(x);`
- Seçilen section-center'ın içeriğine allMenu değişkeni atanır.

**China yemeklerini listeleme**

- listChinaFoods fonksiyonu oluşturulur.
- allMenu değişkeninin içeriği boş bırakılır.
- menu objesi maplenir.
- Eğer parametre olarak verilen x'in category'si China'ya eşit ise
- `allMenu += createObject(x);`
- Seçilen section-center'ın içeriğine allMenu değişkeni atanır.

**Tek bir yemeğin gövdesini oluşturma**

- createObject fonksiyonu oluşturulur.
- Parametre olarak food verilir.
- item isimli değişken oluşturulur .
- item değişkeninin içeriği aşağıdaki gibi olmalıdır.
- `<div class="menu-items col-lg-6 col-sm-12">
     <img src="${food.img}" alt="${food.title}" ramen="" class="photo">
        <div class="menu-info">
            <div class="menu-title">
                <h4>${food.title} Ramen</h4>
                <h4 class="price">${food.price}</h4>
              </div>
              <div class="menu-text">
                ${food.desc}
              </div>
            </div>
          </div>`
- Son olarak item dönülür.