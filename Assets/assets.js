import profile_pic1 from "../Assets/profile_pic1.png";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import facebook from "../Assets/facebook.png";
import twitter from "../Assets/twitter.png";
import instagram from "../Assets/instagram.png";
import github from "../Assets/github.png";
import linkedIn from "../Assets/linkedIn.png";
import arrow_icon from "../Assets/arrow_icon.png";
import blog_icon from "../Assets/blog_icon.png";
import add_icon1 from "../Assets/add_icon1.png";
import upload_area1 from "../Assets/upload_area1.png";
import blog1 from "../Assets/blog1.png";
import blog2 from "../Assets/blog2.png";
import blog3 from "../Assets/blog3.png";
import blog4 from "../Assets/blog4.png";
import blog5 from "../Assets/blog5.png";
import blog6 from "../Assets/blog6.png";
import blog7 from "../Assets/blog7.png";
import blog8 from "../Assets/blog8.png";
import Bloglist from "@/app/Componenets/Bloglist";

export const assets = {
  facebook,
  twitter,
  github,
  logo1,
  logo2,
  instagram,
  linkedIn,
  arrow_icon,
  blog_icon,
  add_icon1,
  upload_area1,
  profile_pic1,
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  Bloglist,
};

export const blog_data = [
    {
        id: 1,
        title: "The Art of Mindful Living: How to Find Balance in a Busy World",
        description:
          "In today’s fast-paced world, finding balance can feel like an impossible task. Between work, family, and personal goals, it’s easy to lose sight of what truly matters. But what if we could take a step back, breathe, and embrace the present moment? Welcome to the art of mindful living.",
        details:
          "What is Mindful Living?Mindful living is the practice of being fully present in the moment, aware of where you are and what you’re doing, without being overly reactive or overwhelmed by the world around you. It is about savoring life’s simple pleasures and creating space for yourself in a chaotic world. <br> Benefits of Mindful Living Reduces Stress: Mindfulness helps calm the mind and reduce anxiety. Improves Focus: By living in the moment, you can increase productivity and clarity. Enhances Relationships: Being present allows you to connect deeply with loved ones. Boosts Emotional Well-being: It cultivates gratitude, patience, and self-compassion <br> Tips to Start Your Mindful Journey Practice Daily Meditation: Spend 10 minutes each day focusing on your breath. Unplug from Technology: Set aside time to disconnect from screens and connect with the world. Savor Your Meals: Eat slowly and mindfully, appreciating every bite.Take Mindful Walks: Notice the sights, sounds, and sensations as you walk.",
        conclusion: "Conclusion: Mindful living is not about perfection; it’s about progress. Start small, and over time, you’ll notice a shift in how you experience life. Remember, the journey to mindfulness is as beautiful as the destination.",
        image: blog1,
        date: Date.now(),
        category: "Lifestyle",
        author: "Ali Ahmed",
        author_img: profile_pic1,

      },
      {
        id: 2,
        title: "The Startup Journey: My Story",
        description:
          "The challenges and triumphs of building a startup from scratch.",
        details:
          "Building a startup from the ground up is no easy task. It requires determination, patience, and a willingness to learn from every failure. From idea validation to securing funding, the journey is filled with obstacles that require resilience and creativity. <br> The importance of a good team cannot be overstated. Surrounding yourself with individuals who share your vision and complement your strengths can make all the difference. <br> The Road to Success: Success does not come overnight, but with hard work and the right mindset, any obstacle can be overcome. The key is persistence and learning from each setback.",
        conclusion: "Conclusion: Starting a business is a long and arduous journey, but the lessons learned along the way are invaluable. Stay focused, embrace failure, and celebrate small wins as you work towards your ultimate goal.",
        image: blog2,
        date: Date.now(),
        category: "Startup",
        author: "Sara Khan",
        author_img: profile_pic1,
      },
      {
        id: 3,
        title: "Family and Traditions",
        description:
          "How our traditions shape the way we live and celebrate together.",
        details:
          "Traditions are an essential part of our lives, shaping our values, culture, and the way we connect with each other. From family gatherings to holiday celebrations, these traditions give us a sense of belonging and continuity. <br> The Power of Shared Moments: Sharing time with loved ones and participating in family traditions fosters a deeper connection and appreciation for one another. These moments create lasting memories that define our identities.",
        conclusion: "Conclusion: Traditions not only keep us grounded but also offer an opportunity to pass down values from one generation to the next. Embrace your family’s unique traditions, for they are the foundation of your shared experiences.",
        image: blog3,
        date: Date.now(),
        category: "Lifestyle",
        author: "Ali Ahmed",
        author_img: profile_pic1,
      },
      {
        id: 4,
        title: "Technology and Innovation",
        description:
          "Exploring the latest in tech and how it changes the world we live in.",
        details:
          "Technology is revolutionizing the world, from artificial intelligence to blockchain, shaping the future of every industry. As we continue to innovate, the boundaries of what’s possible seem limitless. <br> The Impact of Tech on Society: Technology is not just transforming businesses; it’s changing how we live, work, and communicate. It’s breaking down barriers and opening up new opportunities for growth and progress. <br> Staying Ahead of the Curve: To remain competitive, it’s crucial to stay informed about emerging technologies and continuously adapt to new trends.",
        conclusion: "Conclusion: Embrace innovation and technology, as they will shape the future of humanity. By staying informed and open to new ideas, we can contribute to positive change and progress.",
        image: blog4,
        date: Date.now(),
        category: "Technology",
        author: "Sara Khan",
        author_img: profile_pic1,
      },
      {
        id: 5,
        title: "Startup Strategies That Work",
        description: "Key lessons I’ve learned in the world of startups.",
        details:
          "Starting a business is an exciting yet challenging venture. To succeed, it’s essential to have a solid strategy in place. This includes understanding your market, building a strong network, and having a clear vision. <br> Lessons from the Trenches: Every startup faces hurdles, but the key is perseverance and constant learning. It's important to surround yourself with a supportive community of mentors and advisors who can guide you through the tough times. <br> The Importance of Adaptability: The business world is constantly changing, and the ability to adapt quickly is a key factor in a startup’s survival and growth.",
        conclusion: "Conclusion: The startup journey is full of lessons. By staying focused, adaptable, and constantly learning from your experiences, you can build a business that lasts.",
        image: blog5,
        date: Date.now(),
        category: "Startup",
        author: "Ali Ahmed",
        author_img: profile_pic1,
      },
      {
        id: 6,
        title: "Future of Technology: What's Next?",
        description:
          "A look at the innovations that will define the next generation of tech.",
        details:
          "As technology continues to evolve, it’s exciting to think about what the future holds. From quantum computing to advanced robotics, the next generation of tech will shape everything from our daily lives to how industries operate. <br> Emerging Trends: AI, machine learning, and autonomous systems are just a few of the innovations that will define the future. As these technologies become more accessible, they will have a profound impact on how we interact with the world and each other.",
        conclusion: "Conclusion: The future of technology is both exciting and uncertain. Embrace the changes and be ready to adapt as innovation continues to transform our world.",
        image: blog6,
        date: Date.now(),
        category: "Technology",
        author: "Sara Khan",
        author_img: profile_pic1,
      },
      {
        id: 7,
        title: "A Glimpse of Our Family Adventures",
        description:
          "Join us as we embark on new adventures and create memories together.",
        details:
          "Life is full of adventures, and there’s nothing quite like sharing these experiences with family. Whether it’s a road trip, a vacation, or simply exploring your own city, every adventure creates lasting memories. <br> Family Bonding Through Travel: Traveling together strengthens family bonds. It provides an opportunity to disconnect from daily routines and reconnect with each other in new and exciting ways. <br> Making the Most of Every Moment: Whether big or small, every adventure offers an opportunity to learn, grow, and create memories that last a lifetime.",
        conclusion: "Conclusion: Family adventures are more than just fun—they are opportunities to connect, learn, and create memories that will be cherished for years to come.",
        image: blog7,
        date: Date.now(),
        category: "Lifestyle",
        author: "Ali Ahmed",
        author_img: profile_pic1,
      },
      {
        id: 8,
        title: "The Power of Networking in Startups",
        description:
          "How building the right connections can make or break a startup.",
        details:
          "Networking is one of the most powerful tools in the startup world. Building relationships with the right people can open doors to new opportunities, partnerships, and funding. <br> The Importance of Connections: In the early stages of a startup, networking can make all the difference. Whether it’s connecting with potential investors or finding your first customers, the relationships you build can help you navigate the challenges of starting a business. <br> Networking Strategies for Success: Attend industry events, join startup communities, and leverage social media platforms to connect with like-minded individuals.",
        conclusion: "Conclusion: Networking is crucial for startup success. By building and nurturing valuable connections, you create opportunities that can help your business grow and thrive.",
        image: blog8,
        date: Date.now(),
        category: "Startup",
        author: "Sara Khan",
        author_img: profile_pic1,
      },
    ];
