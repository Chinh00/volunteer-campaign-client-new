import campaignApi from "apis/campaignApi";
import axios from "axios";
import HeaderPage from "page/components/HeaderPage";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

function MediaImage() {
    const params = useParams();
    const[images,setImages] = useState([]);
    const[campaign,setCampaign] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                await axios.get("http://localhost:8080/getByIdCampagin/" + params.idcampaign).then((res) => {
                    const data = res.data.map((item) => ({
                        image : item.image
                    }))
                    setImages(data);
                });
                ;
            } catch (error) {
                console.log('Failed to fetch event list:' + error);
            };
        })();
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const response = await campaignApi.listCampaign();
                setCampaign(response.find(n => n.campaignId == params.idcampaign).name);
            } catch (error) {
                console.log('Failed to fetch user list:' + error);
            }
        })();
    },null)
    return(
        <div>
            <HeaderPage title={campaign} />
            <hr />
            {
                images.map((value,index) => 
                    <img key={index} src={value.image}/>
                )
            }
        </div>
    )
}

export default MediaImage