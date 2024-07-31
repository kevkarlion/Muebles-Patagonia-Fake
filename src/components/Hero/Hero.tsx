'use client'

import Carousel from 'react-bootstrap/Carousel'


export const Hero = () => {
      return (
            <>
                  <Carousel className='bg-gray-400'>
                        <Carousel.Item>
                        <div className='w-full h-40 flex justify-center items-center'>
                              <h1>Primer Slide</h1>
                        </div>
                        <Carousel.Caption>
                        {/* <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        {/* <ExampleCarouselImage text="Second slide" /> */}
                        <div className='w-full h-40 flex justify-center items-center'>
                              <h1>Segundo Slide</h1>
                        </div>
                        <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        {/* <ExampleCarouselImage text="Third slide" /> */}
                        <div className='w-full h-40  flex justify-center items-center'>
                              <h1>Tercero Slide</h1>
                        </div>
                        <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                        </Carousel.Caption>
                        </Carousel.Item>
                  </Carousel>
            </>
      )
}
