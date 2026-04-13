import Avatar from "./Avatar"
import myPhoto from "../assets/hero.png"
import Card from "./Card"
export default function Profile(){

    return(
        <div>
            <h2>나의 프로필</h2>   
            <Card>
                <Avatar
                size = {{

                        width: "100px",
                        height : "100px"
                }}
                person = {{
                    name : "최민준",
                    imageurl : myPhoto
                }}
                />
            </Card>
        </div>
    )
}