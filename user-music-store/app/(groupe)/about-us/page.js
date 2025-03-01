import Link from "next/link";

export default function AboutUs() {
  return (
    <div className="min-h-screen">
      <div className="bg-gray-50 border-b">
        <nav aria-label="breadcrumb" className="py-6 px-4 mx-auto w-full max-w-7xl">
            <ol className="flex items-center space-x-2 text-sm">
              <li>
                <Link href="/" className="text-gray-500 hover:text-black font-medium" >
                  Home
                </Link>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </li>
              <li aria-current="page" className="text-black">
                Guitars
              </li>
            </ol>
        </nav>
      </div>
      <div className="w-full container mx-auto max-w-6xl px-4 py-16">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl">About Us</h1>
        <p className="text-gray-700 py-6">
          Welcome to Dj Store – Elevate Your Sound, Perfect Your Performance
        </p>
        <p className="text-gray-700 py-2">
          Dj Store is your ultimate hub for professional DJ and music production equipment. With a passion for music and a commitment to quality, we offer an extensive selection of gear that meets the needs of DJs, producers, sound engineers, and hobbyists alike. Our mission is to provide you with the tools and technology to create, perform, and produce music at the highest standard.
        </p>
        <p className="text-gray-700 py-6 font-bold text-lg md:text-xl lg:text-2xl">What We Offer</p>
        
        <p className="text-gray-700 py-2">
          <strong>1. DJ Controllers and Mixers</strong><br />
          From classic analog mixers to the latest digital controllers, we have an array of options to suit every preference and skill level. Whether you&apos;re into vinyl or digital, our selection includes the latest models from top brands, helping you find the ideal gear to master your mixing.
        </p>

        <p className="text-gray-700 py-2">
          <strong>2. Turntables and Vinyl</strong><br />
          For vinyl lovers, Dj Store offers a handpicked selection of turntables that deliver warm analog sound and responsive control. Our collection spans vintage-inspired designs to modern models that seamlessly integrate with digital workflows, making it easy for you to keep the tradition of vinyl alive.
        </p>

        <p className="text-gray-700 py-2">
          <strong>3. Studio and Production Equipment</strong><br />
          Our studio gear is perfect for producers looking to refine their craft. From audio interfaces and MIDI controllers to synthesizers and studio monitors, Dj Store equips you with everything needed to produce high-quality tracks. Our knowledgeable team can help guide you through the options, ensuring you find equipment that aligns with your creative goals.
        </p>

        <p className="text-gray-700 py-2">
          <strong>4. Headphones and Monitoring</strong><br />
          A clear, balanced sound is essential for DJs and producers alike. Our headphones and monitoring solutions offer pristine audio quality and comfort for extended sessions. Discover a range of industry-standard brands that cater to professionals demanding accurate sound reproduction.
        </p>

        <p className="text-gray-700 py-2">
          <strong>5. Speakers and PA Systems</strong><br />
          Take your performances to the next level with our powerful speaker and PA system options. From small gigs to large venues, we have the equipment to make your sound heard, including portable and high-powered systems for events and concerts.
        </p>

        <p className="text-gray-700 py-6 font-bold text-lg md:text-xl lg:text-2xl">Why Choose Dj Store?</p>

        <p className="text-gray-700 py-2">
          <strong>1. Curated Selection:</strong> We carry only the best equipment that has been tried, tested, and loved by music professionals. Our team consists of DJs and producers who understand the importance of quality gear.
        </p>

        <p className="text-gray-700 py-2">
          <strong>2. Customer-Centric Service:</strong> Our mission is to support your musical journey. Whether you’re buying your first controller or upgrading a full studio setup, our customer service team is here to provide guidance and support every step of the way.
        </p>

        <p className="text-gray-700 py-2">
          <strong>3. Competitive Prices:</strong> We believe in making high-quality equipment accessible to everyone. Dj Store offers competitive pricing and regular promotions to help you get the gear you want without breaking the bank.
        </p>

        <p className="text-gray-700 py-2">
          <strong>4. Resource Hub:</strong> At Dj Store, we’re not just about selling equipment; we’re also a resource for learning. Our website includes tips, tutorials, and industry news, keeping you up-to-date with the latest in music technology and DJ culture.
        </p>

        <p className="text-gray-700 py-6">
          Whether you’re performing live, recording in the studio, or just beginning to experiment with sound, Dj Store is here to empower you with the tools you need. Join us, explore our collection, and take your music to new heights with the gear that drives your creativity.
        </p>
      </div>
    </div>
  );
}
