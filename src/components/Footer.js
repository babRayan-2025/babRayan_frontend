import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 px-4 sm:px-6 pt-12 pb-6 font-[sans-serif]">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        
        <div className="space-y-4">
          <h6 className="text-sm text-white font-medium">RESOURCES</h6>
          <ul className="space-y-2.5">
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Graphic Design Tools</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Video Editing Tools</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Image Enhancer</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Remove Backgrounds</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Photo Enhancement</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Explore All Tools</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h6 className="text-sm text-white font-medium">HELPFUL LINKS</h6>
          <ul className="space-y-2.5">
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Subscription Plans</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Our Story</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Developer API</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Career Opportunities</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Become a Contributor</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Brand Guidelines</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Upcoming Events</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Search Insights</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Latest Articles</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h6 className="text-sm text-white font-medium">POLICIES</h6>
          <ul className="space-y-2.5">
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Terms & Conditions</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">User Agreement</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Data Privacy Policy</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Copyright Notice</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Cookie Usage Policy</Link></li>
            <li><Link href="#" className="text-[13px] text-gray-400 hover:text-white">Manage Cookies</Link></li>
          </ul>
        </div>

        <div className="space-y-4">
          <h6 className="text-sm text-white font-medium">SOCIAL MEDIA</h6>
          <ul className="flex space-x-4">
            <li>
              <a href="https://facebook.com" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" className="fill-blue-600 w-8 h-8" viewBox="0 0 49.652 49.652">
                  <path d="M24.826 0C11.137 0 0 11.137 0 24.826c0 13.688 11.137 24.826 24.826 24.826 13.688 0 24.826-11.138 24.826-24.826C49.652 11.137 38.516 0 24.826 0zM31 25.7h-4.039v14.396h-5.985V25.7h-2.845v-5.088h2.845v-3.291c0-2.357 1.12-6.04 6.04-6.04l4.435.017v4.939h-3.219c-.524 0-1.269.262-1.269 1.386v2.99h4.56z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 112.196 112.196">
                  <circle cx="56.098" cy="56.097" r="56.098" fill="#007ab9" />
                  <path fill="#fff" d="M89.616 60.611v23.128H76.207V62.161c0-5.418-1.936-9.118-6.791-9.118-3.705 0-5.906 2.491-6.878 4.903-.353.862-.444 2.059-.444 3.268v22.524h-13.41s.18-36.546 0-40.329h13.411v5.715c-.027.045-.065.089-.089.132h.089v-.132c1.782-2.742 4.96-6.662 12.085-6.662 8.822 0 15.436 5.764 15.436 18.149z" />
                </svg>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 152 152">
                  <linearGradient id="a" x1="22.26" x2="129.74" y1="22.26" y2="129.74" gradientUnits="userSpaceOnUse">
                    <stop offset="0" stopColor="#fae100" />
                    <stop offset=".15" stopColor="#fcb720" />
                    <stop offset=".3" stopColor="#ff7950" />
                    <stop offset=".5" stopColor="#ff1c74" />
                    <stop offset="1" stopColor="#6c1cd1" />
                  </linearGradient>
                  <g data-name="Layer 2">
                    <g data-name="03.Instagram">
                      <rect width="152" height="152" fill="url(#a)" rx="32" />
                      <path fill="#fff" d="M75.999 37.42c-21.297 0-38.433 17.135-38.433 38.433 0 21.297 17.136 38.432 38.433 38.432 21.298 0 38.433-17.135 38.433-38.432 0-21.298-17.135-38.433-38.433-38.433zM75.999 102.25c-14.7 0-26.753-12.053-26.753-26.753 0-14.7 12.053-26.753 26.753-26.753 14.7 0 26.753 12.053 26.753 26.753 0 14.7-12.053 26.753-26.753 26.753zM118.607 30.394a4.379 4.379 0 1 1-4.379-4.379 4.379 4.379 0 0 1 4.379 4.379z" />
                    </g>
                  </g>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
