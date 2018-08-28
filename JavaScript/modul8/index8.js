const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpg', fullview: 'img/fullview-2.jpg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpg', fullview: 'img/fullview-3.jpg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpg', fullview: 'img/fullview-4.jpg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpg', fullview: 'img/fullview-5.jpg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpg', fullview: 'img/fullview-6.jpg', alt: "alt text 6" },
];

document.addEventListener("DOMContentLoaded", () => {
    const preview = document.querySelector('.preview');
    const fullview = document.querySelector('.fullview');
    const gallery = document.querySelector(".js-image-gallery");

    const createFullView =({preview, fullview, alt}) => `<div class="fullview-item"><img class="fullview-img" src="${fullview}" alt="${alt}"></div>`;
    fullview.insertAdjacentHTML('afterbegin',createFullView(galleryItems[0]));

    const createPreview = ({preview,fullview, alt})=>`<li class="preview-item"><img class="preview-img" src="${preview}" alt="${alt}" data-fullview="${fullview}"></li>`;
    const createPreviewGallery = arr => arr.reduce((acc, preview) => acc + createPreview(preview),``);
    preview.insertAdjacentHTML('afterbegin',createPreviewGallery(galleryItems));

    const previewImgs = gallery.querySelectorAll(".preview-img");
    previewImgs[0].classList.add("preview-img-active");

    function onImageGalleryClick(event) {
        const hasClass = event.target.classList.contains("preview-img");
        if (!hasClass) return;

        const activeFullViewImage = gallery.querySelector(".fullview-img");
        activeFullViewImage.setAttribute("src", event.target.dataset.fullview);

        setActivePreviewImg(previewImgs, event.target);
    }

    gallery.addEventListener("click", onImageGalleryClick);

    function setActivePreviewImg(previewImgs, target) {
        previewImgs.forEach(previewImg => (previewImg !== target)? previewImg.classList.remove("preview-img-active") : previewImg.classList.add("preview-img-active"));
    }
});
