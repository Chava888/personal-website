import React from 'react'
import styles from './carouselTemplate.module.css'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


export default function CarouselTemplate() {


    let items = [
        {
            name: <img src="/images/Davis.jpg" alt="Davis Picture" />,
            description: "First Project"
        },
        {
            name: "Random Name #2",
            description: "Hello World!"
        }
    ]



    return (
        <Carousel className={styles.size} style={{ position: "static" }}
            autoPlay={false}
            fullHeightHover={true}
            swipe={true}
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosNewIcon />}
            navButtonsProps={{ style: { backgroundColor: 'darkblue' } }}
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

