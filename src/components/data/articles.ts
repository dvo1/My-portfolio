import rtks from '../../../public/assets/rtks.jpg';
import formik from '../../../public/assets/formik.jpg';
import javacry from '../../../public/assets/javacry.jpg';
import debouncing from '../../../public/assets/debouncing.jpg';



interface articleDataProps {
    img: any;
    path: string;
}

export const articles: articleDataProps[] = [
    {
        img: debouncing,
        path: 'https://durosinmivictory.hashnode.dev/debouncing-in-react',
    },

    {
        img: formik,
        path: 'https://durosinmivictory.hashnode.dev/learn-to-validate-forms-in-react-using-formik-and-yup-hook-method',
    },

    {
        img: javacry,
        path: 'https://durosinmivictory.hashnode.dev/javascript-made-me-cry',
    },

    {
        img: rtks,
        path: 'https://durosinmivictory.hashnode.dev/redux-toolkit-query-code-splitting',
    },


]

