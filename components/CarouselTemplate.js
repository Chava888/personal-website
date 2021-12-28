import React from 'react'
import styles from './carouselTemplate.module.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'


export default function CarouselTemplate() {


    let items = [
        {
            name: "Random Name #1",
            description: "Probably the most random thing you have ever seen!"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]



    return (
        <Carousel
            autoPlay={false}
            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}>
            {
                items.map((item, i) => <Paper>
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <Button className="CheckButton">
                        Check it out!
                    </Button>
                </Paper>
                )
            }
        </Carousel >
    )
}

