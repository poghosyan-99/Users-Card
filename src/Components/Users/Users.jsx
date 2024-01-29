import './Users.css'; 

const Users = ({users, index, setUsers, setIndex}) => {

    const deleteFunc = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
        if(index === users.length-1){
            setIndex(0)
        }
    }

  return (
    <div className="slider">
        <h2 className='id'>{users[index]?.id}</h2>
        <div className='user'>
            <div className="user-card" >
                <img src={users[index]?.image} alt="img" />
            </div>
            <div className="info">
                <h2><span className='name'>FirstName: </span>{users[index]?.firstName}</h2>
                <h2><span className='name'>LastName: </span>{users[index]?.lastName}</h2>
                <h3><span>Gender: </span>{users[index]?.gender}</h3>
                <h3><span>Birthday: </span>{users[index]?.birthDate}</h3>
                <h3><span>Age: </span>{users[index]?.age}</h3>
            </div>
        </div>
        <button className='delete' onClick={() => deleteFunc(users[index]?.id)}>
            <i className="fa-solid fa-trash"></i>
            Delete
        </button>
    </div>
  );
};

export default Users;
