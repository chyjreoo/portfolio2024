import { useLoaderData } from 'react-router-dom';
import { projectsProps } from './projectsLoader';
import Button from '../../components/Button';
import { FaGithub } from "react-icons/fa";
import { GoLinkExternal } from "react-icons/go";

function ProjectDetailPage() {
    const details = useLoaderData() as projectsProps;

    let htmlContent;
    if (details.name !== 'pinwork') {
        htmlContent = <>
            <h1 className='text-4xl text-neutral-800 font-bold mt-5 mb-4'>{details.title}</h1>
            <div className='flex items-center gap-2 mb-4'>
                <a className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-100 hover:text-gray-800 transition-all' target="_blank" href={details.externalLink}><GoLinkExternal size={18} /></a>
                <a className='w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-100 hover:text-gray-800 transition-all' target="_blank" href={details.githubLink}><FaGithub size={20} /></a>
            </div>
            <article className='mb-4 text-neutral-500'>
                <p className='whitespace-pre-wrap'>{details.desc}</p>
            </article>
            <div className='border rounded p-2'>
                <img src={details.preview} alt='preview' />
            </div>
        </>
    } else {
        htmlContent = <>
            <h1 className='text-4xl text-neutral-800 font-bold mt-5 mb-2'>{details.title}</h1>
            <article className='mb-4 text-neutral-500'>
                <p className='whitespace-pre-wrap'>{details.desc}</p>
            </article>
            <div className='border-b mb-8' />
            {
                details.project_items?.map((el,index)=>{
                    return (
                        <div className='p-5 mb-8 bg-zinc-100' key={el.title}>
                            <div className='grid grid-cols-2 gap-8'>
                                <div className='col-span-1'>
                                    <img src={el.image} alt='preview' />
                                </div>
                                <div className="col-span-1">
                                    <span>Case {index+1}.</span>
                                    <h4 className='text-3xl mb-1'>{el.title}</h4>
                                    <p className='whitespace-pre-wrap text-type-color'>{el.type}</p>
                                    <article className='text-neutral-500 my-8'>
                                        <p className='whitespace-pre-wrap'>{el.detail}</p>
                                    </article>
                                    <Button primary>
                                        <a className='flex items-center' href={el.link} target='_blank'>前往 <GoLinkExternal className='ml-2' size={16} /></a>
                                    </Button>

                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    }

    return (
        <div className='container mx-auto pt-20 pb-20'>
            {htmlContent}
        </div>
    )
}

export default ProjectDetailPage;