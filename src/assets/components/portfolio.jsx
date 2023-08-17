import React from 'react';

function Portfolio() {
    return(
        <div className='portfolio-box'>
            <div className='card' id='card-1'>
                <a href='https://github.com/FelixW01/movie-forum-app'><h3>Movie Forum</h3></a>
                <p>mysql, API's, Express, Handlebars </p>
                <a href="https://dry-cove-24471-f11ca301104d.herokuapp.com/" className='img'>
                <img src='./src/assets/movie-forum.JPG' className='project-img' />
                </a>
            </div>
            <div className='card' id='card-2'>
                <a href='https://github.com/JonJonS06/movie-app'><h3>Movie App</h3></a>
                <p>API's, Javascript, HTML</p>
                <a href="https://jonjons06.github.io/movie-app/" className='img'>
                <img src='./src/assets/movie-app.JPG' className='project-img' />
                </a>
            </div>
            <div className='card' id='card-3'>
                <a href='https://github.com/AshleyBraxton/quiz-game'><h3>Javasript Quiz</h3></a>
                <p>Javascript, HTML, CSS</p>
                <a href="https://ashleybraxton.github.io/quiz-game/" className='img'>
                <img src='./src/assets/quiz-app.JPG' className='project-img' />
                </a>
            </div>
            <div className='card' id='card-4'>
                <a href='https://github.com/AshleyBraxton/weather-forecast'><h3>Weather App</h3></a>
                <p>API's, JavaScript, HTML, CSS</p>
                <a href="https://ashleybraxton.github.io/weather-forecast/" className='img'>
                <img src='./src/assets/weather-app.JPG' className='project-img' />
                </a>
            </div>
            <div className='card' id='card-5'>
                <a href='https://github.com/AshleyBraxton/password-generator'><h3>Password generator</h3></a>
                <p>Javascript</p>
                <a href="https://ashleybraxton.github.io/password-generator/" className='img'>
                <img src='./src/assets/password-generator.JPG' className='project-img' />
                </a>
            </div>
            <div className='card' id='card-6'>
                <a href='https://github.com/AshleyBraxton/day-planner'><h3>Day Planner</h3></a>
                <p>Javascript</p>
                <a href="https://ashleybraxton.github.io/day-planner/" className='img'>
                <img src='./src/assets/day-planner.JPG' className='project-img' />
                </a>
            </div>
        </div>
    )
}

export default Portfolio;