import {Image} from "react-bootstrap";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
const CardCampaign = () => {
    return <div className={"w-full flex flex-wrap"}>
        <div className={"md:w-1/2 max-w-[555px] p-10"}>
            <Image src={"/images/image.png"} />
        </div>
        <div className={"md:w-1/2 w-full p-10"}>
            <span className={'text-[25px]'}>Mỗi bước chân đều đáng giá</span>
            <p className={"mt-10"}>
                blabal ..............
            </p>
            <button className={"py-2 px-4 mt-10 border-2 hover:text-white hover:bg-green-600 border-green-500 rounded-full transition-all duration-700"}>Tìm hiểu thêm</button>
        </div>
    </div>
}


function Campaign() {
    return (
        <div className={"w-full"}>
            <div className={"w-full text-center text-[30px] font-semibold"}>
                Chiến dịch từ thiện
            </div>
            <div className={"md:w-4/5 mx-auto py-10"}>
                <Swiper
                    
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    autoplay={true}
                    
                >
                    <SwiperSlide><CardCampaign /></SwiperSlide>
                    <SwiperSlide><CardCampaign /></SwiperSlide>
                    <SwiperSlide><CardCampaign /></SwiperSlide>
                    <SwiperSlide><CardCampaign /></SwiperSlide>
                    <SwiperSlide><CardCampaign /></SwiperSlide>
                    
                </Swiper>
            </div>
        </div>
    );
}

export default Campaign;



