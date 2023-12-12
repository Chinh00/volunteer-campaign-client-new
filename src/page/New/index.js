import React, {memo, useContext, useEffect, useState} from 'react';
import Pagination from 'react-bootstrap/Pagination';
import {Container, Row, Card, Col, Button, Image} from "react-bootstrap";
import {AnimatePresence, motion} from "framer-motion"
import './New.css';
import {FaArrowRight} from "react-icons/fa";
import {useNavigate} from "react-router-dom";
import {useQuery} from "react-query";
import newsApi from "../../apis/newsApi";
import LoadingScreen from "../../components/Loading/loadingScreen";
import LoadingSnip from "../../components/Loading/LoadingSnip";
import PaginationComponent from "../Paging/PaginationComponent";
import {MyUserContext} from "../../App";


export const CardNew = memo(({image, title, content, newId}) => {
    const [hover, setHover] = useState(false)
    const nav = useNavigate()
    return <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className={"w-[370px] mx-auto hover:shadow-2xl transition-all duration-700 flex flex-col justify-center overflow-hidden"}>
        <motion.div  className={"w-full"}>
            <Image className={`w-full scale-${hover ? "110" : "100" } transition-all duration-700`} src={image}  />
        </motion.div>
        <div className={"w-full p-5 flex flex-col justify-center items-start gap-3"}>
            <div className={"text-[20px] font-bold"}>{title}</div>
            <div>{content}</div>
            <motion.button
                onClick={() => nav(`/tintuc/${newId}`)}
                className={`text-left py-2 rounded-2xl flex flex-row ${hover ? "bg-[#213360] text-white" : "bg-transparent" } justify-center items-center gap-3 px-${hover ? "5" : "0"} transition-all duration-700`}
            >
                Tìm hiểu thêm
                <FaArrowRight/>
            </motion.button>
        </div>
    </motion.div>
})

function New() {
    const {title, changeTitle} = useContext(MyUserContext)
    useEffect(() => {
        changeTitle("Tin tức")
    }, []);
    const {data, isLoading} = useQuery({
        queryKey: "news",
        queryFn: () => newsApi.listNews()
    })
    const [paginate, setPaginate] = useState({pageIndex: 1, pageSize: 2})
    return (
        <div className={"lg:w-4/5 m-auto w-full"}>
            <div className={"min-h-screen py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"}>
                {isLoading && <LoadingSnip />}
                {!!data && data?.slice((paginate.pageIndex - 1) * paginate.pageSize, paginate.pageIndex * paginate.pageSize).map((value, index) => {
                    return <CardNew key={index} newId={value?.newId} content={value?.content} image={value?.image} title={value?.title} />
                })}
                
            </div>
            
            {data && <PaginationComponent totalPages={data} currentPage={paginate?.pageIndex} onPageChange={setPaginate} />}
        </div>
    );
}

export default New;
