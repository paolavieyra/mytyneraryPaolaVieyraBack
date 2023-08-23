import 'dotenv/config.js'
import { connect } from 'mongoose'
import User from '../User.js'

const users =[{
    name: "Paola",
    lastName: "Vieyra",
    mail: "paola@email.com",
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrEnbLOFuBk9j8jGeGt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzg4NWQ2OTI2OTI2ZTFkM2ExYzE5NGVlOTU5OTVkMDhmBGdwb3MDMwRpdANiaW5n?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimagenes%2Bdibujos%2Bmujeres%26ei%3DUTF-8%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D3&w=600&h=470&imgurl=cdn5.dibujos.net%2Fdibujos%2Fpintados%2F201301%2Fchica-joven-moda-pintado-por-danixha-9793091.jpg&rurl=http%3A%2F%2Fgaleria.dibujos.net%2Fmoda%2Fchica-joven-pintado-por-danixha-9793091.html&size=99.3KB&p=imagenes+dibujos+mujeres&oid=885d6926926e1d3a1c194ee95995d08f&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Dibujo+de+mujer+pintado+por+Danixha+en+Dibujos.net+el+d%C3%ADa+03-01-13+a+...&b=0&ni=280&no=3&ts=&tab=organic&sigr=054cajWbhY44&sigb=z6GFXbGy14C_&sigi=.IDaj6Pi0gzO&sigt=BVU0.7uIJto7&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E210AR91213G0",
    password: "paola123",
    country: "Argentina"
},{
    name: "Ricardo",
    lastName: "Madariaga",
    mail: "ricardo@email.com",
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrFEpf5F.BkgUAkfgSt9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2RhZDlkYWY3MDEwNzM1MmJiNTM3Y2FiZmY3NWY0NjZiBGdwb3MDMTYyBGl0A2Jpbmc-?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimagenes%2Bdibujo%2Bhombre%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D162&w=700&h=967&imgurl=archzine.es%2Fwp-content%2Fuploads%2F2020%2F06%2Fcara-de-hombre0u-e1591862186966.jpg&rurl=https%3A%2F%2Farchzine.es%2Flifestyle%2Fdibujos-inspiradores-e-ideas-sobre-como-dibujar-una-cara%2F&size=455.1KB&p=imagenes+dibujo+hombre&oid=dad9daf70107352bb537cabff75f466b&fr2=piv-web&fr=mcafee&tt=1001+%2B+ideas+sobre+c%C3%B3mo+dibujar+una+cara+y+bonitos+dibujos&b=121&ni=21&no=162&ts=&tab=organic&sigr=Ln27hbnT6t2B&sigb=c0N2RyOmwGT1&sigi=i2Rj5EHTI8J1&sigt=r8OEMgEO5kgo&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    password: "ricardo123",
    country: "Argentina"
},{
    name: "Natalia",
    lastName: "Luque",
    mail: "natalia@email.com",
    photo: "https://ar.images.search.yahoo.com/images/view;_ylt=AwrEboSTGOBkzTgJIDet9Qt.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkA2RmOWViODY4MGIyNzZiZmY1ODhkZDRjZDVjMjI3YjI0BGdwb3MDMTYwBGl0A2Jpbmc-?back=https%3A%2F%2Far.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dimagenes%2Bde%2Bdibujos%2Bde%2Bni%25C3%25B1as%26type%3DE210AR91213G0%26fr%3Dmcafee%26fr2%3Dpiv-web%26nost%3D1%26tab%3Dorganic%26ri%3D160&w=640&h=640&imgurl=i.pinimg.com%2F736x%2Fe2%2Ff0%2F8e%2Fe2f08ea9730f9490b0ac0e948c54dac3.jpg&rurl=https%3A%2F%2Fwww.pinterest.es%2Fpin%2F800585271248306287%2F&size=18.9KB&p=imagenes+de+dibujos+de+ni%C3%B1as&oid=df9eb8680b276bff588dd4cd5c227b24&fr2=piv-web&fr=mcafee&tt=Pin+en+Mis+Pines+guardados&b=121&ni=21&no=160&ts=&tab=organic&sigr=dWfe_cWa6YZJ&sigb=eTzxUjE97y3Z&sigi=IE6tRx.B5euQ&sigt=m0V1UcEOWJhh&.crumb=gLyp9Hsd1Gp&fr=mcafee&fr2=piv-web&type=E210AR91213G0",
    password: "paola123",
    country: "Argentina"
}]

connect(process.env.LINK_DB)
    .then(()=>{
        User.insertMany(users)
        console.log('done!')
    })
    .catch(err=>console.log(err))