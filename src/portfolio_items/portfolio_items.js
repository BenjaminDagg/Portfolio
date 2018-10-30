export const portfolio_items = [
    {
        id:1,
        type:'web',
        title: 'Better Youtube',
        desc: 'Better Youtube is my attempt to recreate Youtube using Google\'s YouTube API while adding some quality of life features.' +
            ' These added features include more accurate like/dislike and viewer counts,' +
            ' the ability to browse while watching videos, and sorting videos by like to ' +
            'dislike ratio',
        img: require('../images/better_youtube.jpg'),
        chips: ['JavaScript', 'HTML5','CSS','React', 'YouTube API', 'Heroku'],
        link: '/portfolio/1',
        url: 'https://better-youtube.herokuapp.com/',
        github: 'https://github.com/BenjaminDagg/Better_Youtube',
        images: [require('../images/better_youtube.jpg'),
                 require('../images/byt2.jpg'),
                 require('../images/byt3.jpg'),
                 require('../images/byt4.jpg'),
                ]
    },
    {
        id:2,
        type:'web',
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
        link: '/portfolio/2',
        url: 'https://draw-with-me-dagg.herokuapp.com/',
        github: 'https://github.com/BenjaminDagg/DrawWithMe',
        images: [
            require('../images/draw-with-me.gif'),
            require('../images/dwm1.jpg'),
            require('../images/dwm2.jpg'),
            require('../images/dwm3.jpg'),
            require('../images/dwm4.jpg'),
        ]
    },
    {
        id:3,
        type:'web',
        title: 'Pickup Game Finder',
        desc: 'Pickup Game Finder is a website to help people organize' +
            ' pickup basketball and other sports games in their community. Using' +
            ' Google Maps API, users can place markers on a map of their city where' +
            ' they would like to organize a game. Other users can chose to join that' +
            'event or create their own game.',
        img: require('../images/pgf.jpg'),
        chips: ['JavaScript', 'HTML5','CSS','Angular','Node.js', 'Google Maps API', 'Firebase', 'Heroku'],
        link: '/portfolio/3',
        github: 'https://github.com/BenjaminDagg/PickupGameFinder',
        url: 'https://cst438-group-jabb.herokuapp.com/',
        images:[
            require('../images/pgf.jpg')

        ]
    }
    ,
    {
        id:4,
        type:'web',
        title: 'Harvest Dashboard',
        desc: 'Harvest Dashboard is a website that gives farmers tools to easily track the progress of their fields through real time graphs, analytics, and predictions . Our goal is to give growers information to improve their harvests and plan for future harvests.',
        img: require('../images/harvest_dashboard.jpg'),
        chips: ['JavaScript', 'HTML5','CSS','React','Node.js', 'REST API','Mocha', 'Chai','D3.js','socket.io'],
        link: '/portfolio/4',
        github: 'https://github.com/BenjaminDagg/HarvestDashboard',
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
        type:'web',
        title: 'Trump Tweets',
        desc: 'Trump Tweets is a website that displays random images and' +
            'tweets of Donald Trump using the Ghetty Images API and Twitter API.',
        img: require('../images/trump-tweets.jpg'),
        chips: ['JavaScript', 'HTML5','CSS','Angular','Node.js', 'Twitter API', 'Firebase', 'Heroku', 'REST API', 'Spring Boot'],
        link: '/portfolio/5',
        images:[require('../images/trump-tweets.jpg')],
        url:'https://trump-tweets-bdagg.herokuapp.com/',
        github: 'https://github.com/BenjaminDagg/TrumpTweets'
    }
    ,
    {
        id:6,
        type:'other',
        title: 'CPU Stress Test',
        desc: 'A windows desktop application that stress tests your CPU for stable overclocks.' +
            'Using C# Management API, the program detects the users CPU core count' +
            'then runs a prime number calculation algorithm on all cores.',
        img: require('../images/stress-test.gif'),
        chips: ['.NET', 'C#'],
        link: '/portfolio/6',
        github: 'https://github.com/BenjaminDagg/CPU_Stress_Test',
        images: [require('../images/stress-test.gif')]
    }
    ,
    {
        id:7,
        type:'other',
        title: 'Gaming Macros',
        desc: 'A windows desktop application that lets you AFK in computer' +
            ' games by simulating keypresses in a loop. Tested on Destiny 2',
        img: require('../images/macro-demo.gif'),
        chips: ['.NET', 'C#', 'SQLite'],
        link: '/portfolio/7',
        github: 'https://github.com/BenjaminDagg/Macros',
        images: [
            require('../images/macro-demo.gif'),
            require('../images/macros.jpg')
        ]
    }

];