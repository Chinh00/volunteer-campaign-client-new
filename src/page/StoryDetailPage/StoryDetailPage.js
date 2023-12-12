import HeaderPage from "page/components/HeaderPage";
import React, { useEffect, useState } from "react";
import "./StoryDetailPage.css";
import { Row, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import axios from "axios";
import {Image} from "react-bootstrap";
import {FaFacebook, FaInstagram, FaYoutube} from "react-icons/fa";
import {useQuery} from "react-query";
import storyApi from "../../apis/storyApi";

function StoryDetailPage() {
  const { id } = useParams();

  const {data, isLoading} = useQuery({
    queryKey: ["story", id],
    queryFn: () => storyApi.getDetailStories(id)
  })


  return (
      <div className={"max-w-[730px] min-w-[453px] mx-auto min-h-screen"}>
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
  );
}

export default StoryDetailPage;
