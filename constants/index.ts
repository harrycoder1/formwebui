import { actionBoxType, footerLinksType, mediaDatailType, testomonialType } from "@/types"

export const navlinks = [
    { title: "Home", url: "/" },
    { title: "About Us", url: "/about" },
    { title: "Contact Us", url: "/contact" }
]

export const actiiondata: actionBoxType[] = [
    {
        title: "Design quizzes, challenge others.",
        imgUrl: "/actions/createicon2.png",
        path: "/",
        descriptiom: "this is description"
    },
    {
        title: "Discover quizzes, explore  topics.",
        imgUrl: "/actions/findicon2.png",
        path: "",
        descriptiom: "this is description"
    },
    {
        title: "Evaluate knowledge",
        imgUrl: "/actions/testicon.png",
        path: "/",
        descriptiom: "this is description"
    }

];

export const aboutusdata = [
    "Welcome to h-Quiz, your ultimate destination for creating and sharing captivating quizzes! We are a leading online platform that empowers individuals, educators, and organizations to effortlessly design and distribute engaging quizzes.",
    "At h-Quiz, we understand the power of quizzes to educate, entertain, and connect people. Whether you are a teacher looking to engage your students, a business seeking to engage customers, or simply someone who loves creating and sharing quizzes, our user-friendly interface and comprehensive features make it a breeze to bring your ideas to life.",
    "Our Mission : We are on a mission to revolutionize the way quizzes are created and shared. Our goal is to provide a seamless experience for our users, enabling them to express their creativity, test knowledge, and ignite curiosity in a fun and interactive manner"
];

export const testomonialdata: testomonialType[] = [
    {
        userid: {
            image: "/profile.jpg",
            username: "kiyara jhonson",
            email: "harish@gmail.com"
        },
        comment: "this is amzing websiter for diay use Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse nulla ad, corrupti impedit unde explicabo adipisci, obcaecati est minima voluptate hic a possimus"
        ,
        star: 3,
        date: "11-2-2023"
    },

    {
        userid: {
            image: "/profile.jpg",
            username: "kiyara jhonson",
            email: "harish@gmail.com"
        },
        comment: "this is amzing websiter for diay use Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse nulla ad, corrupti impedit unde explicabo adipisci, obcaecati est minima voluptate hic a possimus"
        ,
        star: 3,
        date: "11-2-2023"
    },
    {
        userid: {
            image: "/profile.jpg",
            username: "motu goplua",
            email: "harish@gmail.com"
        },
        comment: "this is amzing websiter for diay use Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse nulla ad, corrupti impedit unde explicabo adipisci, obcaecati est minima voluptate hic a possimus"
        ,
        star: 3,
        date: "11-2-2023"
    },
    {
        userid: {
            image: "/profile.jpg",
            username: "vuir goplua",
            email: "harish@gmail.com"
        },
        comment: "this is amzing websiter for diay use Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse nulla ad, corrupti impedit unde explicabo adipisci, obcaecati est minima voluptate hic a possimus"
        ,
        star: 3,
        date: "11-2-2023"
    },
    {
        userid: {
            image: "/profile.jpg",
            username: "yash dharmik",
            email: "harish@gmail.com"
        },
        comment: "this is amzing websiter for diay use Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse nulla ad, corrupti impedit unde explicabo adipisci, obcaecati est minima voluptate hic a possimus"
        ,
        star: 3,
        date: "11-2-2023"
    },
    {
        userid: {
            image: "/profile.jpg",
            username: "don bhai",
            email: "harish@gmail.com"
        },
        comment: "this is amzing websiter for diay use Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse nulla ad, corrupti impedit unde explicabo adipisci, obcaecati est minima voluptate hic a possimus"
        ,
        star: 3,
        date: "11-2-2023"
    },

    {
        userid: {
            image: "/profile.jpg",
            username: "vikky roy",
            email: "harish@gmail.com"
        },
        comment: "this is amzing websiter for diay use Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates esse nulla ad, corrupti impedit unde explicabo adipisci, obcaecati est minima voluptate hic a possimus"
        ,
        star: 3,
        date: "11-2-2023"
    },



];

// for footer media detial 

export const mediaDetailData: mediaDatailType[] = [
    {
        logo: "/contactlogo.png",
        title: "xxxxxxxxxx",

    },
    {
        logo: "/gmaillogo.png",
        title: "harish....u@gmail.com",

    }
    ,
    {
        logo: "/locationlogo.png",
        title: "Nagpur ,Maharastra,India",

    }

];

// for footer content 



export const footerlinks: footerLinksType[] = [
    {
        title: "Contact Us",
        expore: [
            { name: "Email", descrip: "har*****@gmail.com" },

            { name: "Phone", descrip: "xxxx323xxx" },
            { name: "Address", descrip: "Vinobha bhave nagar ,nagpur-17" }
        ],

    }
    ,
    {
        title: "About US",

        expore: [
            { name: "Company Name", descrip: "h-Quizr" },

            { name: "Mission", descrip: "To revolutionize the way quizzes are created and shared." },
            { name: "Our Team", descrip: "Meet the passionate individuals behind h-Quiz." }
        ],

    },
    {
        title: "Resources",
        expore: [
            { name: "FAQs", descrip: "Find answers to commonly asked questions." },

            { name: "Blog", descrip: "Stay updated with the latest news, tips, and trends in quiz creation." },
            { name: "Terms of Service", descrip: "Read our terms and conditions." },
            { name: "Privacy Policy", descrip: "Learn how we handle your data." }
        ],


    },
    {
        title: "Help and Support",
        expore: [
            { name: "Support Center", descrip: " Access our comprehensive help center for guides and tutorials." },

            { name: "Report an Issue", descrip: "Report any technical issues or problems you encounter." },
            { name: "Feedback", descrip: "Share your feedback to help us improve." }
        ],


    }
]