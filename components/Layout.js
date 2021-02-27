import Card from '../components/Card'

export default function Layout({children}) {
    return (
      <div className="container" style={{minWidth: '100%', padding: "0", overflow: "hidden"}}>
      <Card/>
        {children}
       
      </div>
    )
  }