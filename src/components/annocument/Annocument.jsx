import React from "react"

const Annocument = () => {
  const mystyle = {
    width: "30%",
    height: "380px",
    margin:"10px",
  }
  const mystyle1 = {
    width: "70%",
    height: "380px",
    margin:"10px",
  }
  return (
    <>
      <section className='annocument background'>
        <div className='container d_flex'>
          <div className='img' style={mystyle}>
            <img src='./images/banner-1.png' width='100%' height='100%' />
          </div>
          <div className='img' style={mystyle1}>
            <img src='./images/banner-2.png' width='100%' height='100%' />
          </div>
        </div>
      </section>
    </>
  )
}

export default Annocument
