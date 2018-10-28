export const portfolio_items = [
    {
        id:1,
        title: 'Better Youtube',
        desc: 'Better Youtube is my attempt to recreate Youtube using Google\'s YouTube API while adding some quality of life features.' +
            ' These added features include more accurate like/dislike and viewer counts,' +
            ' the ability to browse while watching videos, and sorting videos by like to ' +
            'dislike ratio',
        img: require('../images/better_youtube.jpg'),
        chips: ['JavaScript', 'HTML5','CSS','React', 'YouTube API', 'Heroku'],
        link: 'https://better-youtube.herokuapp.com/'
    },
    {
        id:2,
        title: 'Draw With Me',
        desc: 'Draw With Me is a website to draw and' +
            'chat with your friends in real time. Using' +
            'a socket server, users can collaborate to ' +
            'draw images with a variety of brushes, colors,' +
            'and shapes. On arrival users can either create a room' +
            ' or join a friends room to begin chatting and drawing.',
        img: require('../images/draw-with-me.gif'),
        chips: ['JavaScript', 'HTML5','CSS','React','Node.js',
                'socket.io', 'Heroku'],
        link: 'https://draw-with-me-dagg.herokuapp.com/'
    },
    {
        id:3,
        title: 'Pickup Game Finder',
        desc: 'Pickup Game Finder is a website to help people organize' +
            ' pickup basketball and other sports games in their community. Using' +
            'Google Maos API, users can place markers on a map of their city where' +
            'they would like to organize a game. Other users can chose to join that' +
            'event or create their own. The website also includes a built in team organizer with' +
            'a ranking and tournament system. Includes a realtime chat room to facilitate' +
            'organizing games.',
        img: require('../images/pgf.jpg'),
        chips: ['JavaScript', 'HTML5','CSS','Angular','Node.js', 'Google Maps API', 'Firebase', 'Heroku'],
        link: 'https://cst438-group-jabb.herokuapp.com/'
    }
    ,
    {
        id:4,
        title: 'Harvest Dashboard',
        desc: 'Harvest Dashboard is a website that gives farmers tools to easily track the progress of their fields through real time graphs, analytics, and predictions . Our goal is to give growers information to improve their harvests and plan for future harvests.',
        img: require('../images/harvest_dashboard.jpg'),
        chips: ['JavaScript', 'HTML5','CSS','React','Node.js', 'REST API','Mocha', 'Chai','D3.js','socket.io'],
        link: '/portfolio/4',
        images: [
            require('../images/HarvestDashboard/analytics-page1.jpg'),
            require('../images/HarvestDashboard/analytics-page2.jpg'),
            require('../images/HarvestDashboard/analytics-page3.jpg'),
            require('../images/HarvestDashboard/home-screen1.jpg'),
            require('../images/HarvestDashboard/home-screen2.jpg'),
            require('../images/HarvestDashboard/login-page.jpg'),
            require('../images/HarvestDashboard/maps-page1.jpg'),
            require('../images/HarvestDashboard/analytics-page2.jpg'),
            require('../images/HarvestDashboard/analytics-page3.jpg'),
            require('../images/HarvestDashboard/realtime-page.jpg'),
            require('../images/HarvestDashboard/register-page.jpg'),
        ]
    }
    ,
    {
        id:5,
        title: 'Trump Tweets',
        desc: 'Trump Tweets is a website that displays random images and' +
            'tweets of Donald Trump using the Ghetty Images API and Twitter API.',
        img: require('../images/trump-tweets.jpg'),
        chips: ['JavaScript', 'HTML5','CSS','Angular','Node.js', 'Twitter API', 'Firebase', 'Heroku', 'REST API', 'Spring Boot'],
        link: 'https://trump-tweets-bdagg.herokuapp.com/'
    }

];