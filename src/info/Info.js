import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */

/* 
This variable will change the layout of the website from multipage to single, scrollable page
*/
export let singlePage = false;

/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Rahul",
    lastName: "Trivedi",
    initials: "RT", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Full Stack Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👨‍🎓',
            text: 'Passionate About Coding'
        },
        {
            emoji: '🌎',
            text: 'Based in the US'
        },
        {
            emoji: "🏫",
            text: "Master's in Computer Science @ Purdue University"
        },
        {
            emoji: "📧",
            text: "trivedirahul1999@gmail.com"
        }
    ],
    socials: [
        {
            link: "https://www.linkedin.com/in/rahul-trivedi-7b82a8173/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://github.com/slidracoon72",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.instagram.com/rahultrivedi999?igsh=MWJ1MG9iMmVhYjdsOQ%3D%3D&utm_source=qr",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://twitter.com/iamrjt1999",
            icon: "fa fa-twitter",
            label: 'twitter'
        }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Rahul. I'm a Master's Student at Purdue University. I enjoy planting, hiking, and I believe artificial intelligence will inevitably rule us all one day. You should hire me!",
    skills:
        {
            proficientWith: ['java', 'python', 'php', 'javascript', 'react.js', 'node.js', 'git', 'github', 'bootstrap', 'html5', 'css3', 'figma', 'OOPs'],
            exposedTo: ['rust', 'C#', 'C/C++', 'react native', 'android', 'vue.js', 'AWS', 'docker', 'mocha', 'cypress'],
            framework: ['springboot', 'flask', '.NET', 'express.js', 'django'],
            database: ['mongodb', 'firebase', 'mysql', 'postgresql', 'ms sql', 'oracle sql']
        }
    ,
    hobbies: [
        {
            label: 'planting',
            emoji: '🌿'
        },
        {
            label: 'hiking',
            emoji: '🧗‍♂️'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'cooking',
            emoji: '🌶'
        }
// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    education: [
        {
            area: "Master's in Computer Science",
            institution: "Purdue University",
            degree: "Master's",
            start: "January 2023",
            end: "December 2024",
            gpa: "4.0/4.0"
        },
        {
            area: "Bachelor's in Computer Science",
            institution: "VIT University",
            degree: "Bachelor's",
            start: "August 2017",
            end: "June 2021",
            gpa: "8.19/10.0"
        }
// I've included a few examples, feel free to add more or remove them. Just make sure to keep the format consistent (i.e. same keys)
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "Project 1",
            live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock3
        },
        {
            title: "Project 4",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock4
        },
        {
            title: "Project 5",
            live: "https://paytonpierce.dev",
            source: "https://github.com/paytonjewell",
            image: mock5
        }
    ]
}