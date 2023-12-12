import React, {useContext, useEffect, useState} from 'react';
import HeaderPage from "page/components/HeaderPage";
import { Container, Row, Col, Table, Badge } from "react-bootstrap";
import "./Grateful.css";
import {useQuery} from "react-query";
import donorApi from "../../apis/donorApi";
import moment from "moment";
import {MyUserContext} from "../../App";

export default function Grateful() {
    
    const {data, isLoading} = useQuery({
        queryKey: "grateful",
        queryFn: () => donorApi.listDonor()
    })
    const {title, changeTitle} = useContext(MyUserContext)
    useEffect(() => {
        changeTitle("Tri ân")
    }, []);
    return (
        <div>
            <div className={"w-full mt-10"}>
                <h2 className="font-['Calistoga'] text-text-color-title text-[45px] text-center mb-[23px]">GÓC TRI
                    ÂN</h2>
                <h2 className="text-center text-[20px] px-20">Thay mặt ban tổ chức chúng tôi xin bày tỏ lòng biết ơn
                    sâu sắc và cảm tạ các quý ân nhân trong hành trình lan tỏa yêu thương đến các mảnh đời có hoàn cảnh
                    khó khăn trên khắp địa bàn tỉnh Nghệ An.</h2>
            </div>
            <div className={"w-full flex justify-end"}>
                <input type={"text"} placeholder={"Tìm kiếm"} className={"border-2 border-slate-400 shadow-xl px-3 py-2 mr-10 rounded-full my-10"}/>
            </div>
            <div className={"px-14 "}>
                <Table className={"border-black text-center"} striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Mô tả</th>
                            <th>Ngày quyên góp</th>
                            <th>Số tiền</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map((value, index) => {
                            return <tr key={index}>
                                <td>{value?.donor_id}</td>
                                <td>{value?.name}</td>
                                <td>{value?.description}</td>
                                <td>{moment(value?.donate_date).format("l")}</td>
                                <td>{value?.amount}</td>
                                
                            </tr>
                        })}    
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
