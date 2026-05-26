// ===============================
// CLOUDINARY CONFIG
// ===============================

const CLOUD_NAME = "duqx7ngop";

const UPLOAD_PRESET = "degsinUpload";

// ===============================
// UPLOAD IMAGE
// ===============================

export async function uploadImage(file) {

  try {

    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", UPLOAD_PRESET);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Image upload failed");
    }

    return {
      url: data.secure_url,
      public_id: data.public_id
    };

  } catch (error) {

    console.error("UPLOAD IMAGE ERROR:", error);

    throw error;

  }

}

// ===============================
// UPLOAD MULTIPLE IMAGES
// ===============================

export async function uploadMultipleImages(files) {

  try {

    const uploadedImages = [];

    for (const file of files) {

      const uploaded = await uploadImage(file);

      uploadedImages.push(uploaded);

    }

    return uploadedImages;

  } catch (error) {

    console.error("MULTIPLE IMAGE UPLOAD ERROR:", error);

    throw error;

  }

}

// ===============================
// UPLOAD VIDEO
// ===============================

export async function uploadVideo(file) {

  try {

    const formData = new FormData();

    formData.append("file", file);

    formData.append("upload_preset", UPLOAD_PRESET);

    formData.append("resource_type", "video");

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/video/upload`,
      {
        method: "POST",
        body: formData
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || "Video upload failed");
    }

    return {
      url: data.secure_url,
      public_id: data.public_id,
      duration: data.duration
    };

  } catch (error) {

    console.error("UPLOAD VIDEO ERROR:", error);

    throw error;

  }

}

// ===============================
// UPLOAD MULTIPLE VIDEOS
// ===============================

export async function uploadMultipleVideos(files) {

  try {

    const uploadedVideos = [];

    for (const file of files) {

      const uploaded = await uploadVideo(file);

      uploadedVideos.push(uploaded);

    }

    return uploadedVideos;

  } catch (error) {

    console.error("MULTIPLE VIDEO UPLOAD ERROR:", error);

    throw error;

  }

}

// ===============================
// DELETE IMAGE
// ===============================
// NOTE:
// الحذف الحقيقي يحتاج Backend
// لأن API_SECRET لا يجب وضعه بالفرونت
// ===============================

export async function deleteImage(publicId) {

  try {

    console.log("Delete image:", publicId);

    // TODO:
    // استخدم Firebase Function أو Node.js Backend

    return true;

  } catch (error) {

    console.error("DELETE IMAGE ERROR:", error);

    throw error;

  }

}

// ===============================
// DELETE VIDEO
// ===============================

export async function deleteVideo(publicId) {

  try {

    console.log("Delete video:", publicId);

    // TODO:
    // استخدم Backend للحذف الحقيقي

    return true;

  } catch (error) {

    console.error("DELETE VIDEO ERROR:", error);

    throw error;

  }

}