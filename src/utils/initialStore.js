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
            isSuperUser: false
        },
        {
            email: 'magicjohnson@lakers.com',
            password: 'dunksonly',
            name: 'Magic Johnson',
            bio: 'I like dunks and a good party.',
            photo: '/assets/magic.jpg',
            isSuperUser: false
        },
        {
            email: 'joysonnn@gmail.com',
            password: 'ilovedogs',
            name: 'Joy Son',
            bio: 'I am a sophomore at BC who wants to stay informed on environmental racism in the US',
            photo: '/assets/joy.jpg',

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
                },
            ],
            fundsPetitions: [
                {
                    name: 'Stop the Landfill Fund',
                    link: '//www.stopthelandfill.com/donate.html'
                },
            ],
            events: [
                {
                    name: 'Town Hall Meeting',
                    link: '//www.atlantadowntown.com/cap/about/town-hall-meetings'
                },
            ],
            comments: [
                {
                    user: 'bernie.sanders@gmail.com',
                    text: 'This is outrageous! We must rally for change.'
                },
                {
                    user: 'isabelle.smyth@gmail.com',
                    text: 'I agree. This is not okay. I am planning to attend the town hall meeting.'
                }
            ]
        },
        {
            id: '357459',
            poster: 'bernie.sanders@gmail.com',
            title: 'Risky Byhalia Connection Pipeline Threatens TN & MS Health, Water Supply',
            location: 'Memphis, TN',
            description: 'In December 2019, Plains All-American and Valero pipeline companies announced plans to build the 49-mile Byhalia Pipeline through southwestern Tennessee and northwestern Mississippi. ',
            images: ['/assets/pipeline.jpg', '/assets/coalpollution.jpg', '/assets/tennesseestreet.jpg'],
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
            events: [],
            comments: [
                {
                    user: 'isabelle.smyth@gmail.com',
                    text: 'As a resident of Tennessee, I\'ve been very frustrated with the government\'s slow response.'
                },
                {
                    user: 'joysonnn@gmail.com',
                    text: 'Will definitely be signing the petition!'
                }
            ]
        },
        {
            id: '902102',
            poster: 'magic@lakers.com',
            title: 'Silverback Gorillas escape from the zoo.. again',
            location: 'Gardena, CA',
            description: 'The mountain silverback encloser at the Gardena zoo has seen another escape. The gorillas went on to rampge the town and cause havok.',
            images: ['/assets/escape.jpg', '/assets/monke.jpg', '/assets/gorilla.jpg'],
            resourcesInfo: [
                {
                    name: 'Animal Control',
                    link: 'https://www.boston.gov/departments/animal-care-and-control'
                }
            ],
            fundsPetitions: [
                {name: 'Increase funding for the zoo',
                link: 'https://www.change.org/p/cincinnati-zoo-justice-for-harambe'
                
                }
            ],
            events: [],
            comments: [
                {
                    user: 'bernie.sanders@gmail.com',
                    text: 'This is an outrage.\ We demand additional funding for the zoo'
                }
            ]
        },
        {
            id: '357460',
            poster: 'bernie.sanders@gmail.com',
            title: 'Sugar Burning Causes Pollution and Respiratory Distress',
            location: 'Pahokee, FL',
            description: 'Every October, Florida\'s sugarcane farmers legally burn all but the sugarcanes in their fields before harvest.',
            images: ['/assets/preharvestburning.jpg', '/assets/smokepollution.jpg'],
            resourcesInfo: [
                {
                    name: 'Black Snow During the Pandemic',
                    link: '//www.wlrn.org/news/2020-12-28/belle-glades-falling-black-snow-is-an-even-greater-concern-as-the-covid-19-pandemic-continues'
                }
            ],
            fundsPetitions: [],
            events: [
                {
                    name: 'Class Action Lawsuit',
                    link: '//www.hbsslaw.com/cases/florida-sugar-cane-burning'
                }
            ],
            comments: [
                {
                    user: 'joysonnn@gmail.com',
                    text: 'The health issues resulting from the pollution are too evident. Legal action must be taken.'
                }
            ]
        },
    ],
    likes:[
        {
            datetime: "2020-02-09T22:53:40Z",
            postId: "357458",
            userEmail: "bernie.sanders@gmail.com"
        }
        
    ]
}

export default initialStore;
