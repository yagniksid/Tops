import React from 'react'
import Header from '../../Component/Header/Header'
import SubHeader from '../../Component/Header/SubHeader'
import Section1 from '../../Component/Sections/Section1'
import Section2 from '../../Component/Sections/Section2'
import Slider3 from '../../Component/Sliders/Slider3/Slider3'
import Slider2 from '../../Component/Sliders/Slider2/Slider2'
import Slider1 from '../../Component/Sliders/Slider1/Slider1'
import Slider4 from '../../Component/Sliders/Slider4/Slider4'




export default function Homepage() {
    return (
        <div>
            <Header />
            <SubHeader />
            <Slider1 />
            <Section1 />
            <Slider2 />
            <Slider3 />
            <Section2 />
            <Slider4 />
        </div>
    )
}
