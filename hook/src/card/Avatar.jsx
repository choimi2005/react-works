

export default function Avatar({person , size}){


    return(

        <div className="avatar">
            <h2>사진</h2>
            <img 
                src={person.imageurl} 
                alt={person.name} 
                width={size.width}
                height={size.height}
            />
        </div>
    )

}