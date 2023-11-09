import { useState } from "react";
import Button from "../components/Button.jsx";
import ShoeCard from "../components/ShoeCard.jsx";
import redArrow from "../assets/icons/arrow-right.svg"
import { bigShoe1 } from "../assets/images"
import { shoes, statistics } from "../constants/index"
const Hero = () => {
    const [ bigShoeImg, setbigShoeImg ]= useState(bigShoe1);
    return (
        <section id="home" className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
            <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28">
                <p className='text-xl font-montserrat text-coral-red'>Our Summer collections</p>
                <h1 className="mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                    <br />
                    <span className="text-coral-red mt-10 inline-block">Nike</span>  Shoes
                </h1>
                <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm"> Discover stylish Nike arrivals, quality comfort, and innovation for
                    your active life.</p>
                <Button iconURL={redArrow} label="Shop Now" />
                <div className="flex justify-start items-start flex-wrap gap-16 mt-20 w-full">
                    {statistics.map(state => (
                        <div key={state.label}>
                            <p className="text-4xl font-palanquin font-bold">{state.value}</p>
                            <p className="font-montserrat leading-7 text-slate-gray">{state.label}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* slide show for shoes */}
            <div className="relative flex-1 flex justify-center items-center 
            xl:min-h-screen max-xl:py-40 bg-cover bg-hero
            ">
                <img
                    src={bigShoeImg}
                    width={680}
                    height={500}
                    className="object-contain relative z-50"
                />
                <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((image, index) => (
                        <div key={index}>
                            <ShoeCard
                                key={index}
                                imgURL={image}
                                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Hero;
