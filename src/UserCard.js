
const CardStyle= {
    width:'200px',
    backgroundColor:'aqua',
    margin:'10px',
    padding:'10px',
    borderRadius:'10px',
    textAlign:'center',
    border:'3px solid black',

}

const UserCardBioStyle = 
{
    width:'200px',
    backgroundColor:'yellowgreen',
    margin:'10px',
    padding:'10px',
    borderRadius:'10px',
    textAlign:'center',
    border:'2px solid  black',
}

const UserCardBioAndCityStyle = 
{
    width:'200px',
    backgroundColor:'tomato',
    margin:'10px',
    padding:'10px',
    borderRadius:'10px',
    textAlign:'center',
    border:'5px double black',
}



export default function UserCard ({userName})
{
    return(
        <div style={CardStyle}>

            <h1 style={{marginTop:'50px'}}>{userName}</h1>

        </div>
    )
}



export function UserCardBio({userName,bio})
{
    return(
        <div  style={UserCardBioStyle}>

      <h3>{userName}</h3>
      <p>{bio}</p>

        </div>
    )

}



export function UserCardBioAndCity({userName,bio,city})
{
    return(
        <div style={UserCardBioAndCityStyle}>

            <h3>{userName}</h3>
            <p>{bio}</p>
            <p>{city}</p>
        </div>
    )
}


