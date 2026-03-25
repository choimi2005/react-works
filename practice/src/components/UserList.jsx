const UserList = () => {
    const users = [

        {id : 1, name : "홍길동"},
        {id : 2, name : "이순신"}
    ]
    return(
        <div>
            <h2>사용자 리스트</h2>
                <ul className="user-list">
                    {users.map((user) => (<li key={user.id}>{user.name}</li>
                    ))}
            </ul>
        </div>
    )
}

export default UserList