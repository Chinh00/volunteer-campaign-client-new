import React, {useContext, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import { Image} from "react-bootstrap";
import newsApi from '../../apis/newsApi';
import './New.css';
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import {useQuery} from "react-query";
import {MyUserContext} from "../../App"; 

function NewDetails() {
    const { id } = useParams(); // Lấy id từ params
    const [news, setNews] = useState(null);
    const {data, isLoading} = useQuery({
        queryKey: ["new", id],
        queryFn: () => newsApi.getDetailNews(id)
    })
    const {title, changeTitle} = useContext(MyUserContext)
    useEffect(() => {
        changeTitle("Tin tức")
    }, []);
    return (
        <div className={"max-w-[730px] min-w-[453px] mx-auto min-h-screen"}>
            <div className={"w-full mb-10"}>
                <Image className={`w-full`} src={data?.image}   />
            </div>
            <span className={"text-[30px] mb-5 font-semibold"}>{data?.title || "No content"}</span>
            <p className={"mb-5"} >
                {data?.content}
            </p>
            <div className={"flex justify-start items-center gap-3 font-bold mb-10"}>
                Share
                <FaFacebook size={30} />
                <FaInstagram size={30}  />
                <FaYoutube size={30}  />
            </div>
        </div>
    );
}

export default NewDetails;
