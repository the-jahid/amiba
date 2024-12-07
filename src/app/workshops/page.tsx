"use client"

import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Resources } from "../components/workshops/resource"
import { Schedule } from "../components/workshops/schedule"

const Workshops = () => {
 

  return (
    <div>
      <TextGenerateEffect words={'Our WorkShops'} className="text-center py-5 " />
      {/* <Resources /> */}
      <Schedule />
     
    </div>
  )
}

export default Workshops

