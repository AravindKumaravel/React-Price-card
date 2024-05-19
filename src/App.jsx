import  React  from 'react'
import Card from './Card'
function App() {
   
  let data = [
    {
      plan:"FREE",
      price:"$0",
      user:"Single User",
      usershow:true,
      stroage:"50GB Storage",
      stroageshow:true,
      public_project:"Unlimited Public Projects",
      publicshow:true,
      access:"Community Access",
      accessshow:true,
      private_project:"Unlimited Private Projects",
      privateshow:false,
      support:"Dedicated Phone Support",
      supportshow:false,
      subdomain:"Free Subdomain",
      subdomainshow:false,
      status_reports:"Monthly Status Reports",
      reportsshow:false,

    },
    {
      plan:"PLUS",
      price:"$9",
      user:"5 User",
      usershow:true,
      stroage:"50GB Storage",
      stroageshow:true,
      public_project:"Unlimited Public Projects",
      publicshow:true,
      access:"Community Access",
      accessshow:true,
      private_project:"Unlimited Private Projects",
      privateshow:true,
      support:"Dedicated Phone Support",
      supportshow:true,
      subdomain:"Free Subdomain",
      subdomainshow:true,
      status_reports:"Monthly Status Reports",
      reportsshow:false

    },

    {

      plan:"PRO",
      price:"$49",
      user:"Unlimited User",
      usershow:true,
      stroage:"50GB Storage",
      stroageshow:true,
      public_project:"Unlimited Public Projects",
      publicshow:true,
      access:"Community Access",
      accessshow:true,
      private_project:"Unlimited Private Projects",
      privateshow:true,
      support:"Dedicated Phone Support",
      supportshow:true,
      subdomain:"Free Subdomain",
      subdomainshow:true,
      status_reports:"Monthly Status Reports",
      reportsshow:true

    }
  ]
  return <>

  <section className="pricing py-5">
    <div className="container">
      <div className="row">
        {
          data.map((e,i)=>{
            return <Card key={i} data={e}/>
          })
        }
      </div>
    </div>
  </section>
  </>
}

export default App
