import React, {memo} from "react";
import {useParams} from "react-router-dom";
import {Image} from "react-bootstrap";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import {useQuery} from "react-query";
import campaignApi from "../../apis/campaignApi";

const CampaignDetail = memo(() => {
    const {id} = useParams()
    
    const {data} = useQuery({
        queryKey: ["campaign", id],
        queryFn: () => campaignApi.getDetailCampaign(id)
    })
    return <div className={"max-w-[730px] min-w-[453px] mx-auto min-h-screen"}>
        <div className={"w-full mb-10"}>
            <Image className={`w-full`} src={data?.image}/>
        </div>
        <span className={"text-[30px] mb-5 font-semibold"}>{data?.title || "No content"}</span>
        <p className={"mb-5"}>
            {data?.content}
        </p>
        <div className={"flex justify-start items-center gap-3 font-bold mb-10"}>
            Share
            <FaFacebook size={30}/>
            <FaInstagram size={30}/>
            <FaYoutube size={30}/>
        </div>
    </div>
})

export default CampaignDetail