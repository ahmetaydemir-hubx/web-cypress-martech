- Slack
- Notion
- Google Workspace
- CookieBot - ConsentModal
    https://chatbot.app/ consent modal otomatik accept ediyor, ve cookie policy sayfası 404 açıyor
    https://chatbotapp.ai farklı landing sayfası aynı consent modal'i ama farklı davranıyor. Consentler iki sayfa arasında taşınabilir.
- Google Tag Manager
    GTM-MJ4X69FZ
    https://photoapp.org/ sayfasında GTM görmedim, tracking yapılıyor mu? Buna benzer sayfalar var sanırım takip edilmesine gerek yok, app QR linkleri direk store linkleri. 
    https://davinci.ai/download Ama davinci web sayfasındaki linkler appsflyer'dan onelink olarak konulmuş. ne zaman onelink ne zaman direkt link ayrımı?
- Stape
- Appsflyer
- Meta Ads
- Google Ads
- Tiktok Ads
- Framer
    Marketing ve lead için landing sayfaları framer gerisi handcoded app farklı domainlerde
    Manuel sayfalar React.js yazılıyor, Next.js gözükmüyor direkt React gibi
- Figma
- MS Clarity ( Özge Zavuk )
- KolayIK - https://app.kolayik.com/home

- web2wave - Anket tarzı payment başlama
    https://www.web2wave.com/
- Paddle payment processing için kullandıkları servis
    https://www.paddle.com/

My Seat : G8

?   AI API taksonomisi 
    https://api.tattoo.ai/v2/hubx/process/txt-image
    https://api.aiapp.ai/api/chat
    https://api-web.davinci.ai/process/txt-image


? Chatbot ai smart assistant ve nova'nın ana farkı ne? İşlev ve pazarlama olarak benzer geldi. Biri ScaleUp'tan publish edili biri HubX hesabından.
https://chat.novaapp.ai/?model=gpt-3.5 Nova'nın da web app'i varmış, hem app hem web. Diğer chatbot ile ürünsel odak farkı?

Bolca web2app olacak, 
Sadece web odaklı olan da var ama daha azmış

Nova Appsflyer integrations içinde Unity Ads gördüm acaba o neden?
NOVA META VE GOOGLEADS ATTRIBUTION SURELERI BEKLE

Weekly Creative Meeting - Kampanya creativelerinin iteration ideation ve komple yeni denemelerinin bakılması ve planlanması

after_purchase eventi için lockWindow kullanılıyor mu, SKAN 4.0?

enhanced attribution firebase sayıları yanlış, appflyer'dan farklı çıkıyor sayılar. teknik olarak sıkıntyı 
    kontrol için yardım
    appsflyer ios sdk 6.17.6
    firebase ios sdk 11.14.0,
    appflyer partner integration içinde advanced data sharing toggle
agent deploy edilebilmesi için slack admininin appsflyer'ı authorize etmesi gerekiyor


Mert webapp chatbot web2web zaten gtm stape capi
Uğur web2app landing page yap onelink yönlendir, veya web2wave ile quizimsi yap paywall direk sonra yönlendir. Web2wave kendisi verileri postback ediyor pixel'lere. Klasik landing page ile Appsflyer'a install ve yönlendirme app için SDK üzerinden postbackler atıyor ve attribution gerçekleşiyor.

DramaShorts gibi coin bazlı kullanımı da olan ürünler, sadece install ve subscription attribution değil, re-engagement'a da bakıyor farklı bir looker lookback window'u ile.

------------------------

DramaShorts'un webapp'i otomatik olarak consent'i kabul etmiş sayıyor = https://drama.tv/ 

Appsflyer.JS'i smart script builder ekli sayfalar var, kullanım case'leri için araştırma.

paddle ve stripe web, adapty mobile recur/onetime payment işlemleri için SDK

Looker'daki değerler appsflyer event ve install api'leri ile çekiliyor, sonra adapty'den veri çekiliyor revenue subscription verileri. Adapty SDK appsflyer id'yi kullanıyor client'ta, onuun için çekilen rawdata LoookerGCloud'da appsflyer tablosu ile join ediliuor appsflyer'ın unique id'si kullanılarak. Bu veriler daha sonra marketing dashboard'lara yansıtılıyor. İçinde predicted değerler de bulunmakta, predicted olanlar t-1 bakılmalı, gün içi değerler güvenilir çıkmıyor. Predicted olmayan raw data'dan process edilmeden konulan veriler, son API postbacklerinin işlendiği saatin verileri. Bu dashboard'ların oluşumu için kullanılan API'ler EventHealthCheck panelinde Appsflyer baseline alınarak diğer Google,Meta,Adapty gibi API'den gelen değerler ile karşılaştırılıyor.


