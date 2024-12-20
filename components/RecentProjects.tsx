import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'
import { getImageUrl } from "../utils/imagePath"


const RecentProjects = () => {
  // the vertical spacing between these seems to be too much on mobile
  return (
    <div className='py-20' id="projects">
      <h1 className="heading">
        A selection of {' '}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-[10px] lg:gap-y-24 mt-10">
        {projects.map(({id, title, des, img, iconLists, link}) => (
          <div key={id} className="sm:h-[41rem] h-[26rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
            <Link href={link} target="_blank">
              <PinContainer title={link} href={link} >
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h=[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <Image src={getImageUrl("/bg.png")} alt="bg-img" width={465} height={302}/>
                  </div>
                  <Image 
                    src={img}
                    alt={title}
                    className='z-10 absolute bottom-0 h-[revert-layer] rounded-sm rotate-[01deg]'
                    width={465} 
                    height={325}
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-3">
                  {des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3">
                <div className="relative flex justify-center items-center">
                  {iconLists.map((icon, index) => (
                    <div 
                      key={icon} 
                      className={`border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center ${
                        index > 0 ? '-ml-2' : ''
                      }`}
                      style={{ zIndex: iconLists.length - index }}
                    >
                      <img src={icon} alt={`Icon ${index}`} className="p-2" />
                    </div>
                  ))}
                </div>
                  <div className="flex justify-center items-center ">
                    <p className="hidden sm:flex lg:text-xl md:text-xs text-sm text-purple">Check Live Site</p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentProjects