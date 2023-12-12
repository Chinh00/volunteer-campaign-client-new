import { donor_img } from "assets/img";
import { Col, Container, Row } from "react-bootstrap";

function Donor() {
    return (
        
        
        
        <div className={"w-full mt-10"}>
            <div className={"mx-auto w-max"}>
                <h2 className="text-[45px] font-['Calistoga'] text-center text-text-color-title">Góc tri ân</h2>
                <h3 className="text-[18px] text-center mb-[47px] mt-[6px]">Cảm ơn</h3>
            </div>
            <div className={"flex w-full md:flex-row flex-col justify-center items-center gap-40 py-10"}>
                <div className="flex items-center justify-end overflow-hidden w-[200px]">
                    <img src={"/images/Đoàn TNCS Hồ Chí Minh phường Kim Liên.png"} alt=""/>
                </div>
                <div className="flex items-center justify-end w-[200px]">
                    <img src={"/images/BV Mắt Bình Tâm.png"} alt=""/>
                </div>
                <div className="flex items-center justify-end w-[200px]">
                    <img src={"/images/Anh Ngữ Ms Hoa.png"} alt=""/>
                </div>
            </div>
        </div>
        // <section className="donor pt-[28px] pb-[70px]">
        //     <Container>
        //         <Row>
        //             <Col lg={12}>
        //                 <h2 className="text-[45px] font-['Calistoga'] text-center text-text-color-title">Góc tri ân</h2>
        //                 <h3 className="text-[18px] text-center mb-[47px] mt-[6px]">Cảm ơn</h3>
        //             </Col>
        //             <Col lg={4}>
        //                 <div className="flex items-center justify-end overflow-hidden w-[300px]">
        //                     <img src={"/images/Đoàn TNCS Hồ Chí Minh phường Kim Liên.png"} alt="" />
        //                 </div>
        //             </Col>
        //             <Col lg={3}>
        //                 <div className="flex items-center justify-end">
        //                     <img src={"/images/BV Mắt Bình Tâm.png"} alt="" />
        //                 </div>
        //             </Col>
        //             <Col lg={3}>
        //                 <div className="flex items-center justify-end">
        //                     <img src={"/images/Anh Ngữ Ms Hoa.png"} alt="" />
        //                 </div>
        //             </Col>
        //         </Row>
        //     </Container>
        // </section>
    );
}

export default Donor;


