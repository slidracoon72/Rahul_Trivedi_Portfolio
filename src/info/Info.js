import self from "../img/self.png"
import mock5 from "../img/mock5.png"
import moodmusica from "../img/mood-musica.png"
import eventflow from "../img/eventflow.png"
import jobtracker from "../img/jobtracker.png"
import jira from "../img/jira.png"


/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

// export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];
export let colors = ["rgb(255, 102, 102)", "rgb(51, 153, 255)"];

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
    baseColor: "rgb(0,255,164)",
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
        proficientWith: ['java', 'python', 'php', 'javascript', 'react.js', 'node.js', 'git', 'github', 'bitbucket', 'API design', 'bootstrap', 'html5', 'css3', 'figma', 'OOPs'],
        exposedTo: ['rust', 'C#', 'C/C++', 'react native', 'android', 'vue.js', 'sass/scss', 'tailwind', 'AWS', 'docker', 'kubernetes', 'mocha', 'cypress'],
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
            title: "Mood-Musica",
            // live: "https://paytonpierce.dev", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/slidracoon72/mood-musica", // this should be a link to the **repository** of the project, where the code is hosted.
            image: moodmusica,
            techstack: ['React.js, Python Flask, Google Firebase, Spotify API, Face API']
        },
        {
            title: "Event-Flow",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/slidracoon72/EventFlow",
            image: eventflow,
            techstack: ['React.js, Java Springboot, PostgreSQL']
        },
        {
            title: "JobTracker - A Google Chrome Extension",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/slidracoon72/Jobtracker",
            image: jobtracker,
            techstack: ['React.js, C# .NET, MS Azure']
        },
        {
            title: "Jira Clone",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/slidracoon72/Jira-Clone",
            image: jira,
            techstack: ['React.js, Node.js, Bootstrap']
        },
        {
            title: "Other Projects on GitHub...",
            // live: "https://paytonpierce.dev",
            source: "https://github.com/slidracoon72",
            image: mock5,
            techstack: ['Check my GitHub Page to see all my work!']
        }
    ],
    certificates: [
        {
            title: "Front-End Web Development with React",
            source: "https://coursera.org/share/077927876250c8c191ef31627a0fbf75",
            by: "The Hong Kong University of Science and Technology"
        },
        {
            title: "Neural Networks and Deep Learning",
            source: "https://coursera.org/share/2139da80b28478d4df39243af64e41f7",
            by: "DeepLearning.AI"
        },
        {
            title: "Building Deep Learning Models with TensorFlow",
            source: "https://coursera.org/share/47606f0131dcfb0ccc7e8933d5015421",
            by: "IBM"
        },
        {
            title: "Machine Learning with Python",
            source: "https://coursera.org/share/01b4bad4f1f3165d4fa8d20a80aca29e",
            by: "IBM"
        },
        {
            title: "How Google does Machine Learning",
            source: "https://coursera.org/share/994eba10072507dc7ca271bf2a1ad6e8",
            by: "Google Cloud"
        },
        {
            title: "Rust Fundamentals",
            source: "https://coursera.org/share/9b73423b6834dd6ba1aa9bc0cb70e6cc",
            by: "Duke University"
        },
        {
            title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
            source: "https://coursera.org/share/9aa05604807d78018379c13055666024",
            by: "IBM"
        },
        {
            title: "Concurrent Programming in Java",
            source: "https://coursera.org/share/b376be44195029000b8f34e5c333ee07",
            by: "Rice University"
        },
        {
            title: "The Unix Workbench",
            source: "https://coursera.org/share/761551a442212ddf001c197213fd1e1e",
            by: "Johns Hopkins University"
        },
        {
            title: "Cryptography I",
            source: "https://coursera.org/share/ce63d384173a25280d37fc5bd05269e0",
            by: "Stanford University"
        },
        {
            title: "Image and Video Processing: From Mars to Hollywood with a Stop at the Hospital",
            source: "https://coursera.org/share/60ac869bf63d9a7533d109effcbe5511",
            by: "Duke University"
        },
        {
            title: "Ethical Leadership Through Giving Voice to Values",
            source: "https://coursera.org/share/94b57019c0b1413c59ad0e386572471f",
            by: "University of Virginia"
        }
    ],
    research: [
        {
            title: "A Novel Machine Learning Inspired Algorithm To Predict Real-Time Network Intrusions",
            journal: "Springer",
            source: "https://link.springer.com/article/10.1007/s41870-022-00925-w"
        },
        {
            title: "K-Mean and Mean Shift Algorithms in Machine Learning Model for Efficient Malware Categorization",
            journal: "Inder Science Publishers",
            source: "https://www.researchgate.net/publication/361519983_K-mean_and_mean-shift_algorithms_in_machine_learning_model_for_efficient_malware_categorisation"
        }
    ]
}