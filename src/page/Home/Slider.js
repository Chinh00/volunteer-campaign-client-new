import Carousel from "react-bootstrap/Carousel";
import { home_img, arrow_right_icon } from "../../assets/img";
import { Link } from "react-router-dom";

function Slider() {
    return (
        <Carousel>
            <Carousel.Item>
                <div className="img-slider">
                    <img width={"100%"} src={home_img} alt="" />
                </div>

                <Carousel.Caption className="flex justify-center flex-column items-center">
                    <h3 className="slider_title font-['Calistoga'] text-[30px]">
                        Tham gia cùng chúng tôi
                    </h3>
                    <p className="font-['Calistoga'] text-[45px]">
                        LAN TỎA HẠNH PHÚC <br></br> TRAO GỬI YÊU THƯƠNG
                    </p>
                    <Link className="inline-flex items-center text-[15px] bg-btn-color px-[18px] py-[18px] py-[10px] mt-[20px]">
                        TÌM HIỂU THÊM
                        <img src={arrow_right_icon} alt="" className="ml-[4px]" />
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="img-slider">
                    <img width={"100%"} src={home_img} alt="" />
                </div>

                <Carousel.Caption className="flex justify-center flex-column items-center">
                    <h3 className="slider_title font-['Calistoga'] text-[30px]">
                        Tham gia cùng chúng tôi
                    </h3>
                    <p className="font-['Calistoga'] text-[45px]">
                        LAN TỎA HẠNH PHÚC <br></br> TRAO GỬI YÊU THƯƠNG
                    </p>
                    <Link className="inline-flex items-center text-[15px] bg-btn-color px-[18px] py-[18px] py-[10px] mt-[20px]">
                        TÌM HIỂU THÊM
                        <img src={arrow_right_icon} alt="" className="ml-[4px]" />
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className="img-slider">
                    <img width={"100%"} src={home_img} alt="" />
                </div>

                <Carousel.Caption className="flex justify-center flex-column items-center">
                    <h3 className="slider_title font-['Calistoga'] text-[30px]">
                        Tham gia cùng chúng tôi
                    </h3>
                    <p className="font-['Calistoga'] text-[45px]">
                        LAN TỎA HẠNH PHÚC <br></br> TRAO GỬI YÊU THƯƠNG
                    </p>
                    <Link className="inline-flex items-center text-[15px] bg-btn-color px-[18px] py-[18px] py-[10px] mt-[20px]">
                        TÌM HIỂU THÊM
                        <img src={arrow_right_icon} alt="" className="ml-[4px]" />
                    </Link>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;