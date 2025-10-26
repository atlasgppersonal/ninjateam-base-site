// data/testimonials.ts
export const testimonialsData = [
  {
    id: "ginna-g",
    author: "Ginna G.",
    platform: "Yelp",
    rating: 5,
    content: "Because of my holistic lifestyle, I searched long and hard to find an all-natural esthetician. Thanks to Yelp, I came across Suzy who I've been seeing for a few months now and don't ever plan on letting anyone else take care of my skin again. Suzy is extremely knowledgable in her field and pleasant to be around. I first started with a facial and now I've done 3 microneedling sessions to improve my box and ice-pick scars. In only 2 sessions, my scars improved drastically (see photos). I will advise that because Suzy's methods are all-natural, we do not use any numbing and that I am able to tolerate deeper needling than most clients. This a big reason why my results have been so great so soon. Her needling technique is also helpful. Most estheticians are trained to scrape the skin and not use any additional products. Suzy makes sure to lift the needling pen every time she's going to work on a different area and combines the needling with a serum (again, all-natural) specific to your skin's needs so that it can deeply penetrate the area. Suzy's pricing is also extremely fair which makes it easy for me to continue getting treatments done. Parking is readily available as there is a metered lot next to the building and on the street. Needless to say, I highly recommend Miami Natural Skincare and I'm looking forward to seeing continued improvement on my skin.",
    beforeImage: "/images/testimonials/ginna-before.jpg",
    afterImage: "/images/testimonials/ginna-after.jpg",
    beforeImageAlt: "My scarring before my first microneedling session",
    afterImageAlt: "My scarring a month after my second microneedling session",
    featured: true
  },
  {
    id: "patricia-b",
    author: "Patricia B.",
    platform: "Google",
    rating: 5,
    content: "I am very pleased with my experience at the spa. Suzana is very professional and the environment is so clean and friendly. Micro needling has done wonders for my skin, just after the first session, I saw a difference! it looks young and radiant and my brown spots diminished dramatically. I also had a faded old eyebrows tattoo that is almost completely gone thanks to micro-needling and that is going to save me going for treatment to remove it. overall, very happy and satisfied!",
    featured: true
  },
  {
    id: "aleksandra-c",
    author: "Aleksandra C.",
    platform: "Yelp",
    rating: 5,
    content: "Suzy is beyond amazing and is all about helping folks with whatever skin needs they may have. I personally go for the micro needling which is simply amazing to promote collagen production. What I appreciate the most of her is that she takes her time with you and explains why she thinks a certain procedure would be best for one. I also like the product line she uses which is organic. I have this far referred 5 of my girlfriends two of which had some bad acne scaring and have seen huge improvements in their skin appearance.",
    featured: true
  },
  {
    id: "mapal-l",
    author: "Mapal L.",
    platform: "Google",
    rating: 5,
    content: "The spa is very clean and relaxing. Suzy was so incredibly knowledgeable, and really customized my facial to my skin issues. I got the custom facial for $80 and I got $20 off for my first time visit. It is affordable, especially for Miami Beach prices. My skin was glowing, hydrated, and clean after my 1.5 hour facial. My skin was not red or irritated at all. In addition she gave my a nice face and hand massage while I had a face mask on. She sent me home with skin care samples. She is professional and the best esthetician I've ever gone too (I've gotten a ton of facials). Highly recommended I suggest checking her out!",
    featured: true
  }
]

export type Testimonial = {
  id: string
  author: string
  platform: string
  rating?: number
  content: string
  beforeImage?: string
  afterImage?: string
  beforeImageAlt?: string
  afterImageAlt?: string
  featured: boolean
}

export type TestimonialsData = typeof testimonialsData