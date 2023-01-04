import { Injectable } from '@angular/core';
import { Storage,ref, uploadBytes, list, getDownloadURL } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  url: string = ""
  constructor(private storage: Storage) { }

  public uploadImage($event: any, name: string){
    const file = $event.target.files[0];
    if (name === 'perfil') {
      const imgRef = ref(this.storage, 'imagenesPerfil/' + name);
      uploadBytes(imgRef, file)
      .then(response => {this.getProfileImages()})
      .catch(error => console.log(error))
    }else{
      const imgRef = ref(this.storage, 'imagenesProyectos/' + name);
      uploadBytes(imgRef, file)
      .then(response => {this.getImages()})
      .catch(error => console.log(error))
    }
  }

  getImages(){
    const imagesRef = ref(this.storage, 'imagenesProyectos');
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("URL: " + this.url);
      }
    })
    .catch(error => console.log(error))
  }
  getProfileImages(){
    const imagesRef = ref(this.storage, 'imagenesPerfil');
    list(imagesRef)
    .then(async response => {
      for(let item of response.items){
        this.url = await getDownloadURL(item);
        console.log("URL: " + this.url);
      }
    })
    .catch(error => console.log(error))
  }

}
