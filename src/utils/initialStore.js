const initialStore = {
    currentUser: 'bernie.sanders@gmail.com',
    users: [
        {
            email: 'bernie.sanders@gmail.com',
            password: 'vermontmaplesyrup',
            name: 'Bernie Sanders',
            bio: 'I am once again asking for your financial support.',
            photo: '/assets/berniesanders.jpg',
            isSuperUser: true
        },
        {
            email: 'isabelle.smyth@gmail.com',
            password: 'bceagles',
            name: 'Isabelle Smyth',
            bio: 'Looking to help my community BC 21',
            photo: '/assets/isabelle.jpg',
            isSuperUser: true
        }
    ],
    posts: [
        {
            id: '357458',
            poster: 'bernie.sanders@gmail.com',
            title: 'Landfill in Underprivileged Area',
            location: 'Atlanta, GA',
            description: 'A new landfill site has been marked in an impoverished neighborhood without the community members\' consent.',
            images: ['/assets/landfill.jpg', '/assets/atlantaneighborhood.jpg'],
            resourcesInfo: [
                {
                    name: 'Landfill Zoning Laws',
                    link: '//www.atlantaga.gov/government/departments/city-planning/office-of-zoning-development/zoning'
                }
            ],
            fundsPetitions: [
                {
                    name: 'Stop the Landfill Fund',
                    link: '//www.stopthelandfill.com/donate.html'
                }
            ],
            events: [
                {
                    name: 'Town Hall Meeting',
                    link: '//www.atlantadowntown.com/cap/about/town-hall-meetings'
                }
            ],
            comments: [
                {
                    user: 'bernie.sanders@gmail.com',
                    text: 'This is outrageous! We must rally for change.'
                }
            ]
        },
        {
            id: '357459',
            poster: 'bernie.sanders@gmail.com',
            title: 'RISKY BYHALIA CONNECTION PIPELINE THREATENS TENNESSEE & MISSISSIPPI HEALTH, WATER SUPPLY',
            location: 'Memphis, TN',
            description: 'In December 2019, Plains All-American and Valero pipeline companies announced plans to build the 49-mile Byhalia Pipeline through southwestern Tennessee and northwestern Mississippi. ',
            images: ['/assets/landfill.jpg', '/assets/atlantaneighborhood.jpg'],
            resourcesInfo: [
                {
                    name: 'FracTracker',
                    link: '//www.fractracker.org/2021/03/risky-byhalia-pipeline-threatens-tennessee-mississippi-health-and-water-supply/'
                }
            ],
            fundsPetitions: [
                {name: 'No Oil In Our Soil',
                link: '//www.ipetitions.com/petition/no-oil-in-our-soil'
                
                }
            ],
            events: [
                {
                    name: 'Town Hall Meeting',
                    link: '//www.memphis.org'
                }
            ],
            comments: [
                {
                    user: 'bernie.sanders@gmail.com',
                    text: 'This is outrageous! We must rally for change.'
                }
            ]
        }
    ],
    likes:[
        {
            datetime:"2020-02-09T22:53:40Z",
            postId:"357458",
            userEmail: "bernie.sanders@gmail.com"
        }
        
    ]
}

export default initialStore;
