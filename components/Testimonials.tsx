import {
  AnimatedTestimonials,
  type Testimonial
} from "@/components/ui/animated-testimonials";

const testimonials: Testimonial[] = [
  {
    id: 2,
    name: "Ritika",
    rating: 5,
    content:
      "Powerful mindset shifts on what leads actually mean and what it truly means to add value. Opportunities already exist in our circles, but when we play large numbers games, we miss the people who actually need our help immediately. Thank you, Shobhit, for the session."
  },
  {
    id: 3,
    name: "Sangeeta",
    rating: 5,
    content:
      "Gratitude for this session, Shobhit. It was an amazing session and gave me a whole new perspective on content generation and distribution. The depth of your research on this topic is simply awesome. I got a lot of clarity and inspiration to do more. Thanks a ton."
  },
  {
    id: 4,
    name: "Ritika",
    rating: 5,
    content:
      "This was a super insightful and human take on content and its purpose. In a world where AI and social media can feel like an ocean of complicated formats, the real game is simply to create trust. I loved the mindset behind sharing the wounds that gave you wisdom. Content creation is important, but cross-posting across platforms with the right context is equally important. Thank you, Shobhit, for sharing this outlook."
  },
  {
    id: 5,
    name: "Devaraj",
    rating: 5,
    content:
      "Great reminder session. We know what to do, but we often fail to take action. This session pushed me to take action and just get it done. No overthinking. Just do it now."
  },
  {
    id: 6,
    name: "Sanskriti Agarwal",
    rating: 5,
    content:
      "I got a lot of mindset shifts from the session. One of my biggest takeaways was that we need to become client creators, not just content creators. Content should include pain, conflict, identity, hope, vulnerability, and authority. People don’t buy your information; they buy your emotion, perspective, pain, personality, philosophy, and transformation."
  },
  {
    id: 7,
    name: "Umesh Sharda",
    rating: 5,
    content:
      "Out of the ₹6 lakh assignment finalized last week, I received ₹2 lakh as advance payment. I am grateful and thankful to Shobhit Singhal for the guidance and support."
  },
  {
    id: 8,
    name: "Simple Jaiswal",
    rating: 5,
    content:
      "Awesome session, Shobhit. We got a lot of updates and insights about posting the right way. I think everybody needs to go through it. It was a very detailed session. Thank you, Shobhit."
  },
  {
    id: 9,
    name: "Meghaa",
    rating: 5,
    content:
      "Thank you, Shobhit. It was an amazing and eye-opening session. It was so good that I have no words to express how much I enjoyed it."
  },
  {
    id: 10,
    name: "Shivangani Gupta",
    rating: 5,
    content:
      "Thank you, Shobhit, for the session. It was truly eye-opening. I got the chance to learn how you post and create content."
  },
  {
    id: 11,
    name: "Charuta Hajela",
    rating: 5,
    content:
      "Thank you for the wonderful session with so many new learnings. My three biggest takeaways were: storytelling is important in WhatsApp groups and communities to increase audience and engagement; sharing failures along with success stories builds trust because people trust honesty more than perfection; and sharing behind-the-scenes stories makes you more relatable and trustworthy."
  },
  {
    id: 12,
    name: "Ritika",
    rating: 5,
    content:
      "Helpful to catch up on AC. It keeps the momentum going, and revisiting foundation and core principles always helps to start the week strong. Thank you, Shobhit and the community. I loved hearing stories of new milestones achieved and the DIY tips."
  },
  {
    id: 13,
    name: "H. Kshetry",
    rating: 5,
    content:
      "It is always insightful hearing from others and seeing your structured focus on mindset, application of sessions, and filling in the worksheets. In my view, these are non-negotiable for being a winner."
  },
  {
    id: 14,
    name: "Simple Jaiswal",
    rating: 5,
    content:
      "Community keeps you going. I was feeling tired because of travel over the weekend, but calls like this bring you back on track. Thank you, Shobhit."
  },
  {
    id: 15,
    name: "Dr. Archanaa Dongre",
    rating: 5,
    content:
      "Very powerful session, Shobhit. You put your heart and soul into the session and the mind map. What resonated with me was adding my vulnerability story while creating content and showing how I found the solution. I also learned that CTA is very important after every post. One powerful lesson was: content is king, distribution is God. With gratitude."
  },
  {
    id: 16,
    name: "Participant",
    rating: 5,
    content:
      "Every session with you leaves me with new insights, and this one made me rethink content creation in a completely different way. My biggest takeaway was the importance of adding genuine emotion to content and reels because people connect with feelings far more than facts alone. I also understood how different platforms require different communication styles and how content should be created with the intention of building trust and attracting the right clients, not just increasing views. The session was practical, thought-provoking, and full of mindset shifts I can immediately apply to my niche. Thank you, Shobhit, for consistently sharing fresh perspectives and helping us communicate with more clarity, purpose, and impact."
  },
  {
    id: 17,
    name: "Umesh Sharda",
    rating: 5,
    content:
      "Hat-trick! First ₹6 lakh, then ₹6.5 lakh, and now ₹7.5 lakh. During the two-day training program, my focus was not just on training the workforce, but on helping them connect more deeply with the business owners and understand their role in the larger vision of the organization. The impact was visible. The owners could clearly see and feel the shift in their teams."
  },
  {
    id: 18,
    name: "Umesh Sharda",
    rating: 5,
    content:
      "The discussion moved to a bigger question: what more can we do to accelerate business growth? I shared my belief that sustainable business growth begins with personal growth. Businesses grow when their leaders grow. Seeing the transformation through the training, five business owners immediately decided to enroll in my Personal Growth Transformation Program. Five owners at ₹1.5 lakh each equals ₹7.5 lakh. The first installment has already been credited. Thank you, Shobhit Singhal, for the support."
  },
  {
    id: 19,
    name: "Dr. Archanaa Dongre",
    rating: 5,
    content:
      "Happy to share that my second high-ticket client of ₹50,000 got confirmed today. I just received the token amount. Shobhit’s suggestion about speaking to the client’s husband worked for me."
  },
  {
    id: 20,
    name: "Vani",
    rating: 5,
    content:
      "As always, I never want to miss your sessions because every single insight you share is valuable. I truly appreciate the unique perspectives and different angles from which you approach things. It constantly challenges me to think differently, refine my ideas, and work more effectively within my niche. One of my biggest takeaways was that every story, every speech, and every aspect of communication can be transformed into meaningful content. I also loved the detailed explanation of different social media platforms, how they function, and how we can strategically use them to maximize content and visibility."
  },
  {
    id: 21,
    name: "Vani",
    rating: 5,
    content:
      "I would like to share a small win that means a lot to me. The monetary value may not be huge, but the confidence I have gained is priceless. I successfully closed a client by applying the strategies and guidance shared by Shobhit. I followed the process, trusted it, and it worked. This client is also likely to bring me two more clients through referrals. This may seem like a small achievement, but for me, it is a significant step forward in building confidence and growing my business. My heartfelt gratitude to Shobhit for the guidance, support, and belief."
  },
  {
    id: 22,
    name: "Umesh Sharda",
    rating: 5,
    content:
      "Happy and thrilled to share that I have signed a client for ₹6.5 lakh, which includes personal coaching, business consulting, and team training. I received ₹50,000 today, and the remaining amount will come from July. I am grateful for all the learnings and a special thanks to Shobhit Singhal for being available for guidance. He sat with me at 11 PM to finalize my proposal and give valuable inputs."
  },
  {
    id: 23,
    name: "Shivangani Gupta",
    rating: 5,
    content:
      "Small win, big mindset shift. I just closed a ₹40K client deal. The client was already warm, but the real win was something else. Earlier, I used to pitch around ₹15K and often added extra services for free because I felt uncomfortable charging separately. With Shobhit’s guidance, I confidently quoted an additional ₹25K for a five-month service instead of giving it away for free. This may sound like a small win, but for me, it is a big mindset shift. Learning to charge for the value I create has given me a new level of confidence."
  },
  {
    id: 24,
    name: "Rajesh S",
    rating: 5,
    content:
      "New perspectives and lots of learning. My takeaway was that content should appeal to the customer through relevance, identity, usefulness, emotion, novelty, and connection. Overall, it was an awesome session."
  },
  {
    id: 25,
    name: "Agnes D’Costa",
    rating: 5,
    content: "Great session. The biggest takeaway is that action needs to be taken."
  },
  {
    id: 26,
    name: "Udita Shah",
    rating: 5,
    content: "What a loss that the session was not recorded. It would have been great to go back to it as a reference."
  },
  {
    id: 27,
    name: "Ritika",
    rating: 5,
    content:
      "Thank you for yet another awesome session. Content distribution is an equally important part of the routine along with content creation. Thanks again for the helpful resources and how-to guides shared during the session."
  }
];

export function Testimonials({ variant = "standalone" }: { variant?: "standalone" | "paired" }) {
  return (
    <AnimatedTestimonials
      testimonials={testimonials}
      autoRotateInterval={4000}
      badgeText="Voices of transformation"
      title="Real Results. Real Momentum."
      subtitle="Mindset shifts, decisive action and meaningful business wins from inside the Transformers Hub community."
      variant={variant}
    />
  );
}
