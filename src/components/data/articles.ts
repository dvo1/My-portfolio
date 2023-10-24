import rtks from '../../../public/assets/rtks.jpg';
import formik from '../../../public/assets/formik.jpg';


interface articleDataProps {
    img: any;
    title: string;
    desc: string;
    path: string;
}

export const articles: articleDataProps[] = [

    {
        img: formik,
        title: 'E-commerce Seller Dashboard',
        desc: 'Babyducts is an ecommerce platform tailored for baby products, offering a specialized seller dashboard',
        path: 'https://durosinmivictory.hashnode.dev/learn-to-validate-forms-in-react-using-formik-and-yup-hook-method',
    },

    {
        img: rtks,
        title: 'E-commerce Seller Dashboard',
        desc: 'Babyducts is an ecommerce platform tailored for baby products, offering a specialized seller dashboard',
        path: 'https://durosinmivictory.hashnode.dev/redux-toolkit-query-code-splitting',
    },


]

