import React from 'react'
import IdCard from '../assets/id-card.png'
const About_me = () => {
  return (
    <div className='md:flex px-3 md:py-10 py-4 items-center justify-between bg-[#F0FBF1] '>
        <div className="img md:flex flex-col justify-center items-center">
            <img id='image' className='image md:h-[40rem] ' src={IdCard} alt="image" />
        </div>
        <div className="text">
            <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold '>Hello Everyone, <br /> I am Shristi Singh</h1>
            <p className='max-w-[40rem] my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor officia quaerat inventore veritatis sequi? In, qui quam! Odio aspernatur id quis possimus quo cum! Delectus hic perferendis consectetur officia doloremque?
            Atque necessitatibus, qui dolorum saepe ea voluptatibus expedita molestiae corrupti quaerat alias ducimus illo non totam molestias veniam voluptates. Sapiente aspernatur soluta sunt laborum repellat, eveniet totam enim nemo officia!</p>
            <button className='px-3 py-2 bg-[#FFC60A] hover:bg-[#829873] rounded-full font-semibold transition-all duration-300 my-5'>Explore More</button>
        </div>
        
    </div>
  )
}

export default About_me