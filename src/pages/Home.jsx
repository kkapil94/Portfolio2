import ConnectSection from "../components/ConnectSection";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import SkillSection from "../components/SkillSection";


export default function(){
    return (
       <>
            <HeroSection/>
            <div className="w-full h-[1px] bg-white"></div>
            <SkillSection/>
            <div className="w-full h-[1px] bg-white"></div>
            <ProjectSection/>
            <div className="w-full h-[1px] bg-white"></div>
            <ConnectSection/>
            <div className="w-full h-[1px] bg-white"></div>
            <Footer/>
       </>
    )
}