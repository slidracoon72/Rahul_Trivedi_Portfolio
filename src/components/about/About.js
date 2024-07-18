import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import TerminalButton from './TerminalButton';
import { Box } from "@mui/material";
import { info } from "../../info/Info";


export default function About({ innerRef }) {

    const firstName = info.firstName.toLowerCase();

    function aboutMeText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cat
                about{firstName} </p>
            <p><span style={{ color: info.baseColor }}>about{firstName} <span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function educationText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                education</p>
            <p><span style={{ color: info.baseColor }}>education <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.education.map((school, index) => (
                    <li key={index}><span style={{ color: info.baseColor }}>{school.area}</span> @ {school.institution} GPA: {school.gpa} [{school.start} - {school.end}]</li>
                ))}
            </ul>
        </>;
    }

    function certificates() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                certifications</p>
            <p><span style={{ color: info.baseColor }}>certifications <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.certificates.map((certificate, index) => (
                    <li
                        key={index}><span style={{ color: info.baseColor }}>{certificate.title}</span> by {certificate.by} <a href={certificate.source} rel="noreferrer" target='_blank'>View</a>
                    </li>
                ))}
            </ul>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd skills/tools
            </p>
            <p><span style={{ color: info.baseColor }}>skills/tools <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{ color: info.baseColor }}> Proficient With</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Exposed To</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Frameworks</p>
            <ul className={Style.skills}>
                {info.skills.framework.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
            <p style={{ color: info.baseColor }}> Database</p>
            <ul className={Style.skills}>
                {info.skills.database.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function hobbiesText() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                hobbies/interests</p>
            <p><span style={{ color: info.baseColor }}>hobbies/interests <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    function researchPublications() {
        return <>
            <p><span style={{ color: info.baseColor }}>{firstName}{info.lastName.toLowerCase()} $</span> cd
                research/publications</p>
            <p><span style={{ color: info.baseColor }}> research/publications <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.research.map((research, index) => (
                    <li key={index}>
                        <p>{research.title} <span className={Style.green}> <a href={research.source} rel="noreferrer" target='_blank'>{research.journal}</a></span></p></li>
                ))}
            </ul>
        </>
    }

    function handleDownloadResume() {
        const link = document.createElement('a');
        link.href = `${process.env.PUBLIC_URL}/resume.pdf`;  // Path to your resume file
        link.download = 'resume.pdf';
        link.click();
    }

    return (
        <Box ref={innerRef} display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'} id={'about'}>
            <Terminal id="about" text={aboutMeText()} heading="about me" />
            <TerminalButton onClick={handleDownloadResume}>
                "The Resume of Your Dreams (Or Nightmares)"
            </TerminalButton>
            <Terminal id="education" text={educationText()} heading="education" />
            <Terminal id="skills" text={skillsText()} heading="skills" />
            <Terminal id="certificates" text={certificates()} heading="certifications" />
            <Terminal id="research" text={researchPublications()} heading="research work" />
            <Terminal id="hobbies" text={hobbiesText()} heading="hobbies" />
        </Box>
    )
}