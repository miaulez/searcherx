"use client"

import { Button, buttonVariants } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const testResults = [
  {
    title:
      "CU_190.15.159.142_21-01-23_101884.rar/History/Google Chrome_Profile 1.txt",
    data: `http://n1sav.bemobtrcks.com/go/f54113b7-e7a7-453d-90b1-7285cd22368f?cost=0.000050&clickid=635737121977803040&rdk=rk4
http://neexulro.net/-26030DRZP/23h0?rndad=3188694926-1672591407
http://nongide.webcindario.com/?c=1&p=218
http://nongide.webcindario.com/?c=1&p=218#tmpgenc-video-mastering-works-6-trial-crack
http://nongide.webcindario.com/?c=2&p=142
http://nongide.webcindario.com/download.php?k=Tmpgenc%20video%20mastering%20works%206%20trial%20crack&r=https%3A%2F%2Fwww.google.com%2F
http://nongide.webcindario.com/download.php?k=undefined&r=
http://otnolatrnup.com/hideref.engine?d=https%3a%2f%2fworeppercomming.com%2f90c1a7c4-9526-4fe6-befc-18062e96619e%3fcampaignname%3d2_OperaGX%26placementname%3d2_OperaGX_WW_101%26bid%3d0.23%26totalcpv%3d0.00023%26channel%3dFile%2bHosting%2b%2526%2bSharing%26subchannel%3dFile%2bHosting%2b%2526%2bSharing%26medianame%3d2_OperaGX_WW_5.22%26keywords%3donline+storage%2cfree+storage%2ccloud+storage%2ccollaboration%2cbackup+file+sharing%2cshare+files%2cphoto+backup%2cphoto+sharing%2cftp+replacement%2ccross+platform%2cremote+access%2cmobile+access%2csend+large+files%2crecover+files%2cfile+versioning%2cundelete%2cwindows%2cpc%2cmac%2cos+x%2clinux%2ciphone%2conline+storage%2cfree+storage%2ccloud+storage%2ccollaboration%2cbackup+file+sharing%2cshare+files%2cphoto+backup%2cphoto+sharing%2cftp+replacement%2ccross+platform%2cremote+access%2cmobile+access%2csend+large+files%2crecover+files%2cfile+versioning%2cundelete%2cwindows%2cpc%2cmac%2cos+x%2clinux%2ciphone%26sourceid%3d101%26domainid%3d1%26cpv%3d0.00023%26s2sParam%3d%7bs2sParam%7d
http://p.hqwa.xyz/go/232141/673023/aHR0cHMlM0EvL2FiaXNtYWxvbnNob3J0LmJsb2dzcG90LmNvbS8yMDIyLzEyL2RkLWF2YXRhci5sbC0xMDgwLTcyMC00ay5odG1s?cb=3927566461506311
http://p.jhoncj.com/go/232141/665890/aHR0cHMlM0EvL3ZlcmlmaWNhcmh1bWFuLmJsb2dzcG90LmNvbS8yMDIyLzEyL2RkLWF2YXRhci1sbC0yMDIyLmh0bWw=?cb=1341711353379417.8
http://peliculas.uclv.edu.cu/
http://pm.mutux.cfd/vcta/kwsmwh?ci=633210383825641804&sd=4221012&rdk=rk4&uu=lIaJhrzOpHZ7h3d6eHePdX57gHk=
http://pm.mutux.cfd/vcta/kwsmwh?ci=633251078078734847&sd=4221012&rdk=rk4&uu=lIaJhrzOpHZ7h3d6eXeMdnd-g3g=
http://redir.jads.co/pu_uu.php?cb=1672620858&uu=7417DDB9-4112-9964-CA3F-A76C1139DC62
http://riffhold.com/23h0`,
  },
]

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-32 space-y-5">
      <div className="flex flex-col items-center gap-2">
        <h1 className="scroll-m-20 text-4xl lg:text-5xl">SearcherX</h1>
      </div>
      <div className="flex justify-center">
        <Input
          className="max-w-3xl shadow-md"
          placeholder="Search 90+ billion stealer logs"
        />
        <Button>Search</Button>
      </div>
      <div>
        {testResults.map((result) => (
          <div key={result.title}>
            <div className="container p-0">
              <p className="text-blue-500 cursor-pointer text-sm ">
                {result.title}
              </p>
              <pre className="bg-gray-200 h-[165px] overflow-hidden text-ellipsis overflow-x-hidden overflow-y-hidden">
                {result.data}
              </pre>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
