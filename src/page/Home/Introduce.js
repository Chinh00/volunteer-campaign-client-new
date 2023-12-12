import { introduction_img_1, introduction_img_2 } from "assets/img";
import { Col, Container, Row } from "react-bootstrap";

function Introduce() {
    return (
        <section className="homepage_introduce mb-[120px]">
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2 className="title_homepage text-text-color-title text-center text-[45px] font-['Calistoga'] mt-[60px] mb-[52px]">Giới thiệu</h2>
                    </Col>
                    <Col lg={4}>
                        <div className="">
                            <Row>
                                <Col lg={12}>
                                    <div className="flex items-center flex-column">
                                        <img src={"/images/Logo Đội.png"} className={"rounded-xl shadow-2xl hover:scale-105 transition-all duration-700"} alt="" />
                                        <h3 className="text-[11px] text-text-color-title mt-[16px]">GIỚI THIỆU</h3>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="flex items-center flex-column mt-[116px]">
                                        <img src={"/images/Sinh nhật Đội.jpg"}  className={"rounded-xl shadow-2xl hover:scale-105 transition-all duration-700"}  alt="" />
                                        <h3 className="text-[11px] text-text-color-title mt-[16px]">GIỚI THIỆU</h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="flex justify-center items-center h-full">
                            <img src={"/images/Mùa Hè Xanh.jpg"} alt=""  className={"rounded-xl shadow-2xl hover:scale-105 transition-all duration-700"}  />
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="">
                            <Row>
                                <Col lg={12}>
                                    <div className="flex items-center flex-column">
                                        <img src={"/images/Chào Y1- Phát sách và chia sẻ kinh nghiệm học tập.jpg"}  className={"rounded-xl shadow-2xl hover:scale-105 transition-all duration-700"}  alt="" />
                                        <h3 className="text-[11px] text-text-color-title mt-[16px]">GIỚI THIỆU</h3>
                                    </div>
                                </Col>
                                <Col lg={12}>
                                    <div className="flex items-center flex-column mt-[116px]">
                                        <img src={"/images/Xứ Nghệ Yêu Thương.jpg"}  className={"rounded-xl shadow-2xl hover:scale-105 transition-all duration-700"}  alt="" />
                                        <h3 className="text-[11px] text-text-color-title mt-[16px]">GIỚI THIỆU</h3>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Introduce;