1- Unity kullanımı olan ürün varmış, IQ Booster ReactNative içine Unity gömülü
2- Sayfalarda genelde React görüyorum, Next değil düz React. 
3- Çoğu webapp SPA, window refreshlenmiyor
4- Landing sayfaları framer'dan oluşturulmuş veya nextJS ile yazılmış gördüm, webapp ile codebase'leri ayrı ve domainler ayrı, aralarında cookie taşınmıyor crossdomain tracking. Bir Nova'nın landing'i next js gördüm.
5- Nova ve ChatbotApp'in gtm container'ı farklı gözüküyor. Nova'nın landing'i next js yazılmış
6- App'lerde OneSignal SDK'i gördüm, engagement için push notif SMS
7- Firebase SDK, aplikasyonlarda, Adapty Recurring ve Coin alımı gibi payment'lar için kullanuılıyor. Adapty unique identifier Appsflyer'ın generate ettiği unique identifier. 
8- ReactNative/Flutter mi, PlatformNative codebase'ler ile mi ilerleniyor, ağırlık ne şekilde şu an uygulamalar için
9- Frontend için sayfalara consent popup'ı sizin tarafınızdan mı ekleniyor, GTM aracılığı ile mi, otomatik kabul edildiği veya çıkmadığı sayfalar gördüm. https://chat.chatbot.app/
10- Reklamlar için yaptığınız "w2a" pathinde olan redirection sayfalarının düzeni nasıl, içeride GTM görmedim, manuel eklenmiş bir tracking var, appsflyer.js link builder ile.
11- w2a sonu konan ?target=meta parametresi ne için kullanılıyor.

------------------------
-------------------------------
Özge Zaugg Product - 11:00
Kerem Tüfekçi Product - 11:30
Ahmet, Berke Data - 12:00
Oğuzhan Foto - 12:45
Deniz Appsflyer - 14:00
Pelin Sağlam ProjectManager - 14:30
Alperen Performance - 15:00
Gamze, Erdal Marketing - 15:30
Ömer React Native - 16:00
Ahmet Data - 16:30
Şule Backend - 18:00
-------------------------------
------------------------

W2A - Hardcodedd Landing Page Click Journey - Backend Attribution Postback Passing
https://www.notion.so/1fbcdbb9b4c8803283fdde118a8dc124?v=1fbcdbb9b4c881bd9826000cd12fa105

GTM - Stape - Backend Offline Conversion API Trigger with Cookie ID
https://www.notion.so/Stape-1d2cdbb9b4c8814bbecffd301d9ef33d

Looker - Event Health Check Appsflyer Adapty ve Farklı BE AdNetwork Veri Akışlarının Teyit Edilmesi, Calculated Metric Design'ı
https://docs.google.com/spreadsheets/d/1LqKtYwOUWZx7a8vCyASupHzAUh5m5GSJGhdeCQdvltA/edit?gid=0#gid=0
- Meta W2A - ? Appflyer'dan çekilen ve Meta'dan çekilen veriler karşılaştırılıyor diye anladım, yine birkaç soru işareti var ?
- Landing Page Health Check - Landing Page View ve Form Start veya Auto-Redirection oranları ve BE API'si ne kadar hata aldı oranı
- Google W2A - ? Buradaki veri akışı hangi API'lerden W2A'de google reklam akışı nasıl kontrol, hardcoded implementasyon görmedim ?
- Meta AEM - eventler arası IDFA IDFV IP UserAgent
- Looker Appsflyer Adapty - Adapty'den eventler çekiliyor revenue ile, içinde attribution yok. Adapty Appsflyer arası integration varmış, bilgiler Appflyer'a akıyor. Appsflyer'dan eventler çekiliyor BigQuery'e ve bunun içinde attribution yanında Adapty'deki değerler de oluyor. Sonra da Adapty'den direk çekilenler ve Appsflyer'dan indirekt gelenler arasında karşılaştırma oluyor. Üçgen akış.

