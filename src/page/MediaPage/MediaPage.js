import campaignApi from "apis/campaignApi";
import HeaderPage from "page/components/HeaderPage";
import {useState, useEffect, useContext} from "react";
import { Link } from "react-router-dom";
import {MyUserContext} from "../../App";
import {useQuery} from "react-query";
function MediaPage() {

    const [campaigns, setCampaigns] = useState([]);
    const {data, isLoading} = useQuery({
        queryKey: "campaigns",
        queryFn: () => campaignApi.listCampaign()
    })
    const {title, changeTitle} = useContext(MyUserContext)
    useEffect(() => {
        changeTitle("Thư viện ảnh")
    }, []);
    return (
        <div>
            <hr />
            <div style={{textAlign:'center'}}>
                { !!data &&
                    data.map((report, index) => (
                        <div key={index}>
                            <h1>{report.name}</h1>
                            <div>
                                <Link to={`/mediaImage/${report.campaignId}`}>Khoảnh khoắc</Link>
                            </div>
                            <div>
                                <Link to={`/mediaVideo/${report.campaignId}`}>Thước phim</Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default MediaPage;