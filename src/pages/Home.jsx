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
       </>
    )
}