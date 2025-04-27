'use client'

import { useEffect, useRef, useState } from "react"

{/* 1. Sign Up and Authenticate
Description:
Create your account quickly and securely. Choose to import your existing wallet or create a custodial wallet managed by our platform — no crypto experience needed.

2. Pay Easily via PIX
Description:
Once you're registered, simply use your PIX key to complete your token purchase instantly. Enjoy a seamless, fast, and secure payment process designed for Brazil.

3. Claim Your Tokens
Description:
After your payment is confirmed, your tokens are ready! You can claim them directly to your personal blockchain wallet or keep them safely in your custodial balance until you're ready. */}
export function StepsSection() {
    const observerRef = useRef<HTMLDivElement>(null)
    const [progress, setProgress] = useState(0)
  
 
    useEffect(() => {
        const handleScroll = () => {
          if (!observerRef.current) return
    
          const section = observerRef.current
          const rect = section.getBoundingClientRect()
          const windowHeight = window.innerHeight
    
          const start = windowHeight
          const end = -(rect.height)
    
          const totalScroll = start - end
    
          const currentScroll = start - rect.top
    
          const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1)
    
          setProgress(progress)
        }
    
        window.addEventListener('scroll', handleScroll)
        return () => {
          window.removeEventListener('scroll', handleScroll)
        }
      }, [])

    return (
 
<section className="div max-w-[1120px] mx-auto py-[200px]" id="HowItWorks">
               

<h2 className="text-[5rem] text-center leading-[120%] font-ClashDisplayMedium text-white">
  How to Buy Your AMA Tokens
</h2>

<div ref={observerRef} className="flex flex-col relative gap-y-[400px]">
<div className="w-3 bg-white/10 absolute top-12 bottom-12 left-1/2 -translate-x-1/2">
<div
            style={{
              transform: `scaleY(${progress})`,
              transformOrigin: 'top',
            }}
            className="absolute h-full origin-top w-3 z-20 bg-brandGradient  transition-transform duration-300 ease-out"
          />
  </div>

  <div className="flex items-center justify-between mt-32">
    <div className="max-w-[480px] flex flex-col gap-y-2 mr-auto">
      <span className="uppercase font-GeneralSansBold text-white/50 text-[1.25rem]">Step 1</span>
      <h3 className="text-[3rem] leading-[120%] font-ClashDisplayMedium text-green400">Sign Up and Authenticate</h3>
      <p className="block mt-4 text-[1.125rem] leading-[160%] font-GeneralSansRegular text-white">
      Create your account quickly and securely. Choose to import your existing wallet or create a custodial wallet managed by our platform — no crypto experience needed.
        </p>
    </div>
</div>

<div className="flex items-center justify-between mt-32">
    <div className="max-w-[480px] flex flex-col gap-y-2 ml-auto">
      <span className="uppercase font-GeneralSansBold text-white/50 text-[1.25rem]">Step 2</span>
      <h3 className="text-[3rem] leading-[120%] font-ClashDisplayMedium text-green400">Pay Easily via PIX</h3>
      <p className="block mt-4 text-[1.125rem] leading-[160%] font-GeneralSansRegular text-white">
      Once {"you're"} registered, simply use your PIX key to complete your token purchase instantly. Enjoy a seamless, fast, and secure payment process designed for Brazil.
        </p>
    </div>
</div>

<div className="flex items-center justify-between mt-32">
    <div className="max-w-[480px] flex flex-col gap-y-2 mr-auto">
      <span className="uppercase font-GeneralSansBold text-white/50 text-[1.25rem]">Step 3</span>
      <h3 className="text-[3rem] leading-[120%] font-ClashDisplayMedium text-green400">Claim Your Tokens</h3>
      <p className="block mt-4 text-[1.125rem] leading-[160%] font-GeneralSansRegular text-white">
      After your payment is confirmed, your tokens are ready! You can claim them directly to your personal blockchain wallet or keep them safely in your custodial balance until {"you're "} ready.
        </p>
    </div>
</div>
</div>


</section>
    )
}