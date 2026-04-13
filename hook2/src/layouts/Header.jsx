import { NavLink } from "react-router-dom"


const Header = () => {


    return (

        <div className="header">
           <NavLink to = '/bank' >BankReducer</NavLink>
           <NavLink to = '/' >BankReducer</NavLink>
           <NavLink to = '/CountReducer' >CounterReducer</NavLink>
           <NavLink to = '/theme'>ParentsTheme</NavLink>
        </div>

    )




}

export default Header 