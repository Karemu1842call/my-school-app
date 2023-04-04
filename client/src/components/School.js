import './style/School.css'


function School({id,name,avatar,email,telno}) {
  
  return (
    <div className='bg-primary px-5 text-white py-32  mx-auto grid md:grid-cols-2 items-center justify-center md:justify-between' value={id}>
    <div className="card " >
    <h2>{name}</h2>
    <img src={avatar} alt={name} className="school-image" />
    <p> School Email: {email} </p>
    <p>School tel no: {telno} </p>
    <button className='updtbtn'>UPDATE</button>
  </div>
  </div>
  )
}

export default School