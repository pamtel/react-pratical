import React from 'react'

function Loading() {
    return (
        <>
           {[1,2,3,4,5].map(skeleton => <Skeleton/>)} 
        </>
    )
}

const Skeleton = () => {
   return (
        <div className="border border-blue-600 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-5">
  <div className="animate-pulse space-x-4">
    <div className="flex-1 space-y-4 py-1">
      <div className="h-4 bg-blue-500 rounded w-3/4"></div>
      <div className="space-y-2">
        <div className="h-4 bg-blue-500 rounded"></div>
        <div className="h-4 bg-blue-500 rounded w-5/6"></div>
      </div>
    </div>
  </div>
</div>

)}

export default Loading
