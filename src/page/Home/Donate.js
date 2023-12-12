import { donate_img, check_icon, heart_icon } from "assets/img";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import {IoCheckmarkCircle} from "react-icons/io5";
import {CiHeart} from "react-icons/ci";


function Donate() {
    const nav = useNavigate()
    return (
        <div className={"w-full relative flex md:flex-row flex-col items-end"}>
            <div className={"lg:w-1/2 w-full bg-green-400 h-[700px]  text-white md:px-40 px-10 md:py-20 py-10"}>
                <span className={"text-[35px] font-semibold"}>
                    17 NĂM, HƠN 650 TRẺ EM CÓ CUỘC SỐNG MỚI VÀ SẼ NHIỀU HƠN THẾ NỮA.
                </span>
                <p className={"mt-3"}>
                    Với nguồn quỹ đóng góp từ các mạnh thường quân trong ~ ngoài nước và Bệnh Viện FV, Quỹ Nâng Bước Tuổi Thơ bảo đảm quỹ được sử dụng với hai phương châm tối quan trọng
                </p>
                <div className={"mt-5"}>
                    <p className={"flex flex-row justify-start items-center gap-3 font-bold"}>
                        <IoCheckmarkCircle size={25}/> Sự chu cấp toàn vẹn trong suốt quá trình điều trị
                    </p>
                    <p className={"flex mt-2  flex-row justify-start items-center gap-3 font-bold"}>
                        <IoCheckmarkCircle size={25}/> Tình thương yêu đích thực với từng bệnh nhi
                    </p>
                </div>
                <button onClick={() => nav("quyengop")} className={"py-2 mt-3 hover:bg-white font-bold hover:text-green-400 transition-all duration-700 px-4 rounded-full border-2 border-white flex justify-center items-center flex-row gap-2"}>
                    Quyên góp
                    <CiHeart size={20} className={"font-semibold"} />
                </button>
            </div>
            <div className={'lg:w-1/2 w-full rounded-2xl shadow-xl rounded-l-none rounded-t-2xl relative'}>
                <div
                    className={'px-10 group text-[#1cb78d] absolute lg:-left-[150px] left-[100px] rounded-xl top-[150px] w-[295px] h-[158px] bg-slate-100 flex flex-col justify-center items-center'}>
                    <span className={"text-[50px] group-hover:scale-110 transition-all duration-700 font-bold"}>
                        1000+
                    </span>
                    <p className={"text-[18px] text-[#1e6792] text-left font-semibold"}>
                        Doanh nghiệp và mạnh thường quân
                    </p>
                </div>
                <div
                    className={'px-10 group text-[#1cb78d] absolute lg:-left-[150px] left-[100px] rounded-xl top-[350px] w-[295px] h-[158px] bg-slate-100 flex flex-col justify-center items-center'}>
                    <span className={"text-[35px] group-hover:scale-110 transition-all duration-700 font-bold"}>
                        50.0000.000 +VND
                    </span>
                    <p className={"text-[18px] text-[#1e6792] text-left font-semibold self-start"}>
                        Số tiền gây quỹ
                    </p>
                </div>
                <div
                    className={'px-10 group text-[#1cb78d] absolute lg:-left-[150px] left-[100px] rounded-xl top-[550px] w-[295px] h-[158px] bg-slate-100 flex flex-col justify-center items-center'}>
                    <span className={"text-[50px] group-hover:scale-110 transition-all duration-700 font-bold"}>
                        650 +
                    </span>
                    <p className={"text-[18px] text-[#1e6792]  text-left font-semibold"}>
                        Ca phẫu thuật được thực hiện
                    </p>
                </div>
                <Image
                    className={"rounded-2xl overflow-hidden"}
                    src={"https://nangbuoctuoitho.org/image-data/1600-1700/nangbuoctuoitho.org/static/upload/images/thong-tin/About1.jpg"}/>
            </div>
        </div>
    );
}

export default Donate;





