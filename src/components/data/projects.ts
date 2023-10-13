import dashboard from '../../../public/assets/dashboard.png';
import elaborate from '../../../public/assets/elaborate.png';
import port from '../../../public/assets/port.jpg';

interface projectDataProps {
    img: any;
    title: string;
    desc: string;
    tech: string[];
    path: string;
}

export const projects: projectDataProps[] = [
    {
        img: dashboard,
        title: 'E-commerce Seller Dashboard',
        desc: 'Babyducts is an ecommerce platform tailored for baby products, offering a specialized seller dashboard. Sellers can sign up, list their baby products, and manage their inventory and earn seamlessly.',       
        tech: ["Typescript", "NextJS", "Material Ui"],
        path:  'https://babyducts-seller-git-dev-babyducts1.vercel.app/',
    },

    {
        img: elaborate,
        title: 'Travel Agency Website',
        desc: 'Travel agency website that provides information on oversea travel, job opportunities at affordable rates.',     
        tech: ['React', 'Javascript', 'Vanilla CSS'],
        path: 'https://elaboratebw.vercel.app/',
    },

    {
        img: port,
        title: 'Portfolio Website',
        desc: 'Portfolio webpage displaying frontend projects and techical articles',     
        tech: ['Typecsript', 'NextJS', 'MUI'],
        path: 'https://my-portfolio-dvo1.vercel.app/',
    },
]