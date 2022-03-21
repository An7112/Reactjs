import React from "react";
import { Link } from "react-router-dom";
import './home.css';
import BannerImage from '../img/11.jpg';
function Home () {
    return (
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>

        <div className="headerContainer">
        <h1> Welcome To Food Heaven</h1>
        <p> Xin Kính Chào Quý Khách</p>
        <Link to="/menu">
          <button> VIEW NOW </button>
        </Link>
        </div>
        <div className="headerContainer">
        <p> </p>
        <div className="chu">
        <h4 >Những Món Ăn Độc Đáo</h4>
        </div>
          <div className="hover">
            <img src="https://satovietnhat.com.vn/Upload/news/nhat-ban-van-hoa-dac-sac.jpg" >
            </img>
          </div>
          <div className="hover">
          <img src="https://cdn.huongnghiepaau.com/wp-content/uploads/2020/04/chuyen-de-beffsteak-kieu-au.jpg" >
          </img>
          </div>
          <div className="hover"><img src="https://cdn.beptruong.edu.vn/wp-content/uploads/2018/04/kinh-doanh-bo-bit-tet.jpg" >
          </img>
          </div>
          <div className="hover"><img src="https://sugoi.vn/wp-content/uploads/2021/03/Van-Hoa-Am-Thuc-Nhat-Ban.jpg" ></img>
          </div>
          <div className="hover">
          <img src="https://media.baodautu.vn/Images/thanhnga/2018/03/10/am-thuc-nhat-ban1520651322.jpg" >
          </img>
          </div>
          <div className="hover">
          <img src="https://sugoi.vn/wp-content/uploads/2021/03/Van-Hoa-Am-Thuc-Nhat-Ban.jpg" >
          </img>
          </div>
          <div className="hover">
          <img src="https://cdn.huongnghiepaau.com/wp-content/uploads/2019/01/hinh-chuyen-de-bo-ne.jpg" >
          </img>
          </div>
          <div className="hover">
          <img src="https://vilacojsc.com.vn/wp-content/uploads/2021/03/9-dac-trung-van-hoa-am-thuc-nhat-ban-1.png" >
          </img>
          </div>
        

        </div>
        <div className=" text">
          <p>Hẫy đến với nhà hàng của chúng tôi để cảm nhận sự tinh tế cùng những hương vị tuyệt diệu của các món ăn nơi đây.
          Hãy gọi trước cho chúng qua số điện thoại này. </p>
        </div>
        
      
      </div>
        
    )
    
}
export default Home;