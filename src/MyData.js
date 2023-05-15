import Myphoto from './assets/myphoto.jpg'
import foosung from './assets/foosung.png'
import foosung_mobile from './assets/foosung_mobile.png'
import peripera from './assets/peripera.png'
import cinderella from './assets/cinderella.png'

import { FaCss3, FaHtml5, FaJs } from "react-icons/fa";
import { SiJquery, SiGithub, SiGit, SiWordpress, SiReact, SiAdobephotoshop } from "react-icons/si";

export const MyData = {
  imgsrc : Myphoto,
  appliance: "웹퍼블리셔&프론트엔드",
  name : "박양지",
  date_of_birth: "1997-02-14",
  phone: "010-9408-0067",
  email: "32646@naver.com"
}

export const SkillData = [
  <FaHtml5/>,
  <FaCss3/>,
  <FaJs/>,
  <SiJquery/>,
  <SiGit/>,
  <SiGithub/>,
  <SiWordpress/>,
  <SiAdobephotoshop/>,
  <SiReact/>
]

export const PortfolioData = [
  {
    id : 1,
    type: "반응형",
    name : "영화 신데렐라 2015",
    long : "1주",
    imgsrc : cinderella,
    host_url: "http://didwl214.cafe24.com/media/",
    git_url: "https://github.com/parkyangji/media"
  },
  {
    id : 2,
    type: "적응형 PC",
    name : "(주)후성C",
    long : "1달",
    imgsrc : foosung,
    host_url: "http://didwl214.cafe24.com/",
    git_url: "https://github.com/parkyangji/www"
  }, 
  {
    id : 3,
    type: "적응형 Mobile",
    name : "(주)후성",
    long : "1주",
    imgsrc : foosung_mobile,
    host_url: "http://didwl214.cafe24.com/mobile/",
    git_url: "https://github.com/parkyangji/mobile"
  },
  {
    id : 4,
    type: "반응형",
    name : "peripera",
    long : "3일",
    imgsrc : peripera,
    host_url: "http://didwl214.dothome.co.kr/wordpress/"
  },
  {
    id : 5,
    type: "반응형",
    name : "parkyangji",
    long : "제작중",
    imgsrc : "",
    host_url: "",
    git_url: ""
  },
]
