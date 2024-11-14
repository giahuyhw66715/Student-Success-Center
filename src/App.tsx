import { Route, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import MBTIPage from "./pages/MBTIPage";
import MBTIResultPage from "./pages/MBTIResultPage";
import CreateCVPage from "./pages/CreateCVPage";
import OrganizationPage from "./pages/OrganizationPage";
import LoginPage from "./pages/LoginPage";
import JobDetailPage from "./components/job/JobDetailPage";
import { useEffect } from "react";

const App = () => {
    useEffect(() => {
        document.title = "Student Success Center";
    }, []);
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/viec-lam" element={<JobPage />} />
                <Route path="/viec-lam/:slug" element={<JobDetailPage />} />
                <Route path="/cv/tao-cv" element={<CreateCVPage />} />
                <Route path="/cv/trac-nghiem-mbti" element={<MBTIPage />} />
                <Route
                    path="/cv/ket-qua-trac-nghiem-mbti"
                    element={<MBTIResultPage />}
                />
                <Route path="/doanh-nghiep" element={<OrganizationPage />} />
            </Route>
            <Route path="/sign-in" element={<LoginPage />} />
            {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
    );
};

export default App;
