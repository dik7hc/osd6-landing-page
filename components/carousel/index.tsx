'use client'
import dynamic from 'next/dynamic'

const Carousel = dynamic(() => import('./carousel'), {
  loading: () => (
    <div className="flex size-full items-center justify-center bg-white p-4">
      <div className="animate-pulse">
        <div className="flex gap-3">
          <div className="h-80 w-56 shrink-0 rounded-3xl bg-gray-200 md:h-[30rem] md:w-96"></div>
          <div className="h-80 w-56 shrink-0 rounded-3xl bg-gray-200 md:h-[30rem] md:w-96"></div>
          <div className="hidden h-80 w-56 shrink-0 rounded-3xl bg-gray-200 md:block md:h-[30rem] md:w-96"></div>
        </div>
      </div>
    </div>
  ),
  ssr: true
})

export default Carousel