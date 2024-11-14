import { SignIn } from "@clerk/clerk-react";

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-[url('https://res.cloudinary.com/dti7dy6rm/image/upload/v1731507493/VLU_wkiaci.webp')]  bg-cover bg-no-repeat bg-center">
            <div className="bg-black absolute inset-0 bg-opacity-40"></div>
            <SignIn />
        </div>
    );
};

export default LoginPage;
