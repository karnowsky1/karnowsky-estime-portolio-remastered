const BASE_IMAGE_URL = "https://s3-portfolio-assets.s3.us-east-2.amazonaws.com"

export const getImageUrl = (path) => `${BASE_IMAGE_URL}${path}`
