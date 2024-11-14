import HomeCareerHandbook from "../components/home/HomeCareerHandbook";
import HomeCareerList from "../components/home/HomeCareerList";
import HomeFeaturedJobs from "../components/home/HomeFeaturedJobs";
import HomeFeaturedRecruiters from "../components/home/HomeFeaturedRecruiters";
import HomeTopCV from "../components/home/HomeTopCV";

const HomePage = () => {
    return (
        <div className="container mb-3">
            <HomeFeaturedJobs />
            <HomeFeaturedRecruiters />
            <HomeCareerList />
            <HomeTopCV />
            <HomeCareerHandbook />
        </div>
    );
};

export default HomePage;
