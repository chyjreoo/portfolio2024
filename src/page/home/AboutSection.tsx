import IndexSection from "../../components/IndexSection";
import { SiHtml5, SiCss3, SiJquery, SiReact } from "react-icons/si";

function AboutSection() {
    return (
        <IndexSection twTitle="關於我" engTitle="About">
            <p>姜皓云，台南人，畢業於國立臺中科技大學多媒體設計系。<br />自2021年1月至2024年2月於品科技股份有限公司擔任前端設計師，主要負責視覺設計及畫面切版，製作稿件並與客戶確認畫面流程。<br /><br />在此之前任職過婚紗攝影助理、影片剪輯、行政助理以及咖啡廳服務生。</p>

            <div className="grid grid-cols-2 gap-8 pt-12 mb-2.5">
                <div className="col-span-1">
                    <div className="flex items-center group">
                        <SiHtml5 className="mr-4 text-zinc-500 opacity-60 group-hover:text-orange-600 group-hover:opacity-100" size="50"  />
                        <div className="cursor-default">
                            <h4>HTML</h4>
                        </div>
                    </div>
                    
                </div>
                <div className="col-span-1">
                    <div className="flex items-center group">
                        <SiCss3 className="mr-4 text-zinc-500 opacity-60 group-hover:text-sky-500 group-hover:opacity-100" size="50"  />
                        <div className="cursor-default">
                            <h4>CSS</h4>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex items-center group">
                        <SiJquery className="mr-4 text-zinc-500 opacity-60 group-hover:text-sky-700 group-hover:opacity-100" size="50"  />
                        <div className="cursor-default">
                            <h4>Jquery</h4>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div className="flex items-center group">
                        <SiReact className="mr-4 text-zinc-500 opacity-60 group-hover:text-sky-400 group-hover:opacity-100" size="50"  />
                        <div className="cursor-default">
                            <h4>React</h4>
                        </div>
                    </div>
                </div>
            </div>
        </IndexSection>
    )
}

export default AboutSection;