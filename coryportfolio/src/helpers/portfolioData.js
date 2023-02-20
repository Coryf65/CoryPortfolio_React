import factorioMod from '../images/projectImages/SquidInk-FactorioMods.png'
import rankerApi from '../images/projectImages/ranker_6.png'
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
        image: factorioMod,
        liveLink: 'https://mods.factorio.com/mod/SquidInk',
        githubLink: 'https://github.com/Coryf65/SquidInk',
        title: 'Factorio game Mod',
        summary: 'A mod that I made for fun to make silly machines and an easier time playing!',
        tech: 'Lua, Factorio API'
    },
]

export default portfolioData;