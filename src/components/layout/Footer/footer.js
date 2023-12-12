import React, { useEffect, useState } from 'react';

import { logo, map_icon, phone_white_icon, email_white_icon, facebook_footer_icon, tiktok_footer_icon, youtube_footer_icon } from "../../../assets/img";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom"
import newsApi from 'apis/newsApi';

function Footer() {
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchNewsData = async () => {
            try {
                const response = await newsApi.listNews();
                setNewsList(response);
            } catch (error) {
                console.error('Error fetching news data:', error);
            }
        };

        fetchNewsData();
    }, []);

    const formatDate = (date) => {
        const formattedDate = new Date(date);
        const day = formattedDate.getDate();
        const month = formattedDate.getMonth() + 1; // Tháng bắt đầu từ 0
        const year = formattedDate.getFullYear();

        return `${day}-${month}-${year}`;
    };
    return (
        <section className="footer bg-footer-color py-[27px] text-white">
            <Container>
                <Row>
                    <Col lg={4}>
                        <div className="item-footer">
                            <div className="wrapper_logo_footer flex items-center">
                                <img src={logo} alt="" />
                                <h5 className="text_logo text-[14px] text-center ml-[8px]">
                                    ĐỘI SVTN ĐỒNG HƯƠNG NGHỆ AN <br></br> TRƯỜNG ĐẠI HỌC Y HÀ NỘI
                                </h5>
                            </div>
                            <h5 className="text_more_logo_footer mt-[20px]">ABC</h5>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="item_footer">
                            <h5 className="title_item_footer text-[18px] py-[4px] mb-[19px] border-b-[1px]">
                                Liên hệ
                            </h5>
                            <ul>
                                <li className="flex items-center mb-[25px]">
                                    <div className="w-[24px] h-[24px] mr-[4px] flex items-center justify-center">
                                        <img src={map_icon} alt="" className="object-contain" />
                                    </div>
                                    <span>Địa chỉ</span>
                                </li>
                                <li className="flex items-center mb-[25px]">
                                    <div className="w-[24px] h-[24px] mr-[4px] flex items-center justify-center">
                                        <img src={phone_white_icon} alt="" className="object-contain" />
                                    </div>
                                    <span>0369 146 287</span>
                                </li>
                                <li className="flex items-center mb-[25px]">
                                    <div className="w-[24px] h-[24px] mr-[4px] flex items-center justify-center">
                                        <img src={email_white_icon} alt="" className="object-contain" />
                                    </div>
                                    <span>tinhnguyenngheanyhanoi@gmail.com</span>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div>
                            <h5 className="text-[18px] py-[4px] mb-[19px] border-b-[1px]">
                                Kết nối ngay
                            </h5>
                            <ul className="flex gap-[16px] mb-[26px]">
                                <li>
                                    <Link to={"#"}>
                                        <img src={facebook_footer_icon} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"}>
                                        <img src={tiktok_footer_icon} alt="" />
                                    </Link>
                                </li>
                                <li>
                                    <Link to={"#"}>
                                        <img src={youtube_footer_icon} alt="" />
                                    </Link>
                                </li>
                            </ul>
                            <h5 className="text-[18px] py-[4px] mb-[19px] border-b-[1px]">
                                Bài viết mới
                            </h5>
                            <ul>
                                <li>
                                    <Link to={"#"}>{newsList[0]?.title}</Link>
                                </li>
                                <li>
                                    <Link to={"#"}>{newsList[1]?.title}</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Footer;



