import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes';
// import { Design, Develope } from './AllSvgs';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte'

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;


`

const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
padding: 2rem;
width: 30vw;
height: 60vh;
z-index:3;
line-height: 1.5;
cursor: pointer;

font-family: 'Ubuntu Mono',monospace;
display: flex;
flex-direction: column;
justify-content: space-between;

&:hover{
    color: ${props => props.theme.body};
    background-color: ${props => props.theme.text};
}
`

const Title = styled.h2`
display: flex;
justify-content: center;
align-items: center;
font-size: calc(.7em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
margin-right: 1rem;
}
`

const Description = styled.div`
color: ${props => props.theme.text};
font-size: calc(0.3em + 1vw);
padding: 0.5rem 0;


${Main}:hover &{
   
        color:${props => props.theme.body};
    
}

strong{
    margin-bottom: 1rem;
    text-transform: uppercase;
}
ul,p{
    margin-left: 2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                         Backend Engineer
                    </Title>
                    <Description>
                    Backend developer responsibilities include creating, maintaining, testing, and debugging the entire back end of an application or system.
                    </Description>
                    <Description>
                        <strong>Programming Language</strong>
                        <p>
                            Python, Node Js
                        </p>
                    </Description>
                    <Description>
                        <strong>Framework</strong>
                        <p>
                            Express Js, Django, Adonis Js, 
                        </p>
                    </Description>
                    <Description>
                        <strong>Database</strong>
                        <p>
                            Sequelize, Mongoose, MySQL, Knex.js, MongoDB 
                        </p>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        Frontend Developer
                    </Title>
                    <Description>
                        A front-end developer is a type of web developer who focuses on creating the visual and interactive components of a website or web application.
                    </Description>
                    <Description>
                        <strong>Programming Language</strong>
                        <p>
                            Javascript, TypeScript, HTML, CSS
                        </p>
                    </Description>
                    <Description>
                        <strong>Framework</strong>
                        <p>
                            React Js, Vue Js 
                        </p>
                    </Description>
                    <Description>
                        <strong>Libraries</strong>
                        <p>
                            Tailwind, Bootstrap, Framer Motion, SASS, styled-components 
                        </p>
                    </Description>

                </Main>

                <BigTitle text="SKILLS" top="80%" right="30%" />

            </Box>

        </ThemeProvider>

    )
}

export default MySkillsPage
