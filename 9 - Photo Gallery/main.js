
/*Object-oriented approach*/
class PhotoGallery{
    constructor(){
        this.API_KEY = `THE API KEY GOES HERE`;
        this.galleryDiv = document.querySelector('.gallery');
        this.searchForm = document.querySelector('.header form');
        this.loadMore = document.querySelector('.load-more');
        this.eventHandle();
    }

    eventHandle(){        /*when DOM content loads after the load it will grab images from API */
        document.addEventListener('DOMContentLoaded', ()=>{
            this.getImg();
        });
    }

    async getImg(){
        const baseURL = "https://api.pexels.com/v1/search?query=nature&per_page=1";
        const response = await fetch(baseURL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: this.API_KEY
            }
        })
        console.log(response);
    }
}

const gallery = new PhotoGallery;    /*initalize and call this class */