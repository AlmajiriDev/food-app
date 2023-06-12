import React from 'react'
import ChefCards from './ChefCards'

function ChefSections() {
    const chefs = [
        {
            name: "Mallam Sadiqu",
            img: "./img/top-chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Arabian Tea (Ataya)"
        },
        {
            name: "Mallam Saeedu",
            img: "./img/top-chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Arabian Tea (Ataya)"
        },
        {
            name: "Jaish Na Barhama",
            img: "./img/top-chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Arabian Tea (Ataya)"
        },
        {
            name: "Baba Giwa",
            img: "./img/top-chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Arabian Tea (Ataya)"
        },
        {
            name: "Babban Yaya",
            img: "./img/top-chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Arabian Tea (Ataya)"
        },
        {
            name: "MS Baba",
            img: "./img/top-chefs/img_1.jpg",
            recipesCount: "10",
            cuisine: "Arabian Tea (Ataya)"
        },
    ]
  return (
    <div className='section chefs'>
        <h1 className='title'>Our Top Chefs</h1>
        <div className='top-chef-container'>
            {
                chefs.map(chef=>(<ChefCards key={chef.name} chef={(chef)} />))
            }
        </div>
    </div>
  )
}

export default ChefSections