-------- Google W2A -----------
Google W2A Sanıırm onelink içine gclid eklenip sonra onun işlenmesiyle yapılan bir takip var, Mert Aslanoğlu marketing tarafı, Ahmet Yurdakul Data tarafı. 
searchDisplay ve Pmax kampanyaları için açık olan bir sistem, META VE TIKTOK backend tarafından CAPI ile beslenen bir yapıda çalışıyor. Gclid'li bir onelink ile uygulamaya yönlenme gerçekleşiyor, bu sırada gclid Appsflyer tarafından raw data'ya yazılıyor Google olarak attribute da edilerek. Appsflyer'dan rawdata çekiliyor bigquery'de, bigquery'de raw data içinde gclidli rowlar filtreleniyor ve airflow dag'inde işlenmeye başlıyor. Airflow dag'i bu verileri pyhton'da Google Ads API kullanarak ilgili app'in Google Ads account'una upload ediyor. Her app'in dag'i ayrı ve account'u ayrı. Şu anki API 21, versiyon 2 sürümde bir güncelleniyor. Google Ads upload edilmiş gclid verileri valide sürecine başlıyor. Generate edilmemiş Gclid'ler, lookback window 7 gün dışı expire olan gclid'ler ve başka şartlardan elenenler oluyor. Kalanlar da valide bir şekilde import'u tamamlanmış hale geliyor. Qualified leads içinde after_purchase bakabilirsin. Her goal için value paslanmıyor. cpc_ ile başlayan dosyalar bunlar, bu entegrasyondan


taylan looker marketing folder'ı health check folder'ı yetki, bigquery viewer yetkisi healthcheck tablosunun SQL'ine bakmak için

subscription - afterpurchase - purchase

tiktok ve meta mappingleri
purchase düz revenue
subscribe redicted revenue
page view var
lead clicklenmesi w2a'yin, auto-redir varsa pageview'a yakın
ViewContent install 
AddToCart paywall'un gözükmesi
AddToWishlist purchase within 1 hour

chatbotapp.ai ayrı tutuluyor, standardize GTM setup'ından !
web2wave kullanarak webGrowth ekibi funnel oluşturuyor, bunun kendi GTM ve Stape setup'ının olması eforu !


Ahmet Yurdakul - Google W2A Appsflyer Gclid Filter G-Ads-API Push
    https://ads.google.com/aw/conversions?ocid=917868625&ascid=917868625&euid=863626782&__u=1871647918&uscid=917868625&__c=4451087625&authuser=0&subid=tr-tr-ha-aw-bk-c-bau%21o3~Cj0KCQiAiKzIBhCOARIsAKpKLAOSGJuSpoHYiMtBMZiq3T5Fo7rO0dWfzaQiyYkJDgj8F2dM5Cvsa78aAoK8EALw_wcB~180273749220~kwd-110208385~22551160523~751835999717-ahpm-0000000192-0000000001-ahpm-0000000192-0000000001
Atakan Şengöz - Google Offline Conversion Webhook From Stape Events /data 
    https://hubx-co.slack.com/archives/C09J4J8FW7R/p1764835009204439?thread_ts=1764834422.112249&cid=C09J4J8FW7R
Berkay Gümüştekin - W2A Click & Auto-redirection Page Development With Hardcoded Meta, Tiktok, Pinterest, Snap, Newsbreak Pixels
    https://www.notion.so/Stape-1d2cdbb9b4c8814bbecffd301d9ef33d
Levent Uysal - W2A CAPI Backend Event Mapping And Push To Ad Networks
    https://www.notion.so/1fbcdbb9b4c8803283fdde118a8dc124?v=1fbcdbb9b4c881bd9826000cd12fa105
Alperen İnce - W2A Meta ve Tiktok Event Mapping & Ad Data Source & Smart Script Variables W2A UTM Querystring - Pixel ID Mappings for Frontend
    linkAtılmadı
    https://docs.google.com/spreadsheets/d/1LqKtYwOUWZx7a8vCyASupHzAUh5m5GSJGhdeCQdvltA/edit?gid=0#gid=0
Pelin Sağlam - Frontend Backend Backlog Management JIRA
    https://hubx-co.slack.com/archives/C09J4J8FW7R
Osman Berke Çankaya - Looker Health Check Dashboard Management
    yetkiAlınmadı

---------

inital purchase =  trial'sız aylık/haftalık satın alım gerçekleşince, 
   ? = weekly/monthly fiyat * (ülke/product/mediaSource/platform segmentli) renewal multiplier  

trial ürün başlatma = 3 gün sonra cancel edilmezse subscription'a dönecek ürün
   ? = TrialBaşlatanCount * Trial D1/D2/D3 pCR (Cancel eden müşteri sayısına göre) *  

paid intro offer trial 8

90 günde de late multiplier

web2wave funnel payops can, gtm stape dataLaayer eventlerini push etme

