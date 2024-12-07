"use client";
import { WobbleCard } from "@/components/ui/wobble-card";
import Image from "next/image";
import React from "react";


export function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-xs">
        <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        The Future of Artificial Intelligence
</h2>
<p className="mt-4 text-left text-base/6 text-neutral-200">
Exploring the next big trends in AI technology.
</p>
        </div>
        <Image
          src="/steve-johnson-gakXaqzGad0-unsplash.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[15%] grayscale filter -bottom-2 object-contain rounded-2xl"
        />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
        Machine Learning in Healthcare
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
        How AI is transforming the medical industry.
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Deep Learning Demystified
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
          A beginner’s guide to deep learning techniques.
          </p>
        </div>
        <Image
          src="/google-deepmind-6Y4EzfSP5Tc-unsplash.jpg"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[10%] lg:-right-[0%] -bottom-10 object-contain rounded-2xl"
        />
      </WobbleCard>
    </div>
  );
}
