import React, {useContext, useEffect, useState} from 'react';
import HeaderPage from "page/components/HeaderPage";
import {Container, Row, Table, Badge, Accordion} from "react-bootstrap";
import generalReportsApi from "../../apis/generalReportsApi";
import {MyUserContext} from "../../App";
import {useQuery} from "react-query";
import campaignApi from "../../apis/campaignApi";
import {FaFileAlt} from "react-icons/fa";

function Report() {
    const [generalReports, setGeneralReports] = useState([]);
    const {title, changeTitle} = useContext(MyUserContext)
    useEffect(() => {
        changeTitle("Báo cáo")
    }, []);
    const {data} = useQuery({
        queryKey: "campaign",
        queryFn: () => campaignApi.listCampaign()
    })
    const [id, setId] = useState(null)
    const {data: file} = useQuery({
        queryKey: "test",
        queryFn: () => generalReportsApi.listGeneralReport()
    })

    
    return (
        <div className={"md:w-3/5 w-full px-20 md:px-0 mx-auto py-20"}>
            <Accordion defaultActiveKey="0">
                {data && data.map((value, index) => {
                   return  <Accordion.Item onClick={() => setId(value?.campaignId)} eventKey={index} key={index}>
                       <Accordion.Header>{value?.name}</Accordion.Header>
                       <Accordion.Body>
                           <div className={"w-full flex flex-col justify-center items-center"}>
                               {file && file.filter(e => e?.campaignId === value?.campaignId).map((val, ind) => {
                                   return <span key={ind} className={"w-full text-left flex justify-start gap-3 items-center border-2 rounded-full px-3 py-1 bg-slate-300 cursor-pointer"}><FaFileAlt /> {val?.attachment}</span>
                               })}
                           </div>
                       </Accordion.Body>
                   </Accordion.Item>
                })}
            </Accordion>
        </div>
    );
}

export default Report;
