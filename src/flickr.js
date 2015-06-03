import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

@inject(HttpClient)
export class Flickr{
  heading = 'Flickr'
  images = []
  query = 'fishing'
  page = 4

  get url(){
    return `http://api.flickr.com/services/feeds/photos_public.gne?tags=${this.query}&tagmode=any&format=json`
  }

  constructor(http){
    this.http = http
  }

  activate(){
    this.search()
  }

  search($event) {
    this.clear()
    return this.http.jsonp(this.url).then(response => {
      this.images = response.content.items
    });
  }

  clear() {
    this.images = null
  }
}
