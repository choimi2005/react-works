
function Flower(props){

    return (
        <div>
            <h3>{props.color} {props.name} 꽃이 피었어요. </h3>
        </div>
        
    )
}



export default function Garden(){


    return(
        <div>
            <h2>이 곳은 정원입니다.</h2>
            <Flower name ="진달래" color ="빨간색"> </Flower>
        </div>
        
    )
}