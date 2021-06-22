const testimonialsContainer = document. querySelector('.testimonials-container')
const testimonial = document. querySelector('.testimonial')
const userImage = document. querySelector('.user-image')
const role = document. querySelector('.role')
const userName = document. querySelector('.username')


const testimonials = [
    {
        name: 'Leon Green',
        position: 'CEO',
        photo: 'https://randomuser.me/api/portraits/men/59.jpg',
        text: "FullStackSargent's website design team far exceeded my expectations on every front, and I have very high expectations. The end product is a beautiful website that embodies who we are as company. Every person I worked with at FullStackSargent was knowledgeable, creative, prompt, and personable.",
    },
    {
        name: 'Chad Montgomery',
        position: 'Manager',
        photo: 'https://randomuser.me/api/portraits/men/35.jpg',
        text: 'Working with the FullStackSargent team has been a most pleasant experience! Their dedication and passion for what they do is exemplified by their unrivaled customer support and attentiveness to the specific needs of our business. We look forward to a long lasting and prosperous relationship with the crew at FullStackSargent.',
    },
    {
        name: 'Cass Roberts',
        position: 'Marketing Coordinator',
        photo: 'https://randomuser.me/api/portraits/women/35.jpg',
        text: 'FullStackSargent is a great company to work with as they are always responsive and willing to do what it takes to get the job done right and in a timely manner. They are very reliable and intelligent. We interviewed several Marketing firms to revamp our website, logo, and other items, and it was clear right away that FullStackSargent was the right choice.',
    },
    {
        name: 'Marci Weirsma',
        position: 'Minister of Communications',
        photo: 'https://randomuser.me/api/portraits/women/65.jpg',
        text: 'We found FullStackSargent after years of searching for the right SEO company and failing. They were a much needed blessing and exceeded our expectations in every way. After years of paying and not receiving what we were paying for, at the cost of our business and financial growth, we cannot say enough about them and highly recommend them. They are honest, straight-forward, they take care of ALL your needs quickly, they are reliable, you can count on them and most of all, they do everything they say they will do, no BS.',
    },
]

let idx = 0

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    userName.innerHTML = name
    role.innerHTML = position

    idx++

    if(idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 10000)