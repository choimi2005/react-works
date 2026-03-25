import AddDrink from "./AddDrink"

const DrinkList = ({drinks}) => {

    return(
        <div> 
            <ul className="drink-list">
                {drinks.map((drink, index) =>(
                    <li key={index}>{drink}</li>

                ))}
            </ul>
        </div>

    )


}

export default DrinkList