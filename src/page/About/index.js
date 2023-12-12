import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { page_introduction_img, page_introduction_muctieu_img } from "assets/img";
import HeaderPage from "page/components/HeaderPage";
import { Col, Container, Row } from "react-bootstrap";
import {useContext, useEffect} from "react";
import {MyUserContext} from "../../App";

function About() {
    const {title, changeTitle} = useContext(MyUserContext)
    useEffect(() => {
        changeTitle("Giới thiệu")
    }, []);
    return (
        <div>
            {/*<HeaderPage title={"Giới thiệu"} />*/}
            <div>
                <h2 className="font-['Calistoga'] text-text-color-title text-[45px] text-center mb-[23px] mt-10">Giới thiệu</h2>

            </div>
            <div className={"w-full flex md:flex-row flex-col gap-5 px-10 mt-5"}>
                <div className={""}>
                    <img src={"/images/IMG_1427.JPG"} className={"rounded-xl"} alt=""/>
                </div>
                <div>
                    <p className="font-bold text-[25px]">MÔ TẢ</p>
                    <p className=" mt-10">
                        Đội thành lập ngày 27/03/2012 dựa trên nền móng Hội Đồng hương Nghệ An trường Đại học Y Hà Nội.
                        Hiện tại Đội thuộc Mạng lưới Tình nguyện Quốc gia khu vực miền Bắc trực thuộc Trung tâm Tình
                        nguyện Quốc Gia VVC, thuộc Ban liên lạc sinh viên Nghệ Tĩnh tại Hà Nội. Với mục đích là nơi để
                        các thành viên trong Đội giao lưu, gắn kết, chia sẻ những nỗi niềm, tâm sự với nhau, tìm lại cảm
                        giác thân thuộc như một gia đình. Đồng thời hướng tới các hoạt động thiện nguyện vì cộng đồng,
                        tổ chức các Event y tế và Chiến dịch Mùa hè Xanh, giải quyết triệt để, tận gốc các vấn đề tồn
                        đọng trong xã hội, nâng cao chất lượng hoạt động tình nguyện, đưa hoạt động tình nguyện đi vào
                        thực chất hơn.

                    </p>
                </div>
            </div>

          
            <hr></hr>
            <section className="py-[64px]">
                <Container>
                    <Row className="px-[15px]">
                        <Col className="p-0" lg={12}>
                            <div>
                                <h3 className="text-center mb-[8px]">THÀNH LẬP TỪ NĂM</h3>
                                <h2 className="font-['Calistoga'] text-text-color-title text-[45px] text-center mb-[65px]">MỤC
                                    TIÊU CỦA CHÚNG TÔI</h2>
                            </div>
                        </Col>
                        <Col className="p-0" lg={6}>
                            <div className="relative border-r-[1px] border-color-line-aim">
                                <div className="relative inline-block">
                                    <img src={page_introduction_muctieu_img} alt="" className="object-cover h-[186px]" />
                                    <span className="text-[50px] absolute top-[10%] left-[98%]">
                                        <FontAwesomeIcon className="text-bg-color-content" icon={faAngleRight} />
                                    </span>
                                </div>
                                <span className="w-[60px] h-[60px] border-[1px] inline-flex items-center justify-center font-['Calistoga'] text-[32px] border-black rounded-full absolute top-[30%] right-0 translate-y-[-50%] translate-x-[50%] bg-white">01</span>
                            </div>
                        </Col>
                        <Col className="p-0" lg={6}></Col>
                        <Col className="p-0" lg={6}>
                            <div className="relative border-r-[1px] border-color-line-aim h-full"></div>
                        </Col>
                        <Col className="p-0" lg={6}>
                            <div className="relative flex justify-end">
                                <div className="relative">
                                    <img src={page_introduction_muctieu_img} alt="" className="object-cover h-[186px]" />
                                    <span className="text-[50px] absolute top-[10%] right-[98%]">
                                        <FontAwesomeIcon className="text-bg-color-content" icon={faAngleLeft} />
                                    </span>
                                </div>
                                <span className="w-[60px] h-[60px] border-[1px] inline-flex items-center justify-center font-['Calistoga'] text-[32px] border-black rounded-full absolute top-[30%] left-0 translate-y-[-50%] translate-x-[-50%] bg-white">02</span>
                            </div>
                        </Col>
                        <Col className="p-0" lg={6}>
                            <div className="relative border-r-[1px] border-color-line-aim">
                                <div className="relative inline-block">
                                    <img src={page_introduction_muctieu_img} alt="" className="object-cover h-[186px]" />
                                    <span className="text-[50px] absolute top-[10%] left-[98%]">
                                        <FontAwesomeIcon className="text-bg-color-content" icon={faAngleRight} />
                                    </span>
                                </div>
                                <span className="w-[60px] h-[60px] border-[1px] inline-flex items-center justify-center font-['Calistoga'] text-[32px] border-black rounded-full absolute top-[30%] right-0 translate-y-[-50%] translate-x-[50%] bg-white">03</span>
                            </div>
                        </Col>
                        <Col className="p-0" lg={6}></Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default About;


