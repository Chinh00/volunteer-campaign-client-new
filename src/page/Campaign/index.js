import React, {useContext, useEffect, useState} from 'react';
import HeaderPage from "page/components/HeaderPage";
import {Container, Row, Table, Badge, Image} from "react-bootstrap";
import campaignApi from "../../apis/campaignApi";
import {MyUserContext} from "../../App";
import {useQuery} from "react-query";
import moment from "moment";
import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import {BsCalendarDate} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
function Campaign() {
    const nav = useNavigate()
    const {title, changeTitle} = useContext(MyUserContext)
    useEffect(() => {
        changeTitle("Chiến dịch")
    }, []);
    const {data} = useQuery({
        queryKey: "campaign",
        queryFn: () => campaignApi.listCampaign()
    })
    return (
        <div className={"py-10"}>
            <span className={"w-full text-center text-2xl flex justify-center items-center py-10 font-bold text-blue-600"}>
                Các chiến dịch đang diễn ra 
            </span>
           <div className={"w-full px-20"}>

               <Swiper
                   slidesPerView={1}
                   spaceBetween={10}
                   centeredSlides={true}
                   pagination={{
                       clickable: true,
                   }}
                   breakpoints={{
                       640: {
                           slidesPerView: 1,
                           spaceBetween: 20,
                       },
                       768: {
                           slidesPerView: 1,
                           spaceBetween: 40,
                       },
                       1024: {
                           slidesPerView: 3,
                           spaceBetween: 50,
                       },
                   }}
                   modules={[Pagination]}
               >
                   {data && data.map((val, ind) => {
                       return <SwiperSlide key={ind}>
                           <div  onClick={() => nav(`/chiendich/${val?.campaignId}`)} className={"mx-auto cursor-pointer w-[400px] flex flex-col hover:shadow-2xl rounded-xl overflow-hidden border transition-all duration-700"}>
                               <Image src={val?.image} />
                               <div className={"px-5 py-3 flex flex-col justify-center items-start gap-3"}>
                                   <span className={"text-[20px] text-red-600 text-center mt-3"}>
                                   {val?.name}
                                </span>
                                   <span className={"text-left flex flex-row justify-start items-center gap-2"}>
                                   <BsCalendarDate size={20}/>
                                   <span>
                                       {moment(val?.start_date).format("l")}
                                   </span>
                                   --->
                                   <span>
                                       {moment(val?.end_date).format("l")}
                                   </span>
                                </span>
                                   <span>
                                       Trạng thái: {val?.statusName}
                                   </span>
                                   <button className={"bg-red-500 px-3 py-2 rounded-full text-white font-bold"}>Đọc</button>
                               </div>
                           </div>
                       </SwiperSlide>
                   })}
                   {data && data.map((val, ind) => {
                       return <SwiperSlide key={ind}>
                           <div  onClick={() => nav(`/chiendich/${val?.campaignId}`)} className={"mx-auto cursor-pointer w-[400px] flex flex-col hover:shadow-2xl rounded-xl overflow-hidden border transition-all duration-700"}>
                               <Image src={val?.image} />
                               <div className={"px-5 py-3 flex flex-col justify-center items-start gap-3"}>
                                   <span className={"text-[20px] text-red-600 text-center mt-3"}>
                                   {val?.name}
                                </span>
                                   <span className={"text-left flex flex-row justify-start items-center gap-2"}>
                                   <BsCalendarDate size={20}/>
                                   <span>
                                       {moment(val?.start_date).format("l")}
                                   </span>
                                   --->
                                   <span>
                                       {moment(val?.end_date).format("l")}
                                   </span>
                                </span>
                                   <span>
                                       Trạng thái: {val?.statusName}
                                   </span>
                                   <button className={"bg-red-500 px-3 py-2 rounded-full text-white font-bold"}>Đọc</button>
                               </div>
                           </div>
                       </SwiperSlide>
                   })}

                   {data && data.map((val, ind) => {
                       return <SwiperSlide key={ind}>
                           <div  onClick={() => nav(`/chiendich/${val?.campaignId}`)} className={"mx-auto cursor-pointer w-[400px] flex flex-col hover:shadow-2xl rounded-xl overflow-hidden border transition-all duration-700"}>
                               <Image src={val?.image} />
                               <div className={"px-5 py-3 flex flex-col justify-center items-start gap-3"}>
                                   <span className={"text-[20px] text-red-600 text-center mt-3"}>
                                   {val?.name}
                                </span>
                                   <span className={"text-left flex flex-row justify-start items-center gap-2"}>
                                   <BsCalendarDate size={20}/>
                                   <span>
                                       {moment(val?.start_date).format("l")}
                                   </span>
                                   --->
                                   <span>
                                       {moment(val?.end_date).format("l")}
                                   </span>
                                </span>
                                   <span>
                                       Trạng thái: {val?.statusName}
                                   </span>
                                   <button className={"bg-red-500 px-3 py-2 rounded-full text-white font-bold"}>Đọc</button>
                               </div>
                           </div>
                       </SwiperSlide>
                   })}

                   {data && data.map((val, ind) => {
                       return <SwiperSlide key={ind}>
                           <div  onClick={() => nav(`/chiendich/${val?.campaignId}`)} className={"mx-auto cursor-pointer w-[400px] flex flex-col hover:shadow-2xl rounded-xl overflow-hidden border transition-all duration-700"}>
                               <Image src={val?.image} />
                               <div className={"px-5 py-3 flex flex-col justify-center items-start gap-3"}>
                                   <span className={"text-[20px] text-red-600 text-center mt-3"}>
                                   {val?.name}
                                </span>
                                   <span className={"text-left flex flex-row justify-start items-center gap-2"}>
                                   <BsCalendarDate size={20}/>
                                   <span>
                                       {moment(val?.start_date).format("l")}
                                   </span>
                                   --->
                                   <span>
                                       {moment(val?.end_date).format("l")}
                                   </span>
                                </span>
                                   <span>
                                       Trạng thái: {val?.statusName}
                                   </span>
                                   <button className={"bg-red-500 px-3 py-2 rounded-full text-white font-bold"}>Đọc</button>
                               </div>
                           </div>
                       </SwiperSlide>
                   })}


               </Swiper>

           </div>
        </div>
    );
}

export default Campaign;
