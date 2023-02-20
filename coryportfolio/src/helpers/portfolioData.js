import rankerApi from '../images/projectImages/ranker_6.png'
import meetupApi from '../images/projectImages/meetup_1.png'
import pySelenium from '../images/projectImages/pySelenium_1.png'
import factorioMod from '../images/projectImages/SquidInk-FactorioMods.png'
// Add more, using the same from the factorio mod

const portfolioData = [
    {
        image: rankerApi,
        liveLink: 'https://cory-ranker.azurewebsites.net/',
        githubLink: 'https://github.com/Coryf65/Ranker',
        title: 'React and C# webapi Ranking Website',
        summary: 'Rank movies and albums in a tier list. Which are the best and which are the worst?',
        tech: 'React, Bootstrap, C#, .NET6, WebAPI, Entity Framework, Azure Web App (deployed)'
    },
    {
        image: meetupApi,
        githubLink: 'https://github.com/Coryf65/Meet.API',
        title: 'An API for creating Meetups about Tech or other topics ',
        summary: 'An API using .NET 5 and C#9. Handles CRUD operations with Dependency Injection and Documentation',
        tech: 'C#, .NET 6, EntityFramework, NLog'
    },
    {
        image: pySelenium,
        githubLink: 'https://github.com/Coryf65/Python_Selenium',
        title: 'Using Python and Selenium for Automated Testing',
        summary: 'Selenium helps to automate testing in the browser!',
        tech: 'Python, Selenium, chrome web driver'
    },
    {
        image: factorioMod,
        liveLink: 'https://mods.factorio.com/mod/SquidInk',
        githubLink: 'https://github.com/Coryf65/SquidInk',
        title: 'Factorio game Mod',
        summary: 'A mod that I made for fun to make silly machines and an easier time playing!',
        tech: 'Lua, Factorio API'
    },
]

export default portfolioData;