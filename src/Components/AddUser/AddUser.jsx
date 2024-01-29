import { createRandomId } from '../../Hook/createRandomId';
import { useState } from 'react';
import './AddUser.css';

const AddUser = ({addData, users, setUsers}) => {

    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        gender: '',
        birthDate: '',
        age: '',
    });

    const [img, setImg] = useState("");
    
    const createNewImg = (e) => {
        const images = URL.createObjectURL(e.target.files[0]);
        setImg(images);
    };


    const addFunc = (e) => {
        const {name, value} = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const submitFunc = (e) => {
        e.preventDefault();
        addData(newUser);
        const newObj = {
            id: createRandomId(users),
            image: img,
            firstName: newUser.firstName,
            lastName: newUser.lastName,
            gender: newUser.gender,
            birthDate: newUser.birthDate,
            age: newUser.age,  
        }
        setUsers([newObj, ...users]);
        setNewUser({
            firstName: '',
            lastName: '',
            gender: '',
            birthDate: '',
            age: '',
        });
    };

    return(
        <div className="AddUser">
            <form onSubmit={submitFunc}>
                <input type="file" name="image" onChange={createNewImg}/>
                <input type="text" name='firstName' placeholder='First Name' value={newUser.firstName} onChange={addFunc} />
                <input type="text" name='lastName' placeholder='Last Name' value={newUser.lastName} onChange={addFunc} />
                <input type="text" name='gender' placeholder='Gender' value={newUser.gender} onChange={addFunc} />
                <input type="text" name='birthDate' placeholder='Birthday' value={newUser.birthDate} onChange={addFunc} />
                <input type="text" name="age" placeholder='Age' value={newUser.age} onChange={addFunc} />
                <button className='add' type='submit'>
                    <i className="fa-solid fa-address-card"></i>
                    Add User
                </button>
            </form>
        </div>
    )
}

export default AddUser;