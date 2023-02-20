
import React from 'react'
import App from '@/App'
import Mine from '@/pages/mine'
import Discover from '@/pages/discover'
import { Navigate } from 'react-router-dom'
import Friend from '@/pages/friend'
import Recommend from '@/pages/discover/c-pages/recommend'
import Ranking from '@/pages/discover/c-pages/ranking'
import Songs from '@/pages/discover/c-pages/songs'
import Djradio from '@/pages/discover/c-pages/djradio'
import Artist from '@/pages/discover/c-pages/artist'
import Album from '@/pages/discover/c-pages/album'
const routes = [
    {
        path: '/',
        element: <App />,
        children: [{
            index: true,
            element: <Navigate to="/discover" replace />
        }, {
            path: "discover",
            element: <Discover />,
            children: [{
                    index: true,
                    element: <Navigate to="/discover/recommend" replace />
                }, 
                {
                    path: "recommend",
                    element: <Recommend />,
                },{
                    path: "ranking",
                    element: <Ranking />,    
                },{
                    path: "songs",
                    element: <Songs />,      
                },{
                    path: "djradio",
                    element: <Djradio />,       
                },{
                    path: "artist",
                    element: <Artist />,     
                },{
                    path: "album",
                    element: <Album />,     
                }
            ]

        }, {
            path: "my",
            element: <Mine />
        }, {
            path: "friend",
            element: <Friend />
        }]
    }

]
export default routes;