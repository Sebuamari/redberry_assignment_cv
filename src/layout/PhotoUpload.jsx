import PhotoUploadStyle from "../styles/layout/PhotoUpload.module.scss";

const PhotoUpload = () => {
    return (
        <div className={PhotoUploadStyle.photo_upload}>
            <label for="image">პირადი ფოტოს ატვირთვა</label>
            <input type="file" id="image" name="image" accept="image/*" />
            <label className={PhotoUploadStyle.upload_button} for="image">ატვირთვა</label>
        </div>
    )
}

export default PhotoUpload;