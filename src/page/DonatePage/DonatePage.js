import React, { useState, useEffect } from 'react';
import {
  Col,
  Container,
} from "reactstrap";

import "./DonatePage.css";
import HeaderPage from 'page/components/HeaderPage';
import {FaPhone} from "react-icons/fa";
import {CiLocationOn} from "react-icons/ci";
export default function DonatePage() {
 

 
  return (

    <main className='w-full relative min-h-screen mt-10'>
      <div className={"md:w-4/5 mx-auto w-full shadow-2xl flex lg:flex-row flex-col rounded-md"}>  
        <div className={"lg:w-3/5 w-full py-5 px-20"}>
          <span className={"text-[30px]"}>
            Chung tay cùng chúng tôi
          </span>
          <p className={"mt-3"}>
            Đồng hành cùng chúng tôi trong hành trình mang đến phép màu y tế cho những cuộc đời nhỏ kém may mắn. Vì phép màu kỳ diệu thật sự đến từ tấm lòng và trái tim của các Quý ân nhân.
          </p>
          <input type="number" className={"border border-black p-2 rounded-full px-3 w-full mt-3"} />
          <button className={"py-2 px-3 bg-green-400 text-white font-semibold float-right mt-10 rounded-md"}>Tiếp tục</button>
        </div>
        <div className={"lg:w-2/5 w-full px-14 py-5"}>
          <div className={"w-full bg-[#1cb78dF2] h-[500px] rounded-xl px-10 py-16 text-white"}>
            <p className={'text-[30px]'}>
              Thông Tin Liên Hệ
            </p>
            <p className={'mt-3'}>
              Thắp sáng bởi ngọn lửa của tình thương vô điều kiện, Quỹ Nâng Bước Tuổi Thơ ấp ủ khát vọng cùng sứ mệnh mang tới cơ thể lành lặn và tương lai tốt đẹp nhất cho những trẻ em khiếm khuyết kém may mắn trên mọi miền đất Việt.
            </p>
            <p className={"text-black mt-3"}>
              Góp một bàn tay cho nhiều cuộc đời nhỏ
              Quỹ Từ Thiện Nâng Bước Tuổi Thơ
              4516681668  (VND)
              Ngân hàng TMCP Á Châu (ACB) / Chi nhánh Thành phố Hồ Chí Minh
            </p>
            <p className={'w-full flex justify-start items-center gap-3 mt-1'}> 
              <FaPhone />
              090 3035030
            </p>
            <p className={"w-full flex justify-start items-center gap-2 mt-1"}>
              <CiLocationOn size={25} />
              Location .....................................
              
            </p>
          </div>
        </div>
      </div>

    </main>
  )
}
