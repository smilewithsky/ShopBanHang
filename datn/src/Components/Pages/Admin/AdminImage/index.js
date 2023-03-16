import { Axios } from 'axios';
import { useState } from 'react';
import { AdminImageWrapper } from './styled'
function AdminImagePage(){
    const [imageSelected, setImageSelected] = useState("")
    const uploadImage = () => {
        const formData = new FormData()
        formData.append("file", imageSelected)
        formData.append("upload_preset", "p7unxz9z")
        
        Axios.post("https://api.cloudinary.com/v1_1/dg3ufqp14/image/upload" , formData).then((response) => {
            console.log("response ", response)
        })

        console.log("form ",formData);

        setImageSelected("")
    }
    return (
        <AdminImageWrapper>
            <div className='content'>
                <input 
                    type="file"
                    onChange={ (event) => {
                        setImageSelected(event.target.files[0])
                    } }
                />
                
                <button onClick={uploadImage}>Upload image</button>
                <img style={{width: "300px"}} src={imageSelected} alt="" />
            </div>
        </AdminImageWrapper>
    )
}

export default AdminImagePage;
