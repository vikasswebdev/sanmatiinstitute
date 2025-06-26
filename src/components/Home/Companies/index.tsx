"use client"
import Image from "next/image";
import React from "react";
import { TruestedCompanies } from "@/app/api/data";
import { getImagePrefix } from "@/utils/util";

const Companies = () => {
    return (
        <section className='text-center' >
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4">
                <h2 className="text-midnight_text text-2xl font-semibold">Trusted by companies of all sizes</h2>
                <div className="py-14 border-b overflow-hidden">
                    <div className="flex animate-scroll space-x-8">
                        {TruestedCompanies.map((item, i) => (
                            <div key={i} className="flex-shrink-0">
                                <Image
                                    src={`${getImagePrefix()}${item.imgSrc}`}
                                    alt={item.imgSrc}
                                    width={116}
                                    height={36}
                                    className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                        {/* Duplicate items for seamless loop */}
                        {TruestedCompanies.map((item, i) => (
                            <div key={`duplicate-${i}`} className="flex-shrink-0">
                                <Image
                                    src={`${getImagePrefix()}${item.imgSrc}`}
                                    alt={item.imgSrc}
                                    width={116}
                                    height={36}
                                    className="opacity-70 hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Companies;