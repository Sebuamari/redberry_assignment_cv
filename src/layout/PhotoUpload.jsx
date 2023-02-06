import PhotoUploadStyle from "../styles/layout/PhotoUpload.module.scss";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { TiWarning } from "react-icons/ti";
import { useState, useEffect } from 'react';

const PhotoUpload = () => {
    const [photoUploaded, setPhotoUploaded] = useState ();
    const [photoPath, setPhotoPath] = useState();

    const uploadImage = async (e) => {
        // choose and show photo
        const files = e.target.files
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setPhotoPath(reader.result);
            setPhotoUploaded(true);
        })
        reader.readAsDataURL(files[0])
    }

    useEffect(() => {
        console.log(photoPath);
    }, [photoPath]);

    return (
        <div className={PhotoUploadStyle.photo_upload}>
            <label htmlFor="image">პირადი ფოტოს ატვირთვა</label>
            <input type="file" id="image" name="image" accept="image/*" onChange={(e) => uploadImage(e)}/>
            <label className={PhotoUploadStyle.upload_button} htmlFor="image">ატვირთვა</label>
            <AiOutlineCheckCircle className={photoUploaded !== undefined && photoUploaded ? PhotoUploadStyle.check_icon : PhotoUploadStyle.hidden}/>
            <TiWarning className={photoUploaded || photoUploaded === undefined ? PhotoUploadStyle.hidden : PhotoUploadStyle.warning_icon} />
        </div>
    )
}

export default PhotoUpload;