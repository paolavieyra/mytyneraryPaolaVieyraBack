import 'dotenv/config.js'
import { connect } from 'mongoose'
import City from '../City.js'
import User from '../User.js'

const cities = [{
    country: "Qatar" ,
    creationDate: "2023-08-22",
    population: 2795484 ,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrFOBv9BuFkSkMvWCqt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzkzNjA4Yzk5NjZhNTI5ODljOGU5OGQyYmFhZTRjNzdhBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfotos%2Bde%2Bdoha%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D12&w=2000&h=1154&imgurl=www.guideoftheworld.com%2Fwp-content%2Fuploads%2Fphotos%2Fdoha_city_center_qatar.jpg&rurl=http%3A%2F%2Fwww.guideoftheworld.com%2Fqatar-photos.html&size=307.5KB&p=fotos+de+doha&oid=93608c9966a52989c8e98d2baae4c77a&fr2=piv-web&fr=mcafee&tt=Qatar+Photos+-+Guide+of+the+World&b=0&ni=21&no=12&ts=&tab=organic&sigr=exoTr9Q6fodp&sigb=VUrxBXFB42J0&sigi=RKPbXg3Joy3g&sigt=oHSsrOQ4WUi.&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Doha",
    featuredLocation:  "Desert safaris, archaeological sites, forts, Banana Island, Sheikh Faisal Bin Qassim Al Thani Museum, Al Dhakira Mangroves. Horse and camel racing, popular beaches, hotels, souqs.",
    officialLanguage: "Arabic",
    officialReligión: "Islam",
    goverment: "Unitary Authoritarian semi-constitutional monarchy",
    currency: "Qatari riyal",
    admin_id: "paola@email.com"
    
},{
    country: "Egypt" ,
    creationDate: "2023-08-22",
    population: 102100000 ,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrNPFQ3DuFkRoAENamt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzIxMmRlNTAxY2RlNzNkNmQ0NDBjOWI1MWQ4MGU2MDFkBGdwb3MDMjEEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfoto%2Bde%2Bcairo%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D21&w=2047&h=1000&imgurl=www.farebuzz.com%2Fborn-free%2Fwp-content%2Fuploads%2F2016%2F10%2Fcairo.jpg&rurl=https%3A%2F%2Fwww.farebuzz.com%2Fborn-free%2Fexplore-cairo-like-expert&size=450.8KB&p=foto+de+cairo&oid=212de501cde73d6d440c9b51d80e601d&fr2=piv-web&fr=mcafee&tt=How+to+explore+Cairo+like+an+expert&b=0&ni=21&no=21&ts=&tab=organic&sigr=Ah8JbrHJl0mn&sigb=MESxShBzZ3P_&sigi=uafhXEolpMmd&sigt=Ms6CWA0m_Ekq&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Cairo",
    featuredLocation:  "Egyptian Museum, slamic Cairo, Nile Corniche, Old Cairo Walls (Gates of Cairo), Abdeen Palace",
    officialLanguage: "Arabic",
    officialReligión: "Islam",
    goverment: "Unitary semi-presidential republic",
    currency: "Egyptian pound",
    admin_id: "paola@email.com"
},{
    country: "Australia" ,
    creationDate: "2023-08-22",
    population: 26477600 ,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrNPFRyEOFkK4UE7BCt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzViMWI1ZmYyMzIxMTM1YmRkNGQ5NmMwMDA5MWE4OTRmBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfotos%2Bde%2Bmelbourne%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D12&w=3060&h=2040&imgurl=worldstrides.com.au%2Fwp-content%2Fuploads%2F2016%2F01%2FiStock_000076995347_XXXLarge-RS.jpg&rurl=https%3A%2F%2Fworldstrides.com.au%2Fitineraries%2Fmelbourne-mt-buller-tour%2F&size=655.8KB&p=fotos+de+melbourne&oid=5b1b5ff2321135bdd4d96c00091a894f&fr2=piv-web&fr=mcafee&tt=Melbourne+City+and+Snow+Educational+Tours+-+WorldStrides+Australia&b=0&ni=21&no=12&ts=&tab=organic&sigr=kmy9SoBVWWnt&sigb=U5_hVXYD8fha&sigi=cfiMEPKM_0n6&sigt=yOg8O3zbT.Gr&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Melbourne",
    featuredLocation:  "National Gallery of Victoria, The Great Ocean Road,  The Queen Victoria Market, Eureka Skydeck, The Royal Botanic Gardens",
    officialLanguage: "English",
    officialReligión: " Christianity",
    goverment: "Federal parliamentary constitutional monarchy",
    currency: "Australian dollar",
    admin_id: "paola@email.com"
},{
    country: "Russian Federation" ,
    creationDate: "2023-08-22",
    population: 145558000 ,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrFGzxg9eRkbwkEnHGt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzhhY2E0MWMxNjUzZTBkZGQ2MzQxOWQxMDY0MmE0NjYwBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfoto%2Bde%2Bmoscu%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D3&w=2000&h=1426&imgurl=blog.pezzati.com%2Fwp-content%2Fuploads%2F2017%2F11%2F0-presentacion.jpeg&rurl=https%3A%2F%2Fblog.pezzati.com%2Flos-10-atractivos-imperdibles-moscu%2F&size=630.9KB&p=foto+de+moscu&oid=8aca41c1653e0ddd63419d10642a4660&fr2=piv-web&fr=mcafee&tt=Los+10+atractivos+imperdibles+de+Mosc%C3%BA+%7C+El+Blog+de+Pezzati+Viajes&b=0&ni=21&no=3&ts=&tab=organic&sigr=O7sigmyB0eGG&sigb=p5pziMnvEhnw&sigi=9MNTvbOvFNzD&sigt=pHgdg0a9tQ0B&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Moscow",
    featuredLocation:  "Red Square, Kremlin and Kremlin Museums, St. Basil's Cathedral, Bolshoi Theatre, Gorky Park, State Armoury Chambe",
    officialLanguage: "Russian",
    officialReligión: " Christianity",
    goverment: "Federal semi-presidential republic under an authoritarian dictatorship,",
    currency: "Ruble",
    admin_id: "paola@email.com"
},{
    country: " Venezuela " ,
    creationDate: "2023-08-22",
    population: 29956532 ,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrFEpebGeFkjUswSNyt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzBjOTc1NjIzOWFiMTA1YWNjNTMzY2EwMTUyMDVlMjYzBGdwb3MDNzkEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfotos%2Bde%2Bcaracas%26ei%3DUTF-8%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26nost%3D1%26tab%3Dorganic%26ri%3D79&w=1578&h=1006&imgurl=1.bp.blogspot.com%2F-nhWrh6WRJ8o%2FTlAMwftdnAI%2FAAAAAAAACAw%2Fwt028mrMe5c%2Fs1600%2Fvenezuela_caracas%252Bla%252Bgran%252Bavenida%252B-%252B1960.jpg&rurl=https%3A%2F%2Forachapellincaracasvenezuela.blogspot.com%2F2011%2F08%2Fcolas-en-la-plaza-venezuelaen-1950.html&size=614.9KB&p=fotos+de+caracas&oid=0c9756239ab105acc533ca015205e263&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Un+vistazo+a+la+Caracas+de+ayer+y+hoy%3A+Plaza+Venezuela....a+trav%C3%A9s+de+...&b=61&ni=140&no=79&ts=&tab=organic&sigr=qtbobj41wZjf&sigb=75yt_uBYZ0dA&sigi=mx5FRl0PR5jt&sigt=1ZBDULlrBNZT&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210AR91213G0",
    city: "Santiago de León de Caracas",
    featuredLocation:  "birthplace and museum simon bolivar, avenue of the founding fathers, national phanteon. Caracas’s polyhedron, sabana grande boulevard",
    officialLanguage: "Spanish",
    officialReligión: " Christianity",
    goverment: "Federal presidential republic under an centralized authoritarian state",
    currency: "Venezuelan bolivar ",
    admin_id: "paola@email.com"
},{
    country: " United States  " ,
    creationDate: "2023-08-22",
    population: 167427311 ,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrEs5KPHeFkE_4lzRCt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2FjOWUwOGU4MTc1Y2UyZTI2ODFkNWU2YTQzYmUzY2QxBGdwb3MDNjEEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimagenes%2Bde%2Bnueva%2Byork%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D61&w=1600&h=1066&imgurl=st.gde-fon.com%2Fwallpapers_original%2F546188_new_york_city_nyu-york_nochnoy_gorod_panorama_zdan_2048x1365_www.Gde-Fon.com.jpg&rurl=http%3A%2F%2Fes.gde-fon.com%2Fdownload%2Fciudad_de_nueva_york_nueva_york_la_vida_nocturna_d%2F546188%2F2048x1365&size=1610.2KB&p=imagenes+de+nueva+york&oid=ac9e08e8175ce2e2681d5e6a43be3cd1&fr2=piv-web&fr=mcafee&tt=Descargar+gratis+Ciudad+de+Nueva+York%2C+Nueva+York%2C+la+vida+nocturna+de+...&b=61&ni=21&no=61&ts=&tab=organic&sigr=zB7zg5Aaf3hu&sigb=jsKdn.Vgzwu7&sigi=KC6g59kNqAbK&sigt=6Hh17A3u44FI&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "New York ",
    featuredLocation:  "New York County Courthouse, Rockefeller Center, The Plaza Hotel, Times Square, Empire State Building, Central Park.",
    officialLanguage: "English",
    officialReligión: "Protestantism",
    goverment: "Goverment:Federal Presidential Constitutional  Republic ,",
    currency: "U.S. Dollar ",
    admin_id: "ricardo@email.com"
},{
    country: "Brazil" ,
    creationDate: "2023-08-22",
    population: 215313498,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrEs5KPIOFkH9YlvAmt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2JjZjg5Zjg1ODRlMjM4ZjAwMDljMDJlNDFiM2VhOThlBGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfots%2Bde%2Brio%2Bde%2Bjaneiro%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D12&w=3882&h=2588&imgurl=www.obaoba.com.br%2FcontentFiles%2Fsystem%2Fpictures%2F2016%2F8%2F304944%2Foriginal%2Frj-cristo-redentor-com-baia-de-guanabara-renato-sette-camara-11.jpg&rurl=https%3A%2F%2Fwww.obaoba.com.br%2Fcomportamento%2Fnoticia%2F18-motivos-para-amar-o-rio-de-janeiro&size=1695.9KB&p=fots+de+rio+de+janeiro&oid=bcf89f8584e238f0009c02e41b3ea98e&fr2=piv-web&fr=mcafee&tt=18+motivos+para+amar+o+Rio+de+Janeiro+-+ObaOba&b=0&ni=21&no=12&ts=&tab=organic&sigr=YI2icMSt86DY&sigb=B4_JvStbJQF2&sigi=9GBFsjKQMRZ1&sigt=KXlb68pwOFte&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Rio de Janeiro ",
    featuredLocation:  "Ipanema & leblon beach, Copacabana, lage park, corcovado and cristo redentor, sugarloaf.",
    officialLanguage: "Portuguese",
    officialReligión: "Christianity",
    goverment: "Federal Presidential Constitutional  Republic ",
    currency: "Real",
    admin_id: "ricardo@email.com"
},{
    country: "Argentina" ,
    creationDate: "2023-08-22",
    population: 46044703,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrEnbI9I.Fko44v4LSt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzc2MDQzZjIzNTZhMzg0ODA0NWRlZjJjMGI0YzlmN2Q4BGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfotos%2Bde%2Bc%25C3%25B3rdoba%2Bargentina%2Bcapital%26ei%3DUTF-8%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D12&w=1485&h=990&imgurl=www.turismoviajar.com%2Fwp-content%2Fuploads%2F2020%2F05%2Fcordoba-provincia.jpg&rurl=https%3A%2F%2Fwww.turismoviajar.com%2Fcordoba-capital-el-corazon-de-argentina%2F&size=196.2KB&p=fotos+de+c%C3%B3rdoba+argentina+capital&oid=76043f2356a3848045def2c0b4c9f7d8&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Visitar+C%C3%B3rdoba+Capital+-+el+coraz%C3%B3n+de+Argentina&b=0&ni=140&no=12&ts=&tab=organic&sigr=fPeMi3tH64JT&sigb=.AyQOLY6y8jR&sigi=tt_FA0ewNPAj&sigt=XJLJYRqnccFV&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210AR91213G0",
    city: "Cordoba  ",
    featuredLocation:  "cathedral, buen pastor promenade, art walk, Domestic Chapel of the compañía de jesus, Capuchin Church.",
    officialLanguage: "Spanish",
    officialReligión: "Christianity",
    goverment: "Federal Presidential Constitutional  Republic ",
    currency: "Argentine Peso",
    admin_id: "ricardo@email.com"
},{
    country: "United kingdom England" ,
    creationDate: "2023-08-22",
    population: 56000000,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrEnbKKOOFkIjExx7Ct9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzlmNTFhZWM5ZmRjMWUyYmM5ZDNhM2QzNzRiZTc5NmY1BGdwb3MDMTIEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfotos%2Bde%2Blondres%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D12&w=2048&h=1365&imgurl=amalteaviajes.com%2Fwp-content%2Fuploads%2F2017%2F12%2Flond.jpg&rurl=https%3A%2F%2Fblogdelossextos.blogspot.com%2F2018%2F02%2Flondres.html&size=382.9KB&p=fotos+de+londres&oid=9f51aec9fdc1e2bc9d3a3d374be796f5&fr2=piv-web&fr=mcafee&tt=LOS+SEXTOS%26%2339%3B+BLOG%3A+LONDRES&b=0&ni=21&no=12&ts=&tab=organic&sigr=1se9wLK_EXT2&sigb=5lwQM1TGQXTz&sigi=6ftswUGxdxQC&sigt=ZXNWLcIlxIHl&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "London",
    featuredLocation:  "The British Museum, The Tower of London, Buckingham Palace, The Houses of Parliament and Big Ben, Greenwich.",
    officialLanguage: "English",
    officialReligión: "Christianity",
    goverment: "Unitary Parliamentary Constitutuinal monarchy ",
    currency: "Pound Sterling",
    admin_id: "ricardo@email.com"
},{
    country: "Netherlands" ,
    creationDate: "2023-08-22",
    population: 17500000,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrEs5LROuFkVrAm6Dut9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2QzZGVjODM2OWYxZWYwZjk3ZTg0ZDNjN2E4MDM2MTY5BGdwb3MDNjIEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfoto%2Bde%2Bamsterdam%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D62&w=3400&h=2267&imgurl=lp-cms-production.imgix.net%2F2020-12%2FGettyRF_840603854.jpg%3Fauto%3Dformat%26fit%3Dcrop%26sharp%3D10%26vib%3D20%26ixlib%3Dreact-8.6.4%26w%3D850%26q%3D23%26dpr%3D4&rurl=https%3A%2F%2Fwww.lonelyplanet.com%2Farticles%2Fbest-neighbourhoods-in-amsterdam&size=729.7KB&p=foto+de+amsterdam&oid=d3dec8369f1ef0f97e84d3c7a8036169&fr2=piv-web&fr=mcafee&tt=Top+neighborhoods+to+explore+in+Amsterdam+-+Lonely+Planet&b=61&ni=21&no=62&ts=&tab=organic&sigr=xzRxC.F7Ad8A&sigb=l_d4kSntqEQ4&sigi=m.58hvwN8xpx&sigt=Pp5JiSxWGDQT&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Amsterdam",
    featuredLocation:  "Anne Frank House, Van Gogh Museum, Canal Ring, Heineken Experience, .",
    officialLanguage: "Dutch",
    officialReligión: "mostly no religion",
    goverment: "Unitary Parliamentary Constitutional monarchy ",
    currency: "Euro",
    admin_id: "ricardo@email.com"
},{
    country: "Spain" ,
    creationDate: "2023-08-22",
    population: 47000000,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrErOlOPOFk4NkGdFSt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzVhZGI2NjQyYjAwOGUwYTZlOWY2ZmU1ZTE0MDM1NmNhBGdwb3MDNzIEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfotos%2Bde%2Bmadrid%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D72&w=1536&h=1024&imgurl=www.gratistodo.com%2Fwp-content%2Fuploads%2F2021%2F07%2FMadrid-Wallpapers-14-1536x1024.jpg&rurl=https%3A%2F%2Fwww.gratistodo.com%2Fmadrid-wallpapers%2F&size=297.9KB&p=fotos+de+madrid&oid=5adb6642b008e0a6e9f6fe5e140356ca&fr2=piv-web&fr=mcafee&tt=Fondos+de+pantalla+de+Madrid%2C+Wallpapers+HD+y+fotos+de+la+ciudad&b=61&ni=21&no=72&ts=&tab=organic&sigr=jo19Uq6753eu&sigb=6e9yNNjtpKkh&sigi=x.Bd0CcJhb6K&sigt=zNOUxlmXvmry&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Madrid",
    featuredLocation:  "Puerta del Sol, Royal Palace of Madrid, Cibeles Fountain and Palace, Santiago Bernabéu Stadium.",
    officialLanguage: "Spanish",
    officialReligión: "Roman Catholicism",
    goverment: "Unitary parliamentary constitutional monarchy",
    currency: "Euro",
    admin_id: "natalia@email.com"
},{
    country: "France " ,
    creationDate: "2023-08-22",
    population: 67000000,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrNPFTPPeFkrQwHsAmt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzVmYzAxMjc0NzE4YjdhZDdiMTUxMjEzYjRlM2UwNDE4BGdwb3MDMjAEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfotos%2Bde%2Bparis%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D20&w=1024&h=1024&imgurl=s1.1zoom.me%2Fbig0%2F996%2FFrance_Bridges_Paris_497438.jpg&rurl=https%3A%2F%2Fwww.1zoom.me%2Fes%2Fwallpaper%2F497438%2Fz5875.2%2F&size=784.3KB&p=fotos+de+paris&oid=5fc01274718b7ad7b151213b4e3e0418&fr2=piv-web&fr=mcafee&tt=Fondos+de+Pantalla+Francia+Puentes+Par%C3%ADs+Torre+Eiffel+Noche+Farola+...&b=0&ni=21&no=20&ts=&tab=organic&sigr=umOxpr64gyQQ&sigb=07qdB4ID2T41&sigi=9l0YTQbe5Exc&sigt=sAGGw0Nc_P5G&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Paris",
    featuredLocation:  "Moulin Rouge, Eiffel Tower, Louvre Museum, Notre-Dame Cathedral, Latin Quarter.",
    officialLanguage: "French ",
    officialReligión: "Christianit",
    goverment: "Unitary semi-presidential republic.",
    currency: "Euro",
    admin_id: "natalia@email.com"
},{
    country: "Turkey" ,
    creationDate: "2023-08-22",
    population: 15251321,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrNPFQyT.FkE70H0Xqt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzExZGMyMjkwMzkxNWJkMTNkZWFhZGRiNjM4OTZiZGRjBGdwb3MDOARpdANiaW5n?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfotos%2Bde%2Bestambul%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D8&w=1920&h=1280&imgurl=cms.w2m.com%2F.imaging%2Fmte%2Fbasic-theme%2FfullHd%2Fdam%2FMaster-Data%2FDestinations%2FEuropa%2FTurquia%2FEstambul%2FImages%2Fturquia-estambul-amanecer-nubes-mezquita-ortakoy-puente.jpg%2Fjcr%3Acontent%2Fturquia-estambul-amanecer-nubes-mezquita-ortakoy-puente.jpg&rurl=https%3A%2F%2Fwww.icarion.es%2Fviaje%2Festambul&size=550.0KB&p=fotos+de+estambul&oid=11dc22903915bd13deaaddb63896bddc&fr2=piv-web&fr=mcafee&tt=ESTAMBUL+%7C+Ic%C3%A1rion&b=0&ni=21&no=8&ts=&tab=organic&sigr=BCQLxhQgZUMB&sigb=Xdp0hd5.XQgt&sigi=ZFzaM9o1m9G.&sigt=hBLN6.nFR6kU&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Istambul",
    featuredLocation:  "Hagia Sophia, Blue Mosque (Sultan Ahmed Mosque), Grand Bazaar, Bosphorus Strait, Ortaköy.",
    officialLanguage: "turkish",
    officialReligión: "Islam",
    goverment: "Unitary presidential constitutional republic .",
    currency: "Turkish Lira ",
    admin_id: "natalia@email.com"
},{
    country: " Japan" ,
    creationDate: "2023-08-22",
    population: 126000000,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrFEpcXWOFkrEgzTAKt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2ZhZDMyNTY0NzEwYWVkYTYwMDM5NTczNTY0ODljOGQ2BGdwb3MDODYEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimagenes%2Bde%2Bkioto%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D86&w=5000&h=1704&imgurl=cdn2.civitatis.com%2Fjapon%2Fosaka%2Fexcursion-kioto.jpg&rurl=https%3A%2F%2Fwww.civitatis.com%2Fmx%2Fosaka%2Fexcursion-kioto%2F&size=1801.7KB&p=imagenes+de+kioto&oid=fad32564710aeda6003957356489c8d6&fr2=piv-web&fr=mcafee&tt=Excursi%C3%B3n+a+Kioto+desde+Osaka+-+Reserva+online+en+Civitatis.com&b=61&ni=21&no=86&ts=&tab=organic&sigr=PkiavWSzSp3_&sigb=qjBjtnolG7jX&sigi=yBW98DIvmgeP&sigt=VaGRzLTqNyBf&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Kyoto",
    featuredLocation:  "Kiyomizu-dera Temple, Fushimi Inari Taisha, Golden Pavilion (Kinkaku-ji, Arashiyama Bamboo Grove, Kyoto Imperial Palace.",
    officialLanguage: "Japanese ",
    officialReligión: " Budism",
    goverment: "Unitary parliamentary constitutional monarchy .",
    currency: "Japanese yen ",
    admin_id: "natalia@email.com"
},{
    country: "Italy" ,
    creationDate: "2023-08-22",
    population: 60000000,
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrFEpe7WeFkw5sz2Eat9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2IxYzNjNGVjMjI5NDZmNjgxOGQ2ZjhjZjVmOWQyMGEzBGdwb3MDMTkEaXQDYmluZw--?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dfotos%2Bde%2Bflorencia%2Bitalia%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26tab%3Dorganic%26ri%3D19&w=1200&h=800&imgurl=viajeronomada.com%2Fwp-content%2Fuploads%2F2020%2F02%2Fqueverenflorencia.jpg&rurl=https%3A%2F%2Fviajeronomada.com%2Fque-ver-en-florencia%2F&size=291.9KB&p=fotos+de+florencia+italia&oid=b1c3c4ec22946f6818d6f8cf5f9d20a3&fr2=piv-web&fr=mcafee&tt=Qu%C3%A9+ver+en+Florencia%3A+los+15+atractivos+tur%C3%ADsticos+m%C3%A1s+importantes+...&b=0&ni=21&no=19&ts=&tab=organic&sigr=5eXO8fotJpwG&sigb=mh1DnHHD1wHA&sigi=JosqfFRNAkkj&sigt=sivQBuV8a33r&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    city: "Florence",
    featuredLocation:  "Uffizi Gallery, Cattedrale di Santa Maria del Fiore (Duomo), Ponte Vecchio, San Lorenzo Market, Mercato Centrale.",
    officialLanguage: "JItalian",
    officialReligión: "christianity",
    goverment: "Unitary parliamentary republic.",
    currency: "Euro",
    admin_id: "natalia@email.com"
}]

async function createCities(arrayCities){
   try{
    await connect(process.env.LINK_DB)
    for ( let city of arrayCities){
        let user = await User.findOne({ mail:city.admin_id })
        let admin_id = await user._id
        city.admin_id = admin_id
        await City.create(city)

    }
    console.log('done!')
    }catch(error) {
        console.log (error)

    }
}
createCities(cities)