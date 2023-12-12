import { Col, Container, Row } from "react-bootstrap";
import { phone_green_icon, email_green_icon, facebook_topbar_icon, youtube_topbar_icon, tiktok_topbar_icon } from "../../../assets/img";

function Topbar() {
    return (
        <section className="topbar overflow-hidden">
            <Container>
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col lg={4}>
                                <div className="wrapper-item-topbar">
                                    <img src={phone_green_icon} alt="" className="item_topbar-img" />
                                    <span className="item-topbar-text">
                                        Liên hệ:{" "}
                                        <a href="tel:+84369146287" className="item-top-link">
                                            (+84)369 146 287
                                        </a>{" "}
                                    </span>
                                </div>
                            </Col>
                            <Col lg={8}>
                                <div className="wrapper-item-topbar">
                                    <img src={email_green_icon} alt="" className="item-topbar-img" />
                                    <span className="item-topbar-text">
                                        Email:{" "}
                                        <a href="mailto:tinhnguyenngheanyhanoi@gmail.com" className="item-top-link">
                                            tinhnguyenngheanyhanoi@gmail.com
                                        </a>{" "}
                                    </span>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col lg={6}>
                        <div className="wrapper-item-topbar right">
                            <ul className="list-icon-topbar">
                                <li className="item-icon-topbar">
                                    <a href="#">
                                        <img src={facebook_topbar_icon} alt="" />
                                    </a>
                                </li>
                                <li className="item-icon-topbar">
                                    <a href="#">
                                        <img src={tiktok_topbar_icon} alt="" />
                                    </a>
                                </li>
                                <li className="item-icon-topbar-1">
                                    <a href="#">
                                        <img src={youtube_topbar_icon} alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Topbar;

