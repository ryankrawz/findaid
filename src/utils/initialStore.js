const initialStore = {
    currentUser: 'bernie.sanders@gmail.com',
    users: [
        {
            email: 'bernie.sanders@gmail.com',
            password: 'vermontmaplesyrup',
            name: 'Bernie Sanders',
            bio: 'I am once again asking for your financial support.',
            photo: 'berniesanders.jpg',
            isSuperUser: true,
            saved: ['357458']
        }
    ],
    posts: [
        {
            id: '357458',
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
                {
                    name: 'Town Hall Meeting',
                    link: 'atlanta.org'
                }
            ],
            comments: [
                {
                    user: 'bernie.sanders@gmail.com',
                    text: 'This outrageous! We must rally for change.'
                }
            ]
        }
    ],

}

export default initialStore;
