import { logo, user_icon } from "../../../assets/img";
import { Col, Container, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom"

function Header() {
    return (
        <section className="section-header from-[#7ebfaf] bg-gradient-to-b">
            <Container>
                <Row>
                    <Col>
                        <div className="flex items-center justify-between py-[11px] text-text-color-menu">
                            <div className="flex items-center">
                                <img src={logo} alt="" />
                                <h5 className="text-logo text-[14px] text-center ml-[8px]">
                                    ĐỘI SVTN ĐỒNG HƯƠNG NGHỆ AN <br></br> TRƯỜNG ĐẠI HỌC Y HÀ NỘI
                                </h5>
                            </div>
                            <div className="self-stretch md:block hidden">
                                <ul className="flex menu-header h-full">
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/"} className="item-link-header flex items-center">TRANG CHỦ</NavLink>
                                    </li>
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/gioithieu"} className="item-link-header flex items-center">GIỚI THIỆU</NavLink>
                                    </li>
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/chiendich"} className="item-link-header flex items-center">CHIẾN DỊCH</NavLink>
                                    </li>
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/thuvienanh"} className="item-link-header flex items-center">MEDIA</NavLink>
                                    </li>
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/quyengop"} className="item-link-header flex items-center">QUYÊN GÓP</NavLink>
                                    </li>
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/baocao"} className="item-link-header flex items-center">BÁO CÁO</NavLink>
                                    </li>
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/thamgia"} className="item-link-header flex items-center">THAM GIA</NavLink>
                                    </li>
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/trian"} className="item-link-header flex items-center">TRI ÂN</NavLink>
                                    </li>
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/tintuc"} className="item-link-header flex items-center">TIN TỨC</NavLink>
                                    </li>
                                    <li className="item-menu-header ml-[13px]">
                                        <NavLink to={"/cauchuyen"} className="item-link-header flex items-center">CÂU CHUYỆN</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Header;
