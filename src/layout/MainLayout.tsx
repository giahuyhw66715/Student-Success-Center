import { Outlet } from "react-router-dom";
import JobFilter from "../components/job/JobFilter";
import Header from "./Header";
import Footer from "./Footer";
import HelperBot from "../components/HelperBot";

const MainLayout = () => {
    return (
        <>
            <HelperBot />
            <Header />
            <JobFilter />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainLayout;
