import  { useState } from 'react';
import { Link,useNavigate} from 'react-router-dom';
import axios from 'axios';



const CreatePrompts = () => {
  const [name, setName] = useState('');
  const [tipo, setTipo] = useState('');
  const [idUser, setidUser] = useState('');
  const [etiquetas, setEtiqueta] = useState('');
  const navigate = useNavigate();  

  const handleRegister = async (e) => {
    e.preventDefault();
    

    try {
        
      const response = await axios.post('http://localhost:3001/createNewUser', { name, tipo, idUser, etiquetas }, {
        headers: {
          Authorization: "Bearer " + sessionStorage.getItem("token")
        }
      });
      console.log(response.data);
      navigate("/Home");
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <div >
      <h2 >Registro</h2>
      
    </div>
  );
};

export default CreatePrompts;