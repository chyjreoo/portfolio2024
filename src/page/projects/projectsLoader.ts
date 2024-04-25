import { Params } from "react-router-dom"

export interface projectsProps {
    name: string,
    title: string,
    desc: string,
    externalLink?: string,
    githubLink?: string,
    preview?: string,
    project_items?: {
        title: string, 
        image: string, 
        type: string,
        detail: string, 
        link: string
    }[]

}

const projectsContent: projectsProps[] = [
    {
        name: 'todolist',
        title: '迷你TODOLIST',
        desc: '用React+Vite製作的簡易todolist，可以新增、編輯任務\n如果完成了也可以打勾，任務會被移動到右側完成的區域；取消勾選完成的任務可以把任務移動回左側未完成區。',
        externalLink: 'https://chyjreoo.github.io/TodoList/',
        githubLink: 'https://github.com/chyjreoo/TodoList',
        preview: './images/projects/todolist.png'
    },
    {
        name: 'pokebook',
        title: 'POKEBOOK',
        desc: '用React執行的簡易寶可夢圖鑑',
        externalLink: 'https://chyjreoo.github.io/pokebook/',
        githubLink: 'https://github.com/chyjreoo/pokebook',
        preview: './images/projects/pokebook.png'
    },
    {
        name: 'pinwork',
        title: '過去作品',
        desc: '過去參與過的部分專案稿件展示',
        project_items: [
            {
                title: '廣懿GOOYII科技',
                image: './images/projects/gooyii.jpg',
                type: '官方網站（產品介紹＋表單）',
                detail: '依照客戶設計稿進行切版及效果流程',
                link: 'https://chiang.pintech.com.tw/GOOYII5/',
            },
            {
                title: '中興大學半導體學程',
                image: './images/projects/semic.jpg',
                type: '官方網站',
                detail: '負責網頁設計及切版',
                link: 'https://semiconductor.nchu.edu.tw/',
            },
            {
                title: 'Yokumoku台灣官方網站',
                image: './images/projects/yokumoku.jpg',
                type: '官方網站＋購物車',
                detail: '負責網頁設計、切版及效果流程',
                link: 'https://chiang.pintech.com.tw/yokumoku_web4/',
            },
            {
                title: '宜家清潔大師',
                image: './images/projects/yija.jpg',
                type: '官方網站',
                detail: '負責網頁設計、切版及效果流程',
                link: 'https://chiang.pintech.com.tw/yija11/',
            },
            {
                title: 'PIDC永續活動App',
                image: './images/projects/pidcapp.jpg',
                type: 'APP（最佳瀏覽設備：行動裝置）',
                detail: '負責網頁設計、切版及效果流程',
                link: 'https://chiang.pintech.com.tw/pidcapp3/',
            },
        ]
    }
]

async function projectsLoader({ params }: { params: Params }) {
    const { name } = params;
    const renderedProject = projectsContent.find((el: projectsProps) => el.name === name);
    if (!renderedProject) {
        return Promise.reject(new Error("Project not found"));
    } else {
        return Promise.resolve(renderedProject);
    }
}

export default projectsLoader;
