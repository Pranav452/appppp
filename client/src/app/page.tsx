import MaxWidthWrapper from "@/components/MaxWidthWrapper";

export default function Home() {
  return <section className="min-h-screen bg-grid-zinc-50">
    <MaxWidthWrapper className="relative pb-24 pt-10 sm:pb-33 lg:pt-24 xl:pt-32 lg:pb-52">
<div className="hidden lg:block absolute inset-0 top-8">
  {/*circlr*/}

</div>
<div className="px-6 lg:px-0 lg:pt-4">
  <div className="relative mx-auto text-center flex flex-col items-center">
    <h1 className="relative leading-snug w-fit tracking-tight text-balance mt-16 font-bold text-gray-900 text-5xl md:text-6xl">
      What do you think about...
    </h1>
  </div>
</div>

    </MaxWidthWrapper>
  </section>
}