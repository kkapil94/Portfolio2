import HeroSection from "../components/HeroSection";
import Skills from "../components/Skills";


export default function(){
    return (
       <>
            <HeroSection/>
            <div className="w-full h-[1px] bg-white"></div>
            <Skills/>
       </>
    )
}