import dan from '../../../public/assets/dan.png';
import bunmi from '../../../public/assets/bunmi.jpg';
import sooft from '../../../public/assets/sooft.jpg';
import chi from '../../../public/assets/chi.jpg'

interface reviewDataProps {
    img: any;
    name: string;
    stack: string;
    review: string;
    path: string;
}

export const reviews: reviewDataProps[] = [
    {
        img: dan,
        name: 'Daniel Olamide',
        stack: 'Frontend Engineer',
        review: 'I highly recommend Durosinmi Victory as a frontend developer. He is not only smart and technically proficient but also exceptionally easy to communicate with. His willingness to learn and adapt to new challenges makes him an invaluable asset to any team.',
        path: 'https://www.linkedin.com/in/daniel-funmiluyi'
    },

    {
        img: chi,
        name: 'Chidera Stella',
        stack: 'Backend Engineer',
        review: 'Durosinmi Victory is someone I have been working with on a project these past few months, I can attest to his diligence and hardwork. Victory is also a Team player. Being a leader, he understands how to coerce even the most introverted team member to join the conversation.',
        path: 'https://www.linkedin.com/in/chidera-stella-onumajuru?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
    },

    {
        img: bunmi,
        name: 'Oluwabunmi Adetunji',
        stack: 'Product Manager',
        review: 'It was a pleasure working alongside Durosinmi, who is not only a highly skilled frontend developer but also a great team player. His strong technical skillset and remarkable ownership of tasks and projects make him an exceptional asset for any frontend development role',
        path: 'https://www.linkedin.com/in/oluwabunmiadetunji'
    },

    {
        img: sooft,
        name: 'Stephen Olushola',
        stack: 'UI/UX Designer',
        review: 'I have had the pleasure of working with Duro for some time now and his skills are exceptional. Duro is not only proficient in his skills but also a great team player making him a valuable member to your project or team.',
        path: 'https://www.linkedin.com/in/daniel-funmiluyi'
    },
]

















