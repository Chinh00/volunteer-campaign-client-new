import React, {useContext, useEffect} from "react";
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Navigate, useNavigate, useLocation,
} from "react-router-dom";
import Topbar from "../components/layout/Topbar/topbar";
import Header from "../components/layout/Header/header";
import Footer from "../components/layout/Footer/footer";
import Home from "../page/Home";
import About from "../page/About";
import VolunteerPage from "page/VolunteerPage/VolunteerPage";
import DonatePage from "page/DonatePage/DonatePage";
import StoryDetailPage from "page/StoryDetailPage/StoryDetailPage";
import StoryPage from "page/StoryPage/StoryPage";
import Campaign from "page/Campaign";
import Report from "page/Report";
import Grateful from "page/Grateful";
import New from "page/New";
import NewDetails from "page/NewDetails";
import NotFound from "components/NotFound/notFound"; 
import MediaPage from "page/MediaPage/MediaPage";
import MediaImage from "page/MediaPage/MediaImagePage";
import MediaVideo from "page/MediaPage/MediaVideoPage";
import {Image} from "react-bootstrap";
import {page_img} from "../assets/img";
import {MyUserContext} from "../App";
import CampaignDetail from "../page/CampaignDetail";

function DefaultLayout() {
    const {title, changeTitle} = useContext(MyUserContext)
    const nav = useLocation()
    useEffect(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }, [nav.pathname]);
  return (
    <>
      <Topbar />
      <div className={'sticky top-0 z-50 left-0'}>
          <Header />
      </div>
    <div className={'w-full relative'}>
        <Image src={page_img} className={"w-full"} />
        <span className={"absolute top-3/4 left-40 text-white font-bold text-[50px]"}>
            {title}
        </span>
    </div>
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="gioithieu" element={<About />} />
        <Route path="thamgia" element={<VolunteerPage />} />
        <Route path="thuvienanh" element={<MediaPage />} />
        <Route path="mediaImage/:idcampaign" element={<MediaImage />} />
        <Route path="mediaVideo/:idcampaign" element={<MediaVideo />} />
        <Route path="chiendich" element={<Campaign />} />
        <Route path="baocao" element={<Report />} />
        <Route path="trian" element={<Grateful />} />
        <Route path="tintuc" element={<New />} />
        <Route path="quyengop" element={<DonatePage />} />
        <Route path="cauchuyen" element={<StoryPage />} />
        <Route path="cauchuyen/:id" element={<StoryDetailPage />} />
        <Route path="tintuc/:id" element={<NewDetails />} />
      <Route path="chiendich/:id" element={<CampaignDetail />} />
        <Route path="cauchuyen-chitiet/:id" element={<StoryDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </>
  )
);
