export const emojis = {
  'likes': '👍',
  'heart': '😍',
  'sad': '😭',
};

export const news = [
    {
        id: '47ld',
        message: 'Bonjour tout le monde !',
        date: Date.now() - 100,
        author: {
            name: 'Quentin',
            avatar: 'https://img1.freepng.fr/20180626/ehy/kisspng-avatar-user-computer-icons-software-developer-5b327cc951ae22.8377289615300354013346.jpg'
        },
        reactions: {
            likes: 4,
            heart: 5,
            sad: 0
        },
        coms: [
            {
                message: 'Salut bg !',
                date: Date.now() - 10000,
                author: {
                    name: 'Marc',
                    avatar: 'https://watson.mg/wp-content/uploads/2019/12/avatar.png'
                },
                newsId: '47ld'
            },
            {
                message: 'Salam khoya !',
                date: Date.now() - 30000,
                author: {
                    name: 'Adavan',
                    avatar: 'https://i2.wp.com/www.cssscript.com/wp-content/uploads/2020/12/Customizable-SVG-Avatar-Generator-In-JavaScript-Avataaars.js.png?fit=438%2C408&ssl=1'
                },
                newsId: '47ld'
            },
        ]
    },
    {
        id: 'i9pz',
        message: 'Toujours un plaisir ce confinement ...',
        date: Date.now() - 100000,
        author: {
            name: 'Manon',
            avatar: 'https://cdn.iconscout.com/icon/free/png-256/avatar-1924065-1628715.png'
        },
        reactions: {
            likes: 2,
            heart: 0,
            sad: 3
        },
        coms: []
    },
];