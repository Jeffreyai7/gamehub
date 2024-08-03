import OptionalPhoto from '../assets/images/dummy-man-570x570.png'

const getCroppedImageUrl = (url: string) => {
  if(!url) return OptionalPhoto;
 const target = "media/";
 const index = url.indexOf(target) + target.length ;

  return  url.slice(0, index) + "crop/600/400/" + url.slice(index)
}


export default getCroppedImageUrl