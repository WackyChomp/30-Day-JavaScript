
/*Object-oriented approach*/
class PhotoGallery{
    constructor(){
        this.API_KEY = 'THE API KEY GOES HERE';         /*use single quotes */
        this.galleryDiv = document.querySelector('.gallery');
        this.searchForm = document.querySelector('.header form');
        this.loadMore = document.querySelector('.load-more');
        this.pageIndex = 1;
        this.eventHandle();
    }

    eventHandle(){        /*when DOM content loads after the load it will grab images from API */
        document.addEventListener('DOMContentLoaded', ()=>{
            this.getImg(1);      /*the default page is 1*/
        });

        this.searchForm.addEventListener('submit' , (e)=>{          /*(e) is the event */
            this.getSearchedImages(e);
        })

        this.loadMore.addEventListener('click' , (e)=>{
            this.loadMore(e);
        })
    }

    async getImg(index){
        this.loadMore.setAttribute('data-img', 'curated')     /*refreshing the page removes search*/
        const baseURL = `https://api.pexels.com/v1/curated?page=${index}&per_page=12`;      /*uses backtick*/   /*change how many appears in one page*/
        const data = await this.fetchImages(baseURL)
        this.GenerateHTML(data.photos)
        console.log(data)
    }

    async fetchImages(baseURL){
        const response = await fetch(baseURL, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            Authorization: this.API_KEY
            }
        });
        const data = await response.json();
        console.log(data);
        return data;
    }

    GenerateHTML(photos){
        photos.forEach(photo =>{
            const item = document.createElement('div');
            item.classList.add('item');
            item.innerHTML = `            
                <a href = '#'>
                    <img src = "${photo.src.medium}">
                    <h3> ${photo.photographer}</h3>
                </a>
            `; /*uses backtick*/
            this.galleryDiv.appendChild(item)
        })
    }

    async getSearchedImages(e){
        this.loadMore.setAttribute('data-img', 'search');
        e.preventDefault();          /*prevent reloading after searching*/
        this.galleryDiv.innerHTML = '';     /*clears out images on page and replace with searched images */
        const searchValue = e.target.querySelector('input').value;
        const baseURL = await `https://api.pexels.com/v1/search?query=${searchValue}&page=1per_page=12`;
        const data = await this.fetchImages(baseURL);
        this.GenerateHTML(data.photos)
        e.target.reset();        /*clears out the search bar after searching the input*/
    }

    loadMore(e){        /*this increases the number of pages (index)*/
        let index = ++this.pageIndex;
    }
}

const gallery = new PhotoGallery;    /*initalize and call this class */