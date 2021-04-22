const initialStore = {
    currentUser: 'bernie.sanders@gmail.com',
    users: [
        {
            email: 'bernie.sanders@gmail.com',
            password: 'vermontmaplesyrup',
            name: 'Bernie Sanders',
            bio: 'I am once again asking for your financial support.',
            photo: 'berniesanders.jpg',
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
            images: ['landfill.jpg', 'atlantaneighborhood.jpg'],
            resourcesInfo: [
                {
                    name: 'Landfill Zoning Laws',
                    link: 'landfillagency.org'
                }
            ],
            fundsPetitions: [
                {
                    name: 'Stop the Landfill Fund',
                    link: 'stopthelandfill.com'
                }
            ],
            events: [
                // {
                //     name: 'Town Hall Meeting',
                //     link: 'atlanta.org'
                // }
            ],
            comments: [
                {
                    user: 'bernie.sanders@gmail.com',
                    text: 'This outrageous! We must rally for change.'
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
