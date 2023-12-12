import React, {memo, useEffect, useState} from 'react';

import { arrow_right_black_icon, calendar_icon, news_img_1, news_img_2 } from "assets/img";
import {Col, Container, Image, Row} from "react-bootstrap";
import {Link, useNavigate} from 'react-router-dom';
import newsApi from 'apis/newsApi';
import {useQuery} from "react-query";
import {CardNew} from "../New";
import moment from "moment";


export const CardNewHome = memo(({image, title, created_at, newId}) => {
    const nav = useNavigate()
    return <div
        onClick={() => nav(`tintuc/${newId}`)}
        className={"w-full hover:cursor-pointer h-[170px] flex-row flex justify-center rounded-md items-center hover:shadow-2xl transition-all duration-700"}>
        <Image src={image} className={"h-full"} />
        <div className={'h-full w-full flex flex-col justify-center'}>
            <span className={"text-2xl font-bold"}>{title}</span>
            <span className={"font-semibold text-blue-600"}>Thời gian: {moment(created_at).format("l")}</span>
        </div>
    </div>
})

function News() {

   const {data, isLoading} = useQuery({
       queryKey: "news",
       queryFn: () => newsApi.listNews()
   })
    console.log(data)

    return (
        <div className={"md:w-4/5 w-full flex md:flex-row flex-col gap-10 mx-auto py-10"}>
            <div className={"md:w-1/3 w-full"}>
                {data && <CardNew newId={data[0]?.newId} image={data[0]?.image} title={data[0]?.title} content={data[0]?.content} />}
            </div>
            <div className={'flex flex-col gap-5 justify-center items-center w-full'}>
                {data && data.slice(0, 3).map((value, index) => {
                    return <CardNewHome image={value?.image} key={index} title={value?.title} created_at={value?.created_at} newId={value?.newId} />
                })}
            </div>
        </div>
    );
}

export default News;


