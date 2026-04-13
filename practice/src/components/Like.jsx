import { useState } from "react"

const Like = () => {

    const [likeCount, setLikeCount] = useState(0);
    
    //상태 변경 핸들러 함수
    const handleLike = () => {
        setLikeCount(likeCount + 1);
    }
    
    return(
        <div>

                <h2>Like</h2>
                <button onClick={ handleLike }>좋아요
                    </button>{likeCount}
        </div>

    )

}

export default Like