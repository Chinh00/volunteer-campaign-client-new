import React, {memo, useContext, useEffect, useState} from "react";
import { arrow_right_black_icon, news_img_1 } from "assets/img";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import "./StoryPage.css";
import HeaderPage from "page/components/HeaderPage";
import PaginationComponent from "page/Paging/PaginationComponent";
import LoadingSnip from "../../components/Loading/LoadingSnip";
import {useQuery} from "react-query";
import storyApi from "../../apis/storyApi";
import {motion} from "framer-motion";
import {FaArrowRight} from "react-icons/fa";
import {MyUserContext} from "../../App";
const CardStory = memo(({image, title, storyId, content}) => {
    const [hover, setHover] = useState(false)
    const nav = useNavigate()
    return <motion.div
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
        className={"w-[370px] border-2 mx-auto hover:shadow-2xl transition-all duration-700 flex flex-col justify-center overflow-hidden"}>
        <motion.div  className={"w-full"}>
            <Image className={`w-full scale-${hover ? "110" : "100" } transition-all duration-700`} src={image}  />
        </motion.div>
        <div className={"w-full p-5 flex flex-col justify-center items-start gap-3"}>
            <div className={"text-[20px] font-bold"}>{title}</div>
            <div>{content}</div>
            <motion.button
                onClick={() => nav(`/cauchuyen/${storyId}`)}
                className={`text-left py-2 rounded-2xl flex flex-row ${hover ? "bg-[#213360] text-white" : "bg-transparent" } justify-center items-center gap-3 px-${hover ? "5" : "0"} transition-all duration-700`}
            >
                Tìm hiểu thêm
                <FaArrowRight/>
            </motion.button>
        </div>
    </motion.div>
})
const StoryPage = () => {
  

 

    const {data, isLoading} = useQuery({
        queryKey: "stories",
        queryFn: () => storyApi.listStories()
    })
    const [paginate, setPaginate] = useState({pageIndex: 1, pageSize: 2})
    const {title, changeTitle} = useContext(MyUserContext)
    useEffect(() => {
        changeTitle("Câu chuyện")
    }, []);
    return (
      <div className={"lg:w-4/5 m-auto w-full"}>
          <div className={"min-h-screen py-10 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1"}>
              {isLoading && <LoadingSnip/>}
              {!!data && data?.slice((paginate.pageIndex - 1) * paginate.pageSize, paginate.pageIndex * paginate.pageSize).map((value, index) => {
                  return <CardStory key={index} storyId={value?.storyId} content={value?.content} image={value?.image}
                                  title={value?.title}/>
              })}

          </div>
          
          {data &&
              <PaginationComponent totalPages={data} currentPage={paginate?.pageIndex} onPageChange={setPaginate}/>}
      </div>
  );
};

export default StoryPage;
