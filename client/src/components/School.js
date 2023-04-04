import './style/School.css'


function School({id,name,avatar,email,telno}) {
  
  return (
    <>
    <div className="bg-primary px-9 text-white py-32  mx-auto grid items-center card " value={id} >
    <h2>{name}</h2>
    <img src={avatar} alt={name} className="school-image" />
    <p> School Email: {email} </p>
    <p>School tel no: {telno} </p>
    <button className='updtbtn'>UPDATE</button>
  </div>
  </>
  )
}

export default School